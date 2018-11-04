import axios from 'axios';

const GetMatches = async match => {
  const response = await axios({
    method: 'get',
    url: '/backend/matches'
  });

  return response;
};

export default GetMatches;
