import axios from 'axios';
import { backend } from '../../config/config';

const AddToken = async token => {
  const data = new FormData();
  data.append('displayName', token.displayName);
  data.append('symbol', token.symbol);
  data.append('address', token.address);
  data.append('decimals', token.decimals);
  data.append('logo', token.logo);

  const response = await axios({
    method: 'post',
    url: '/backend/new_token',
    data: data,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  });

  return response;
};

export default AddToken;
