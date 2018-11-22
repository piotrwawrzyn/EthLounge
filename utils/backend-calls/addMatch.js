import axios from 'axios';

const AddMatch = async match => {
  const data = {
    teams: [{ id: match.teams[0] }, { id: match.teams[1] }],
    league: match.league,
    startTime: match.startTime,
    pandaID: match.pandaID,
    numberOfGames: match.numberOfGames,
    serie: match.serie
  };

  const response = await axios({
    method: 'post',
    url: '/backend/new_match',
    data: data
  });

  return response;
};

export default AddMatch;
