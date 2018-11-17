import axios from 'axios';

const getMatches = async match => {
  const response = await axios({
    method: 'get',
    url: '/backend/matches'
  });

  return response;
};

export default getMatches;
