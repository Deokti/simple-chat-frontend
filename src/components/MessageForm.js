import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { socket } from '../config/socket';
import { AppContext } from '../context/app.context';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ user }) {
  const [message, setMessage] = useState("");
  const { setMessages } = useContext(AppContext)

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSend();
  }

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSend();
    };
  }

  function onSend() {
    if (!message) return false;
    const obj = { message, user, _id: uuidv4() };
    socket.emit('SEND_MESSAGE', obj)
    setMessages((prevState) => ([
      ...prevState,
      obj
    ]));
    setMessage("");
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="Написать сообщение"
        hiddenLabel
        value={message}
        onKeyDown={onKeyDown}
        onChange={onChange}
        multiline
        rows={2}
      />
      <Button variant="contained" style={{ marginTop: 5 }} onClick={onSubmit}>
        Отправить
      </Button>
    </form>
  );
}
