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

  server.use(proxy(`${backend}/login`));
  server.use(proxy(`${backend}/logout`));
  server.use(proxy(`${backend}/api/current_gambler`));
  server.use(proxy(`${backend}/admin/login`));
  server.use(proxy(`${backend}/admin/logout`));
  server.use(proxy(`${backend}/api/current_admin`));
  server.use(proxy(`${backend}/backend/new_team`));
  server.use(proxy(`${backend}/api/teams`));

  server.use(handler).listen(port, err => {
    if (err) throw err;
  });
});
