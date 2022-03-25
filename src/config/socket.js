import io from 'socket.io-client';

export const SOCKET_PATH = "https://simple-chat-01.herokuapp.com";

const socket = io(SOCKET_PATH, {
  'forceNew': true,
  'reconnection': true,
  'reconnectionDelay': 1000,
  'reconnectionDelayMax': 5000,
  'reconnectionAttempts': 5
});

export { socket };