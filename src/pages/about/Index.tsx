import { Typography, List, ListItem } from "@suid/material";
import CIL from "assets/CIL.png";
import ERIA from "assets/ERIA.png";

export default function About() {
  return (
    <div
      style={{
        width: "60%",
        margin: "120px auto",
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <div style={{ display: "inline-block", margin: "auto" }}>
        <Typography variant="body1">
          This search tool, which is building on the Regional Research Inventory
          Database project available at{" "}
          <a href="https://mapla-riv.web.app/" target="blank" rel="noopener">
            https://mapla-riv.web.app/
          </a>
          , has been developed by the Centre for International Law (CIL) with
          support from the Economic Research Institute for ASEAN and East Asia
          (ERIA).
          <br />
          <br />
          This tool aims to identify experts and/or research institutions for
          consultation:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">1. in particular countries;</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              2. on specific topics (e.g. sampling for contaminants, ingestion
              of plastics in the wild);
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              3. with specific technical skill-set or expertise (e.g. plastic
              polymer identification, experience in sampling of specific
              species);
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              4. who have experience in working/publishing with other experts
              (including the identification of members of publishing teams).
            </Typography>
          </ListItem>
        </List>
      </div>
      <div style={{ height: "48px" }} />
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          "justify-content": "space-around",
        }}
      >
        <img
          src={CIL}
          style={{
            "min-width": "200px",
            "max-width": "240px",
            "object-fit": "contain",
          }}
        />
        <img
          src={ERIA}
          style={{
            "min-width": "200px",
            "max-width": "240px",
            "object-fit": "contain",
          }}
        />
      </div>
    </div>
  );
}
