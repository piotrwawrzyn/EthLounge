//solium-disable linebreak-style
pragma solidity ^0.4.17;



contract ERC20 {
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
    function transfer(address _to, uint256 _value) public;
}

contract EthLounge {
    
   mapping(address => bool) admins;
   address houseEdgeWallet;
   
   mapping(address => mapping(address => uint)) balances;
   mapping(address => bool) isSupportedToken;
   address[] supportedTokens;
   address eth;
  
   mapping(string => Game) activeGames;
   
   struct Game {
       
       string gameID;
       string[2] teams;
       mapping(string => Bet[]) bets;
       bool isLocked;
       
       mapping(string => mapping(address => uint)) amountsBet;
       mapping(string => address[]) tokensBet;
       mapping(string => mapping(address => bool)) wasSuchTokenBet;
       
       uint[] multipliers;
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
   
   function getTokenValues(string gameID, string losingTeam, address[] tokens) public view returns(uint[]) {
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
   
   function minifyMultipliers(string gameID, string losingTeam, address[] allTokens, uint numberOfTokensBet) private view returns(uint[]) {
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
   
   
   // Admin only
   
   function createNewGame(string gameID, string teamID_1, string teamID_2) public restricted {
       
       Game memory newGame = Game({
           gameID: gameID,
           teams: [teamID_1, teamID_2],
           isLocked: false,
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
      
      string memory losingTeam;
       
      if (keccak256(abi.encodePacked(game.teams[0])) == keccak256(abi.encodePacked(winningTeam))) {
          losingTeam = game.teams[1];
      } else {
          losingTeam = game.teams[0];
      }
       
      address[] memory tokens = game.tokensBet[losingTeam];
      uint[] memory values = cutHouseEdge(tokens, getTokenValues(gameID, losingTeam, tokens));
      uint[] memory multipliers = minifyMultipliers(gameID, losingTeam, supportedTokens, values.length);
      
       
       Bet[] memory winningBets = game.bets[winningTeam];
       
       for (uint i = 0; i < winningBets.length; i++) {
           // Return tokens deposited by Winner
          returnBetTokens(winningBets[i]);
          
          // Give him bucket payout
          
          //delete winningBets[i]
       }
       
       //delete match and mapping
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
   
   
   function setTestingAmount(uint amount) public {
       balances[0x7f0C267ef144D319CcF1d724c222a59A50CD7B43][msg.sender] = amount;
   }
   
    function setMyWalletToBeHouseEdgeWallet() public {
       houseEdgeWallet = msg.sender;
   }
   
   function getTokensBet(string gameID, string teamID) public view returns (address[]) {
       return activeGames[gameID].tokensBet[teamID];
   }
   
   
}
