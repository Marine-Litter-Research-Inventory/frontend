import { Typography, List, ListItem, Grid } from "@suid/material";

export default function Instruction() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            style={{ "font-size": "14px", "font-weight": "bold" }}
          >
            Using search criteria:
          </Typography>
          <div style={{ height: "8px" }} />
          <div
            style={{
              background: "#F8E6DC",
              border: "1px solid black",
              padding: "12px",
            }}
          >
            <Typography variant="body1" style={{ "font-size": "14px" }}>
              1. Select one or more search criteria from the lists: A1/A2
              <span style={{ color: "red" }}>*</span>, B, C & P. You <b>can</b>{" "}
              choose to <b>leave the search bar empty</b>.
            </Typography>
            <div style={{ height: "4px" }} />
            <Typography variant="caption">
              <span style={{ color: "red" }}>*</span> Note that the lists (A1)
              Country/Territory and (A2) Water Body are mutually exclusive, you
              may not select from both.
            </Typography>
          </div>
          <div style={{ height: "8px" }} />
          <div
            style={{
              background: "#F8E6DC",
              border: "1px solid black",
              padding: "12px",
            }}
          >
            <Typography variant="body1" style={{ "font-size": "14px" }}>
              2. Click the <b>SEARCH</b> button
            </Typography>
          </div>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="body1"
            style={{ "font-size": "14px", "font-weight": "bold" }}
          >
            Using search criteria:
          </Typography>
          <div style={{ height: "8px" }} />
          <div
            style={{
              background: "#909A76",
              border: "1px solid black",
              padding: "12px",
            }}
          >
            <Typography variant="body1" style={{ "font-size": "14px" }}>
              1. Enter search term(s) in the search bar, which can be found
              after the lists. You can choose to add on search criteria or leave
              the boxes unchecked.
            </Typography>
          </div>
          <div style={{ height: "8px" }} />
          <div
            style={{
              background: "#909A76",
              border: "1px solid black",
              padding: "12px",
            }}
          >
            <Typography variant="body1" style={{ "font-size": "14px" }}>
              2. Click the <b>SEARCH</b> button
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div style={{ height: "16px" }} />
      <Typography variant="body1" style={{ "font-size": "14px" }}>
        You can also conduct specific custom searches across the entire Regional
        Research Inventory Database using our API{" "}
        <b>http://marseadata.org:8000/api</b>
      </Typography>
    </div>
  );
}
