import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

app.use(express.static('public'));

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(socket);
});

server.listen(5000, () => {
  console.log('Running at localhost:5000');
});
