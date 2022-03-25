import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Message({ text, authorName, isAuthor }) {
  return (
    <Box width="40%" style={{
      backgroundColor: isAuthor ? "#6C90FF" : "#FCFCFC",
      padding: "14px",
      filter: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))",
      fontWeight: 400,
      fontSize: 14,
      color: "#14142B",
      borderRadius: 4,
      marginBottom: 10,
    }}
      className="word-break"
    >
      <Typography variant="span" display="block" style={{
        fontSize: 12,
        color: isAuthor ? "rgba(252, 252, 252, 0.5)" : "rgba(129, 145, 169, 1)",
        marginBottom: 8,
      }}>{authorName}</Typography>
      <Typography variant="p" style={{
        color: isAuthor ? "#FFFFFF" : "#14142B",
      }}>{text}</Typography>
    </Box >
  );
}
