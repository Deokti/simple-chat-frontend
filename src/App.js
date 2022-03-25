import { useContext, useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import { socket } from "./config/socket";
import { AppContext } from "./context/app.context";

function App() {
  const { setMessages, setUsers, user, users, messages } = useContext(AppContext);

  useEffect(() => {
    socket.on("SET_USERS", setUser);
    socket.on("SET_MESSAGE", setMessage);
    socket.on("USER_DISCONNECT", setUsers);
  }, []);

  function setMessage(message) {
    setMessages((prevState) => ([
      ...prevState,
      message
    ]));
  }

  function setUser(data) {
    setUsers((prevState) => ([
      ...prevState,
      data
    ]));
  }

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
