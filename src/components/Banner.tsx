import * as Solid from "solid-js";
import { AppBar, Box, Toolbar, Typography, Button } from "@suid/material";
import logo from "assets/dugong.png"

export const [tab, setTab] = Solid.createSignal(0);

export default function Banner(props: { title: string }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#F8E6DC" }}>
        <Toolbar>
          <img src={logo} style={{ height: "48px", "margin-right": "20px" }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            {props.title}
          </Typography>
          <Button
            variant="text"
            onClick={() => setTab(0)}
            sx={{
              color: "black",
              background: tab() === 0 ? "#C8A464" : "inherit",
            }}
          >
            Search
          </Button>
          <Button
            variant="text"
            onClick={() => setTab(1)}
            sx={{
              margin: "0 40px",
              color: "black",
              background: tab() === 1 ? "#C8A464" : "inherit",
            }}
          >
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
