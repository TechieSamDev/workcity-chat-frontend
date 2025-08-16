import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.ENV_SOCKET_URL || 'http://localhost:5000';
const socket = io(SOCKET_URL);

console.log(socket);
export default socket;
