import axios from 'axios';
import { backend } from '../config/config';

const CookieCall = async (req, path) => {
  let response;

  if (req) {
    if (req.headers.cookie) {
      console.log('Performing GET on ' + `${backend}${path}`);
      try {
        response = await axios.get(`${backend}${path}`, {
          headers: { cookie: req.headers.cookie }
        });
      } catch (err) {
        console.log(err);
      }
    }
  } else {
    response = await axios.get(path);
  }

  return response;
};

export default CookieCall;
