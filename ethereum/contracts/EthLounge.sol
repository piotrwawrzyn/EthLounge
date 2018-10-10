pragma solidity ^0.4.17;


contract ERC20 {
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
    function transfer(address _to, uint256 _value) public;
}

contract EthLounge {
    
   mapping(address => bool) public admins;
   address public houseEdgeWallet;
   
   mapping(address => mapping(address => uint)) public balances;
   mapping(address => bool) public isSupportedToken;
   address[] public supportedTokens;
   uint public drawLimit;
  
   mapping(string => Game) activeGames;

   

   
   struct Game {
       
       string gameID;
       string[2] teams;
       string winningTeam;
       string losingTeam;
       
       mapping(string => uint) totalWeiBet;
       uint betsCleared;
       
       mapping(string => Bet[]) bets;
       mapping(string => Token[]) tokens;
       mapping(address => uint) multipliers;
       
       mapping(string => mapping(address => bool)) wasSuchTokenBet;
       
       bool isLocked;
       bool isFinalized;
   }
   
   struct Token {
       address addr;
       uint amount;
       uint multiplier;
   }
   
   struct Bet {
       address betMaker;
       address[] tokensDeposited;
       uint[] amounts;
   }
   
   
   modifier restricted {
       require(admins[msg.sender] == true);
       _;
   }
   
   modifier onlyBeforeLocked(string gameID) {
       require(activeGames[gameID].isLocked == false);
       _;
   }
   
   modifier enoughBalances (address[] tokens, uint[] amounts) {
       
        require(tokens.length == amounts.length);
        
        require(tokens.length != 0);
       
        for (uint i = 0; i < tokens.length; i++) {
           require(isSupportedToken[tokens[i]]);
           require(balances[tokens[i]][msg.sender] >= amounts[i]); 
       }
       _;
   }
   
   modifier isProperTeamID (string gameID, string teamID) {
      bytes memory endcodedTeamID = abi.encodePacked(teamID);
      require(keccak256(abi.encodePacked(activeGames[gameID].teams[0])) == keccak256(endcodedTeamID) || keccak256(abi.encodePacked(activeGames[gameID].teams[1])) == keccak256(endcodedTeamID));
      _;
   }
   
   constructor() public {
       admins[msg.sender] = true;
       houseEdgeWallet = 0xA620ADa38bD1233CeBDa8127E3D9cdaDbfBd8de7;
       drawLimit = 100;
       
       addSupportedToken(0x0000000000000000000000000000000000000000);
       addSupportedToken(0x7f0C267ef144D319CcF1d724c222a59A50CD7B43);
   }
   
   function() public payable {
       balances[address(0)][msg.sender] += msg.value;
   }
   
   function depositEther() public payable {
       balances[address(0)][msg.sender] += msg.value;
   }
   
   function depositToken(address token, uint amount) public payable {
       require(isSupportedToken[token]);
       require(ERC20(token).transferFrom(msg.sender, address(this), amount));
       
       balances[token][msg.sender] += amount;
   }
   
   function withdraw(address[] tokens, uint[] amounts) public enoughBalances(tokens, amounts) {
       
       for (uint i = 0; i < tokens.length; i++) {
           if (tokens[i] == address(0)) {
               msg.sender.transfer(amounts[i]);
               balances[address(0)][msg.sender] -= amounts[i];
           }
           else {
               ERC20(tokens[i]).transfer(msg.sender, amounts[i]);
               balances[tokens[i]][msg.sender] -= amounts[i];
           }
       }   
       
   }
  
   
   function placeBet(string gameID, string teamID, address[] tokens, uint[] amounts) public onlyBeforeLocked(gameID) enoughBalances(tokens, amounts) isProperTeamID(gameID, teamID) {
       
       Game storage game = activeGames[gameID];
       
       for (uint i = 0; i < tokens.length; i++) {
           
           balances[tokens[i]][msg.sender] -= amounts[i];
           
           if (!game.wasSuchTokenBet[teamID][tokens[i]]) {
               game.tokens[teamID].push(Token({addr: tokens[i], amount: amounts[i], multiplier: 1}));
               game.wasSuchTokenBet[teamID][tokens[i]] = true;
           } else {
               Token[] memory copyOfTokens = game.tokens[teamID];
               for (uint j = 0; j < copyOfTokens.length; j++) {
                    if (copyOfTokens[j].addr == tokens[i]) {game.tokens[teamID][j].amount += amounts[i]; break;}
               }  
           }
           
       }
       
       activeGames[gameID].bets[teamID].push(Bet({
           betMaker: msg.sender,
           tokensDeposited: tokens,
           amounts: amounts
       }));
       
   }
   
   
   function getBalances() public view returns (address[] , uint[]) {
       uint[] memory values = new uint[](supportedTokens.length);
       
       for (uint i = 0; i < supportedTokens.length; i++) {
           values[i] = balances[supportedTokens[i]][msg.sender];
       }
       return(supportedTokens, values);
   }
   
   // Contract only (private)
   
   function returnDeposit(Bet bet) private {
        for (uint i = 0; i < bet.tokensDeposited.length; i++) {
               balances[bet.tokensDeposited[i]][bet.betMaker] += bet.amounts[i];
           }
   }
   
   function calculateWeiDue(Bet bet, string gameID) private view returns(uint) {
       Game storage game = activeGames[gameID];
       uint result = 0;
       
       for (uint i = 0; i < bet.tokensDeposited.length; i++) {
           result += (bet.amounts[i] * game.multipliers[bet.tokensDeposited[i]]) / 10**18;
       }
       
       return result;
   } 
   
     function draw(string gameID) public restricted {
        require(activeGames[gameID].isFinalized);
        Game storage game = activeGames[gameID];
        Token[] memory tokens = game.tokens[game.losingTeam];
        Bet[] memory bets = game.bets[game.winningTeam];
        
        uint limit = drawLimit;
        uint start = activeGames[gameID].betsCleared;
        
        if (bets.length - start > limit) {
            limit = start + limit;
        } else {
            limit = bets.length;
        }
        
        for (uint i = start; i < limit; i++) {
            returnDeposit(bets[i]);
            tokens = assignWinnings(tokens, bets[i], calculateWeiDue(bets[i], gameID));
        }
        
        if (start + limit == bets.length) {
          delete activeGames[gameID];  
        } else {
            activeGames[gameID].betsCleared += (limit - start);
        }
        
        //assuming everyone got his winning already
        
        
        
   }
   
   function assignWinnings(Token[] tokens, Bet bet, uint initialWeiDue) private returns (Token[]) {
       uint weiDue = initialWeiDue;
       uint nonce = 0;
      
        while ( weiDue > 0 ) {
            uint amountTokenToGive;
            uint amountWeiToGive;
            
            if (tokens.length != 1) {
                bool empty = false;
                uint index = uint(keccak256(nonce++, bet.betMaker, block.timestamp)) % tokens.length;
                
                
                    uint weiWorth = (tokens[index].amount * tokens[index].multiplier) / 10**18;
                    
                    // percent of initial weiDue
                    uint percent = (weiDue * 10**22) / initialWeiDue;
                    
                    if (percent <= 50 * 10**20) {
                        // Complete the reward with these tokens
                        amountWeiToGive = weiDue;
                        amountTokenToGive = (weiDue * tokens[index].multiplier) / 10**18; 
                    } else if (weiWorth <= weiDue) {
                        amountTokenToGive = tokens[index].amount;
                        amountWeiToGive = weiWorth;
                        empty = true;                    
                    } else {
                        percent = uint(keccak256(nonce, bet.betMaker, block.timestamp)) % 71;
                        
                        if (percent > 60) percent = 10**22; 
                        else percent = (percent + 20) * 10**20;
                  
                        amountWeiToGive = (weiDue * percent) / 10**22;
                        amountTokenToGive = (amountWeiToGive * tokens[index].multiplier) / 10**22;  
                    }
                    
            } else {
                index = 0;
                amountWeiToGive = weiDue;
                amountTokenToGive = (weiDue * tokens[index].multiplier) / 10**18; 
           } 
           
            weiDue -= amountWeiToGive;
            balances[tokens[index].addr][bet.betMaker] += amountTokenToGive;
            tokens[index].amount -= amountTokenToGive;
            if (empty) tokens = reduceTokens(tokens, index);
             
            
            
        }
        
        return tokens;
   }
   
   function reduceTokens(Token[] tokens, uint index) private pure returns(Token[]) {
       Token[] memory reducedTokens = new Token[](tokens.length-1);
       
       for (uint i = 0; i < tokens.length-1; i++) {
           if (i != index) reducedTokens[i] = tokens[i];
       }
       
       return reducedTokens;
   }

   
   // Admin only
   
   function createNewGame(string gameID, string teamID_1, string teamID_2) public restricted {
       
       Game memory newGame = Game({
           gameID: gameID,           
           teams: [teamID_1, teamID_2],
           winningTeam: '',
           losingTeam: '',
           betsCleared: 0,
           isLocked: false,
           isFinalized: false
       });
       
       activeGames[gameID] = newGame;
   }
   
   function lockGame(string gameID, address[] tokens, uint[] multipliers) public restricted {
       Game storage game = activeGames[gameID];
       game.isLocked = true;
       
       for (uint t = 0; t < 2; t++) {
           uint totalWeiBet = 0;
           string memory team = game.teams[t];
           Token[] memory copyOfTokens = game.tokens[team];
           for (uint i = 0; i < copyOfTokens.length; i++) {
               for (uint j = 0; j < tokens.length; j++) {
                   if (tokens[j] == copyOfTokens[i].addr) {
                       game.tokens[team][i].multiplier = multipliers[j];
                       game.multipliers[tokens[j]] = multipliers[j];
                       totalWeiBet += (game.tokens[team][i].amount * multipliers[j]) / 10**18;
                       break;
                   }
               }
               game.totalWeiBet[team] =  totalWeiBet;
           }
           
       }

   }
   

   function finalizeGame(string gameID, string winningTeam) public restricted isProperTeamID(gameID, winningTeam) {
      require(activeGames[gameID].isLocked);
      
      Game storage game = activeGames[gameID];
      game.winningTeam = winningTeam;
      game.losingTeam = keccak256(game.teams[0]) == keccak256(winningTeam) ? game.teams[1] : game.teams[0];
      
      game.isFinalized = true;
      
      draw(gameID);
       
       
   }
   
   function addNewAdmin(address newAdmin) public restricted {
       admins[newAdmin] = true;
   }
   
   function removeAdmin(address adminToRemove) public restricted {
       admins[adminToRemove] = false;
   }

   function addSupportedToken(address newToken) public restricted {
       isSupportedToken[newToken] = true;
       supportedTokens.push(newToken);
   }
   
   // Testing functions
   
   function getBalance(address addr) public view returns (uint) {
       return balances[addr][msg.sender];
   }
   
   
   function setTestingTokenAmount(uint amount) public {
       balances[0x7f0C267ef144D319CcF1d724c222a59A50CD7B43][msg.sender] = amount;
   }
   
    function setMyWalletToBeHouseEdgeWallet() public {
       houseEdgeWallet = msg.sender;
   }
   
   
   
}
