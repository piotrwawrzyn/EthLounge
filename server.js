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

  // Set favicon

  const faviconOptions = {
    root: __dirname + '/static/'
  };

  server.get('/favicon.ico', (req, res) =>
    res.status(200).sendFile('favicon.ico', faviconOptions)
  );

  // Proxy: Auth user
  server.use(proxy(`${backend}/login`, { changeOrigin: true }));
  server.use(proxy(`${backend}/register`, { changeOrigin: true }));
  server.use(proxy(`${backend}/logout`, { changeOrigin: true }));
  server.use(proxy(`${backend}/verify`, { changeOrigin: true }));
  server.use(
    proxy(`${backend}/resend-verification-email`, { changeOrigin: true })
  );

  // Proxy: API
  server.use(proxy(`${backend}/api`, { changeOrigin: true }));

  // Proxy: Images
  server.use(proxy(`${backend}/img`, { changeOrigin: true }));

  // User actions
  server.use(proxy(`${backend}/place_bet`, { changeOrigin: true }));

  // Proxy: Backend
  server.use(proxy(`${backend}/backend`, { changeOrigin: true }));

  // Proxy: Panda API
  server.use(
    proxy(`${backend}/api/pandascore/upcoming_matches`, { changeOrigin: true })
  );

  server.use(handler).listen(port, err => {
    if (err) throw err;
  });
});
