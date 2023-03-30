import * as Solid from "solid-js";
import { Paper, Typography } from "@suid/material";

interface AccordionProps {
  title: string;
  children: Solid.JSX.Element;
}
export default function Accordion(props: AccordionProps) {
  const [open, setOpen] = Solid.createSignal(false);

  return (
    <Paper style={{ width: "100%", "border-radius": "20px" }}>
      <div
        onClick={(e) => setOpen(!open())}
        style={{
          padding: "24px 20px",
          background: "#C8A464",
          "border-radius": open() ? "20px 20px 0 0" : "20px",
        }}
      >
        <Typography variant="h6">{props.title}</Typography>
      </div>
      <div style={{ display: open() ? "block" : "none", padding: "20px 32px" }}>
        {props.children}
      </div>
    </Paper>
  );
}
