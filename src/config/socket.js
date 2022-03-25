import io from 'socket.io-client';

export const SOCKET_PATH = "http://localhost:8888";

const socket = io(SOCKET_PATH);

export { socket };