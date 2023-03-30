import * as Solid from "solid-js";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@suid/material";
import PaperDetails, { setContent } from "components/Table/PaperDetails";

import type { Row } from "utils/table";

import googleIcon from "assets/google.png";
import orcidIcon from "assets/orcid.png";
import researchGateIcon from "assets/researchgate.png";
import { PlagiarismRounded } from "@suid/icons-material";

// =============================================================================

const columns = [
  "Full Name",
  "Scholar profile",
  "Research Topics",
  "Methodology Experience",
  "RRI ID",
];

const icons = [researchGateIcon, orcidIcon, googleIcon];
// =============================================================================
interface BasicTableProps {
  rows: Row[];
}

export default function BasicTable(props: BasicTableProps) {
  const [openModal, setOpenModal] = Solid.createSignal(false);

  return (
    <div>
      <PaperDetails open={openModal()} setOpen={setOpenModal} />
      <TableContainer
        component={Paper}
        style={{
          "max-height": "700px",
          "border-radius": "10px",
          "box-shadow": "0 0 10px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Solid.For each={columns}>
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
            <Solid.For each={props.rows}>
              {(row, index) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Solid.For each={Object.entries(row)}>
                    {([column, value]) => (
                      <Solid.Switch>
                        <Solid.Match when={column === "Full Name"}>
                          <TableCell style={{ "max-width": "60px" }}>
                            {value as string}
                          </TableCell>
                        </Solid.Match>

                        <Solid.Match
                          when={[
                            "Research Topics",
                            "Methodology Experienced",
                          ].includes(column)}
                        >
                          <TableCell style={{ "min-width": "400px" }}>
                            <Solid.For each={value as string[]}>
                              {(value) => <li>{value}</li>}
                            </Solid.For>
                          </TableCell>
                        </Solid.Match>

                        <Solid.Match when={column === "Scholar Profile"}>
                          <TableCell>
                            <Solid.For each={value as string[]}>
                              {(value, index) => (
                                <div style={{ "text-align": "center" }}>
                                  <a
                                    href={value}
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <img
                                      src={icons[index()]}
                                      style={{ height: "32px" }}
                                    />
                                  </a>
                                </div>
                              )}
                            </Solid.For>
                          </TableCell>
                        </Solid.Match>

                        <Solid.Match when={column === "RRI ID"}>
                          <TableCell style={{ "max-width": "60px" }}>
                            <IconButton
                              size="large"
                              onClick={() => {
                                setContent(
                                  value as {
                                    id: string;
                                    url: string;
                                    title: string;
                                    link: string;
                                  }[]
                                );
                                setOpenModal(true);
                              }}
                            >
                              <PlagiarismRounded fontSize="inherit" />
                            </IconButton>
                          </TableCell>
                        </Solid.Match>
                      </Solid.Switch>
                    )}
                  </Solid.For>
                </TableRow>
              )}
            </Solid.For>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
