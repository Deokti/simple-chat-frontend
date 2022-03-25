import { createContext, useState } from "react";

export const SocketClientContext = createContext({ io: null });

export const SocketClientContectProvider = ({ io, children }) => {
  const [socket, setSocket] = useState(io);

  return (
    <SocketClientContext.Provider value={{ io: socket, setSocket }}>
      {children}
    </SocketClientContext.Provider>
  )
}