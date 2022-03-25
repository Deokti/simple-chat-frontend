import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import { scrollToByRef } from "../helpers/scrollToByRef";
import Message from "./Message";

export default function Messages({ messages, user }) {
  const ref = useRef(null);

  useEffect(() => {
    scrollToByRef(ref);
  }, [messages]);

  return (
    <Box width="100%" height="100%" overflow="auto" padding="8px" marginBottom="10px" ref={ref}>
      {messages.map(({ message, user: authorUser, _id }) => {
        return (
          <Message
            key={_id}
            text={message}
            authorName={`${authorUser.username} (${authorUser.uid})`}
            isAuthor={authorUser.uid === user.uid}
          />
        )
      })}
    </Box>
  );
}
