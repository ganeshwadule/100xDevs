import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const allSockets: WebSocket[] = [];

wss.on("connection", (socket: WebSocket) => {
  allSockets.push(socket);

  console.log("Client connected");

  socket.on("message", (e) => {
    allSockets.forEach((s) => s.send(e.toString()));
  });
});
