import MenuIcon from "@suid/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@suid/material";

export default function Banner(props: { title: string }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#9C4A55" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
