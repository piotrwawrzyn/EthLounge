const routes = require('next-routes')();

routes.add('match', '/matches/:id', '/matches/match');
routes.add('dashboard', '/admin', '/admin/dashboard');
routes.add('bets', '/bets', '/myBets');
routes.add('deposit', '/deposit', '/deposit');
routes.add(
  'user',
  '/admin/dashboard/users/user/:id',
  '/admin/dashboard/users/user'
);

module.exports = routes;
