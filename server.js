const { PeerServer } = require("peer");
const { v4: uuidv4 } = require('uuid');

const customGenerationFunction = () => uuidv4();

const peerServer = PeerServer({
  port: 9000,
  path: "/peerify",
  generateClientId: customGenerationFunction,
});

peerServer.on("connection", (client) =>
  console.log("client connected", client.id)
);

peerServer.on("disconnect", (client) =>
  console.log("client disconnected", client.id)
);
