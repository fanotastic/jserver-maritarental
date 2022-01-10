const jsonServer = require('json-server'); //library json-server
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // identifikasi routing url dari json-server 
const middlewares = jsonServer.defaults(); // menjadikan json-server sebagai route url utama
const port = process.env.PORT || 3000; // konfigurasi port json-server

server.use(middlewares);
server.use(router);

server.listen(port);