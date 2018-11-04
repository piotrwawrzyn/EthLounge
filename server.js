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

  // if (process.env.NODE_ENV === 'production') {
  //    server.use(express.static('client/build'));
  // }

  // Proxy: Auth user
  server.use(proxy(`${backend}/login`, { changeOrigin: true }));
  server.use(proxy(`${backend}/register`, { changeOrigin: true }));
  server.use(proxy(`${backend}/logout`, { changeOrigin: true }));

  // Proxy: API
  server.use(proxy(`${backend}/api/match_info`, { changeOrigin: true }));
  server.use(proxy(`${backend}/api/teams`, { changeOrigin: true }));
  server.use(proxy(`${backend}/api/leagues`, { changeOrigin: true }));
  server.use(proxy(`${backend}/api/current_user`, { changeOrigin: true }));
  server.use(proxy(`${backend}/api/tokens`, { changeOrigin: true }));

  // Proxy: Backend
  server.use(proxy(`${backend}/backend/new_team`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/update_team`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/delete_team`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/new_token`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/update_token`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/delete_token`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/new_league`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/update_league`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/delete_league`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/new_match`, { changeOrigin: true }));
  server.use(proxy(`${backend}/backend/matches`, { changeOrigin: true }));

  // Proxy: Panda API
  server.use(
    proxy(`${backend}/api/pandascore/upcoming_matches`, { changeOrigin: true })
  );

  server.use(handler).listen(port, err => {
    if (err) throw err;
  });
});
