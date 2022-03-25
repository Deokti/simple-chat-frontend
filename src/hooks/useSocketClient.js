import { useContext } from "react";
import { SocketClientContext } from "../context/socket.client.context";
import io from 'socket.io-client';

export const useSocketClient = () => {
  const { io: ioContext, setSocket } = useContext(SocketClientContext);

  const connected = async () => {
    if (ioContext) return console.log("[CONNECTION ALREADY ESTABLISHED]:", ioContext);

    const socket = io("http://localhost:8888");
    setSocket(socket);
  }

  const joined = async (username) => {
    ioContext.emit("JOINED", username);
  }

  return {
    connected,
    joined,
  }
}