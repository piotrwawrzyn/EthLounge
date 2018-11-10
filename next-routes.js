const routes = require('next-routes')();

routes.add('match', '/matches/:id', '/matches/match');

module.exports = routes;
