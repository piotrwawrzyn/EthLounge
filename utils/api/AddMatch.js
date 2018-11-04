import axios from 'axios';

const AddMatch = async match => {
  const data = {
    teams: match.teams,
    league: match.league,
    startTime: match.startTime,
    pandaID: match.pandaID
  };

  const response = await axios({
    method: 'post',
    url: '/backend/new_match',
    data: data
  });

  return response;
};

export default AddMatch;
