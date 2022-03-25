import io from 'socket.io-client';

export const SOCKET_PATH = "https://simple-chat-01.herokuapp.com";

const socket = io(SOCKET_PATH);

export { socket };