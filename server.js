const next = require('next');
const nextRoutes = require('./next-routes');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const handler = nextRoutes.getRequestHandler(app);

const port = process.env.PORT || 3000;

const backend = process.env.BACKEND_URL || 'http://localhost:5000';

app.prepare().then(() => {
  const server = express();

  server.use(proxy(`${backend}/admin/login`));
  server.use(proxy(`${backend}/admin/logout`));
  server.use(proxy(`${backend}/api/current_user`));

  server.use(handler).listen(port, err => {
    if (err) throw err;
  });
});
