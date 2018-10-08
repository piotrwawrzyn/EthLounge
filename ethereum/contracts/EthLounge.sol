//solium-disable linebreak-style
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
   address public eth;
  
   mapping(string => Game) activeGames;
   mapping(string => PostGameData) postGameData;
   

   
   struct Game {
       
       string gameID;
       string[2] teams;
       string winningTeam;
       mapping(string => Bet[]) bets;
       bool isLocked;
       bool isFinalized;
       mapping(string => mapping(address => uint)) amountsBet;
       mapping(string => address[]) tokensBet;
       mapping(string => mapping(address => bool)) wasSuchTokenBet;
       
       uint[] multipliers;
       
   }
   
    struct PostGameData {
       address[] tokensToSplit;
       uint[] values;
       uint[] multipliers;
       uint totalWeiBetWinningTeam;
       uint totalWeiBetLosingTeam;
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
       eth = 0x0000000000000000000000000000000000000000;
       
       addSupportedToken(0x0000000000000000000000000000000000000000);
       addSupportedToken(0x7f0C267ef144D319CcF1d724c222a59A50CD7B43);
   }
   
   function() public payable {
       balances[eth][msg.sender] += msg.value;
   }
   
   function depositEther() public payable {
       balances[eth][msg.sender] += msg.value;
   }
   
   function depositToken(address token, uint amount) public payable {
       require(isSupportedToken[token]);
       require(ERC20(token).transferFrom(msg.sender, address(this), amount));
       
       balances[token][msg.sender] += amount;
   }
   
   function withdraw(address[] tokens, uint[] amounts) public enoughBalances(tokens, amounts) {
       
       
       for (uint i = 0; i < tokens.length; i++) {
           if (tokens[i] == eth) {
               msg.sender.transfer(amounts[i]);
               balances[eth][msg.sender] -= amounts[i];
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
           game.amountsBet[teamID][tokens[i]] += amounts[i];
           
           if(!game.wasSuchTokenBet[teamID][tokens[i]]) {
               game.wasSuchTokenBet[teamID][tokens[i]] = true;
               game.tokensBet[teamID].push(tokens[i]);
           }
           
       }
       
       Bet memory newBet = Bet({
           betMaker: msg.sender,
           tokensDeposited: tokens,
           amounts: amounts
       });
       
       
       activeGames[gameID].bets[teamID].push(newBet);
       
   }
   
    function getGameInfo(string gameID) public view returns (string teamID_1, string teamID_2, uint totalBets_1, uint totalBets_2) {
       Game storage game = activeGames[gameID];
       
       return (
           game.teams[0],
           game.teams[1],
           game.bets[game.teams[0]].length,
           game.bets[game.teams[1]].length
           );
   }
   
   function getBalances() public view returns (address[] , uint[]) {
       uint[] memory values = new uint[](supportedTokens.length);
       
       for (uint i = 0; i < supportedTokens.length; i++) {
           values[i] = balances[supportedTokens[i]][msg.sender];
       }
       return(supportedTokens, values);
   }
   
   // Contract only (private)
   
   function getTokenValues(string gameID, string losingTeam, address[] memory tokens) public view returns(uint[]) {
       uint[] memory values = new uint[](tokens.length);
       Game storage game = activeGames[gameID];
       
       for (uint i = 0; i < tokens.length; i++) {
           values[i] = game.amountsBet[losingTeam][tokens[i]];
       }
       
       return values;
   }
   
   function cutHouseEdge(address[] tokens, uint[] values) private returns(uint[]) {
       for (uint i = 0; i < values.length; i++) {
           if (values[i] > 0) {
               uint houseEdge = values[i] / 50;
               values[i] = values[i] -= houseEdge;
               balances[tokens[i]][houseEdgeWallet] += houseEdge;
           }
       }
       
       return values;
   }
   
   function minifyMultipliers(string gameID, string losingTeam, address[] memory  allTokens, uint numberOfTokensBet) private view returns(uint[]) {
       Game storage game = activeGames[gameID];
       
       uint[] memory minifiedMultipliers = new uint[](numberOfTokensBet);
       uint counter = 0;
       
       for (uint i = 0; i < allTokens.length; i++) {
           if (game.wasSuchTokenBet[losingTeam][allTokens[i]]) {
               minifiedMultipliers[counter] = game.multipliers[i];
               counter++;
           }
       }
       
       return minifiedMultipliers;
   }
   
   function returnBetTokens(Bet bet) private {
        for (uint i = 0; i < bet.tokensDeposited.length; i++) {
               balances[bet.tokensDeposited[i]][bet.betMaker] += bet.amounts[i];
           }
   }
   
   function calculateTotalWei(address[] memory tokens, uint[] memory values, uint[] memory multipliers) private returns (uint) {
       uint totalWeiBet = 0;
       
       for (uint i = 0; i < tokens.length; i++) {
           totalWeiBet += values[i] * multipliers[i] / 10**18;
       }
       
       return totalWeiBet;
   }
   
   function getTotalWeiWinningTeam(string gameID, string winningTeam) private view returns (uint) {
       Game storage game = activeGames[gameID];
       
       address[] memory tokens = game.tokensBet[winningTeam];
       uint[] memory values = getTokenValues(gameID, winningTeam, tokens);
       uint[] memory multipliers = minifyMultipliers(gameID, winningTeam, supportedTokens, values.length);
       
       
       return calculateTotalWei(tokens, values, multipliers);
   }
   
       function getWinningBetsArray(string gameID) public view returns (uint){
           return activeGames[gameID].bets[activeGames[gameID].winningTeam].length;
       }
   
     function draw(string gameID) public restricted {
        require(activeGames[gameID].isFinalized);
         
        Game storage game = activeGames[gameID];
         
        Bet[] storage winningBets = activeGames[gameID].bets[game.winningTeam];
        
        PostGameData storage pgd = postGameData[gameID];
      
        uint limitPerCall = 50;
        uint counter = 0;
        if (winningBets.length < limitPerCall) limitPerCall = winningBets.length;
          
            while (counter < limitPerCall) {
                counter++;
                returnBetTokens(winningBets[0]);
                uint weiDue = calculateTotalWei(winningBets[0].tokensDeposited, winningBets[0].amounts, pgd.multipliers) * pgd.totalWeiBetLosingTeam / pgd.totalWeiBetWinningTeam;

                pgd.values = reward(weiDue, winningBets[0], pgd.tokensToSplit, pgd.values, pgd.multipliers); 
                
                winningBets[0] = winningBets[winningBets.length-1];
                delete winningBets[winningBets.length-1];
                winningBets.length--;
            } 
       
       if (winningBets.length == 0) {
           delete activeGames[gameID];
           delete postGameData[gameID];
       }
   }

   function reward(uint weiDue, Bet memory winningBet, address[] storage tokens, uint[] storage values, uint[] storage multipliers) private returns(uint[]) {
       
       uint initialWeiDue = weiDue;
       uint nonce = 0;

       while ( weiDue > 0 ) {
            uint randomIndex = uint(keccak256(now, nonce++, winningBet.betMaker));

            randomIndex = randomIndex % tokens.length;
            
            if (values[randomIndex] > 0) {
                uint weiWorth = (values[randomIndex] * multipliers[randomIndex]) / 10**18;
                uint percentInitialWeiDue = (weiDue * 10**18) / initialWeiDue;
                
                uint amountTokenToGive;
                uint amountWeiToGive;
                
                if (weiWorth <= weiDue) {
                    // Give all tokens to the account
                    amountTokenToGive = values[randomIndex];
                    amountWeiToGive = weiWorth;
                } 
                else if ( percentInitialWeiDue <= 50 * 10**16 ) {
                    // Complete the reward with these tokens
                    amountWeiToGive = weiDue;
                    amountTokenToGive = (weiDue * multipliers[randomIndex]) / 10**18;
                } else {
                    // Supply 20-60% of reward
                    uint randomPercent = uint(keccak256(now, nonce++, winningBet.betMaker)) % 40;
                    randomPercent = (randomPercent + 20) * 10**16;
                    amountWeiToGive = (weiDue * randomPercent) / 10**18;
                    amountTokenToGive = (amountWeiToGive * multipliers[randomIndex]) / 10**18;

                }
                
                weiDue -= amountWeiToGive;
                balances[tokens[randomIndex]][winningBet.betMaker] += amountTokenToGive;
                values[randomIndex] -= amountTokenToGive;
            }
            
        }
        
        return values;
   }
   
   
   // Admin only
   
   function createNewGame(string gameID, string teamID_1, string teamID_2) public restricted {
       
       Game memory newGame = Game({
           gameID: gameID,
           winningTeam: '',
           teams: [teamID_1, teamID_2],
           isLocked: false,
           isFinalized: false,
           multipliers: new uint[](supportedTokens.length)
       });
       
       activeGames[gameID] = newGame;
   }
   
   function lockGame(string gameID, uint[] multipliers) public restricted {
       activeGames[gameID].isLocked = true;
       activeGames[gameID].multipliers = multipliers;
   }
   

   function finalizeGame(string gameID, string winningTeam) public restricted isProperTeamID(gameID, winningTeam) {
       
      Game storage game = activeGames[gameID];
      
      game.winningTeam = winningTeam;
      
      string memory losingTeam;
       
      if (keccak256(abi.encodePacked(game.teams[0])) == keccak256(abi.encodePacked(winningTeam))) {
          losingTeam = game.teams[1];
      } else {
          losingTeam = game.teams[0];
      }
       
      address[] memory tokens = game.tokensBet[losingTeam];
      uint[] memory values = getTokenValues(gameID, losingTeam, tokens);
      uint[] memory multipliers = minifyMultipliers(gameID, losingTeam, supportedTokens, values.length);
      
      uint totalWeiBetLosingTeam = calculateTotalWei(tokens, values, multipliers);
      uint totalWeiBetWinningTeam = getTotalWeiWinningTeam(gameID, winningTeam);
       
      
      postGameData[gameID] = PostGameData({
         tokensToSplit: tokens,
         values: values,
         multipliers: multipliers,
         totalWeiBetWinningTeam: totalWeiBetWinningTeam,
         totalWeiBetLosingTeam: totalWeiBetLosingTeam
      });
      
      game.isFinalized = true;
      
      Bet[] winningBets = game.bets[winningTeam];
      
      if (totalWeiBetLosingTeam == 0 || totalWeiBetWinningTeam == 0) {
          for (uint i = 0; i < winningBets.length; i++) {
              returnBetTokens(winningBets[i]);
          }
          
           delete activeGames[gameID];
           delete postGameData[gameID];
      } 
      
      draw(gameID);
       
   }
   
   function addNewAdmin(address newAdmin) public restricted {
       admins[newAdmin] = true;
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
   
   function getTokensBet(string gameID, string teamID) public view returns (address[]) {
       return activeGames[gameID].tokensBet[teamID];
   }
   
   
}



