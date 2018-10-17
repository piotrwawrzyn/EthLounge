const routes = require('next-routes')();

routes
.add('/index', '/index')
.add('/matches/:id', '/matches/match');

module.exports = routes;