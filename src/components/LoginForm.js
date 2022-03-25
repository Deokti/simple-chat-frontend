import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/app.context";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { socket, SOCKET_PATH } from "../config/socket";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const { setUser, setUsers, setMessages } = useContext(AppContext);

  const setValue = (e) => {
    setUsername(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username) return;
    if (username.length < 2) return;
    if (username.length > 20) return;

    const obj = { username, uid: uuidv4() };
    socket.emit("JOINED", obj);
    const { messages, users } = await (await axios.get(SOCKET_PATH + "/root")).data;
    setUsers(users);
    setMessages(messages);
    setUser(obj);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Войти
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          value={username}
          label="Превдоним (от 2 до 20 символов)"
          onChange={setValue}
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Присоедениться
        </Button>
      </Box>
    </Box>
  );
}
