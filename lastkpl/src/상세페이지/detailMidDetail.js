import { Box } from "@mui/material";
import { Route } from "react-router-dom";

export default function MidDetail({ resimage }) {
  return (
    <Box sx={{ width: '100%', padding: '4rem', alignContent: "center" }}>
      {resimage.map(({ url }) => (
        <img src={`http://54.200.255.83:3000/${url}`} alt="이미지"></img>
      ))}
    </Box>
  );
}
