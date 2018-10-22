const routes = require('next-routes')();

routes.add('/matches/:id', '/matches/match');

module.exports = routes;
