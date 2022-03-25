import { createContext, useState } from "react";

export const AppContext = createContext({
  user: null,
  users: null,
  messages: null
});

export const AppContextProvider = ({ children, user, users, messages }) => {
  const [appUser, setUser] = useState(user);
  const [appUsers, setUsers] = useState(users);
  const [appMessages, setMessages] = useState(messages);

  return (
    <AppContext.Provider value={{
      user: appUser,
      users: appUsers,
      messages: appMessages,
      setUser,
      setUsers,
      setMessages
    }}>
      {children}
    </AppContext.Provider>
  );
}