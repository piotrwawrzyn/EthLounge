const next = require('next');
const nextRoutes = require('./next-routes');
const express = require('express');
const proxy = require('http-proxy-middleware');
const { backend } = require('./config/config');

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const handler = nextRoutes.getRequestHandler(app);

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'));
  }

  server.use(proxy(`${backend}/login`), { changeOrigin: true });
  server.use(proxy(`${backend}/logout`), { changeOrigin: true });
  server.use(proxy(`${backend}/api/current_gambler`)), { changeOrigin: true };
  server.use(proxy(`${backend}/admin/login`), { changeOrigin: true });
  server.use(proxy(`${backend}/admin/logout`), { changeOrigin: true });
  server.use(proxy(`${backend}/api/current_admin`), { changeOrigin: true });
  server.use(proxy(`${backend}/backend/new_team`), { changeOrigin: true });
  server.use(proxy(`${backend}/api/teams`), { changeOrigin: true });

  server.use(handler).listen(port, err => {
    if (err) throw err;
  });
});
