const { PeerServer } = require("peer");

const customGenerationFunction = () =>
	(Math.random().toString(36) + "0000000000000000000").substr(2, 16);

const peerServer = PeerServer({
	port: 9000,
	path: "/peerify",
	generateClientId: customGenerationFunction,
});

peerServer.on('connection', (client) => (
  console.log('client connected', client.id)
));

peerServer.on('disconnect', (client) => (
  console.log('client disconnected', client.id)
));