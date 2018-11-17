import axios from 'axios';

const PlaceBet = async bet => {
  const data = {
    matchID: bet.matchID,
    teamID: bet.teamID,
    betMakerID: bet.betMakerID,
    tokensBet: bet.tokensBet
  };

  const response = await axios({
    method: 'post',
    url: '/place_bet',
    data: data
  });

  return response;
};

export default PlaceBet;
