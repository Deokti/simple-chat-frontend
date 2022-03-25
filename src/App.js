import { useCallback } from "react";
import { useContext, useEffect } from "react";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import { socket } from "./config/socket";
import { AppContext } from "./context/app.context";

function App() {
  const { setMessages, setUsers, user, users, messages } = useContext(AppContext);

  const setMessage = useCallback((message) => {
    setMessages((prevState) => ([
      ...prevState,
      message
    ]));
  }, [setMessages]);

  const setUser = useCallback((user) => {
    setUsers((prevState) => ([
      ...prevState,
      user
    ]));
  }, [setUsers]);

  useEffect(() => {
    socket.on("SET_USERS", setUser);
    socket.on("SET_MESSAGE", setMessage);
    socket.on("USER_DISCONNECT", setUsers);
  }, [setMessage, setUser, setUsers]);

  return (
    <div className="App">
      {user
        ? <Homepage user={user} users={users} messages={messages} />
        : <LoginForm />
      }
    </div>
  )
}

export default App;
