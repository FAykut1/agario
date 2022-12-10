import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');

const canvasEl = document.getElementById('canvas') as HTMLCanvasElement;
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;
const ctx = canvasEl.getContext('2d');

socket.on('connection', (args) => {
  console.log(args);
});
