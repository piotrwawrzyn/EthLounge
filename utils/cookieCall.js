import axios from 'axios';
import { backend } from '../config/config';

const cookieCall = async (req, path) => {
  let response;

  if (req) {
    if (req.headers.cookie) {
      response = await axios.get(`${backend}${path}`, {
        headers: { cookie: req.headers.cookie },
        params: req.query
      });
    } else {
      response = await axios.get(`${backend}${path}`);
    }
  } else {
    response = await axios.get(path);
  }

  return response;
};

export default cookieCall;
