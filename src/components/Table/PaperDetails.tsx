import * as Solid from "solid-js";
import {
  Paper,
  Modal,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@suid/material";

// =============================================================================
const COLUMNS = ["ID", "Title", "Link"];

// =============================================================================
export const [content, setContent] =
  Solid.createSignal<
    { id: string; url: string; title: string; link: string }[]
  >();

interface PaperDetailsProps {
  open: boolean;
  setOpen: Solid.Setter<boolean>;
}
export default function PaperDetails(props: PaperDetailsProps) {
  return (
    <Modal open={props.open} onClose={() => props.setOpen(false)}>
      <TableContainer
        component={Paper}
        style={{
          background: "white",
          width: "70%",
          "max-height": "400px",
          position: "absolute",
          top: "40%",
          left: "15%",
          "border-radius": "10px",
        }}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <Solid.For each={COLUMNS}>
                {(col) => (
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color: "white",
                      background: "#9C4A55",
                    }}
                  >
                    {col}
                  </TableCell>
                )}
              </Solid.For>
            </TableRow>
          </TableHead>
          <TableBody>
            <Solid.For each={content()}>
              {(row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>
                    <a href={row.url} target="_blank" rel="noopener">
                      Link
                    </a>
                  </TableCell>
                </TableRow>
              )}
            </Solid.For>
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
}
