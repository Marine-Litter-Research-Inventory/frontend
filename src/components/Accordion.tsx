import * as Solid from "solid-js";
import { Box, Paper, Typography } from "@suid/material";

interface AccordionProps {
  title: string;
  children: Solid.JSX.Element;
}
export default function Accordion(props: AccordionProps) {
  const [open, setOpen] = Solid.createSignal(false);

  return (
    <Paper sx={{ width: "100%" }}>
      <Box
        onClick={(e) => setOpen(!open())}
        sx={{
          padding: "12px 20px",
          background: "#C8A464",
          "&:hover": { cursor: "pointer", background: "#F8E6DC" },
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
          {props.title}
        </Typography>
      </Box>
      <div style={{ display: open() ? "block" : "none", padding: "20px 32px" }}>
        {props.children}
      </div>
    </Paper>
  );
}
