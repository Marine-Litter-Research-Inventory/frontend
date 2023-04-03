import { Typography, List, ListItem } from "@suid/material";

export default function Instruction() {
  return (
    <div>
      <Typography variant="body1" style={{ "font-size": "14px" }}>
        Two search parths are available below that can be used concurrently.
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1" style={{ "font-size": "14px" }}>
            1. Select one or more criteria from the lists below: A1/A2*, B, C or
            P. <br />⚠ Note that the lists (A1) Country/Territory and (A2) Water
            Body are mutually exclusive - you may not select from both.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" style={{ "font-size": "14px" }}>
            2. Enter keyword(s) of your choice to search across the entire
            Regional Research Inventory Database.{" "}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" style={{ "font-size": "14px" }}>
            3. Results will appear below the search bar.
          </Typography>
        </ListItem>
      </List>
      <Typography variant="body1" style={{ "font-size": "14px" }}>
        You can also conduct specific custom searches across the entire Regional
        Research Inventory Database using our API{" "}
        <b>http://marseadata.org:8000/api</b>
      </Typography>
    </div>
  );
}
