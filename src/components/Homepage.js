import Form from "./MessageForm";
import Messages from "./Messages";
import { Box, Grid, Typography } from "@mui/material";

export default function Homepage({ user, users, messages }) {

  return (
    <Box width={1000} style={{
      border: '1px solid rgb(238 238 238)',
      height: "calc(100vh - 100px)"
    }}
    >
      <Grid container spacing={0} style={{ height: "100%" }}>
        <Grid item xs={3} style={{ backgroundColor: "whitesmoke" }} padding={2}>
          <Typography variant="h6">Онлайн ({users.length})</Typography>
          <Box component="ul" style={{
            listStyle: "none",
            paddingLeft: 0,
            marginTop: 5,
          }}>
            {users.map(({ username, uid }, key) => {
              return (
                <Box component="li" key={uid} style={{
                  padding: 8,
                  backgroundColor: "#FFF",
                  fontWeight: 500,
                  fontSize: 14,
                  marginBottom: 6,
                  borderRadius: 4,
                }}>
                  {username}
                </Box>
              )
            })}
          </Box>
        </Grid>
        <Grid item xs={9} padding={2} style={{ height: "calc(100% - 120px)" }}>
          <Messages user={user} messages={messages} />
          <Form user={user} />
        </Grid>
      </Grid>

    </Box>
  );
} 
