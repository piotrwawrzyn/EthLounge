import axios from 'axios';

const AddLeague = async league => {
  const data = new FormData();
  data.append('logo', league.logo);
  data.append('displayName', league.displayName);
  data.append('pandaID', league.pandaID);

  const response = await axios({
    method: 'post',
    url: '/backend/new_league',
    data: data,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  });

  return response;
};

export default AddLeague;
