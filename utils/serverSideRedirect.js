import { Router } from '../next-routes';
const serverSideRedirect = (res, path) => {
  if (res) {
    res.writeHead(302, {
      Location: path
    });
    res.end();
  } else {
    Router.pushRoute(path);
  }
};

export default serverSideRedirect;
