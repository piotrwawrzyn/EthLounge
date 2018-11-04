import axios from 'axios';

const AddTeam = async team => {
  const data = new FormData();
  data.append('logo', team.logo);
  data.append('displayName', team.displayName);
  data.append('pandaID', team.pandaID);

  const response = await axios({
    method: 'post',
    url: '/backend/new_team',
    data: data,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  });

  return response;
};

export default AddTeam;
