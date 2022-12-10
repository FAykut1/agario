import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import parse from './mapParser';

const app = express();
app.use(express.static('public'));

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.once;
});

async function main() {
  const tileMap = await parse();
}

server.listen(5000, () => {
  console.log('Running at localhost:5000');

  main();
});
