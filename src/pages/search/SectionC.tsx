import OptionsBox from "components/OptionsBox/Index";
import { searchConfig } from "data/searchConfig";
import { Typography, Grid } from "@suid/material";
import Accordion from "components/Accordion";
// =============================================================================

export default function SectionC() {
  return (
    <Accordion title="(C) Select Research Topics for your search:">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Recording of presence and absence in the marine environment
          </Typography>
          <OptionsBox
            config={
              searchConfig[
                "Recording of presence and absence in the marine environment"
              ]
            }
          />
          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Sources and pathways
          </Typography>
          <OptionsBox config={searchConfig["Sources and pathways"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Impact
          </Typography>
          <Typography variant="body1">
            Ecological and environmental impacts
          </Typography>
          <OptionsBox
            config={searchConfig["Ecological and environmental impacts"]}
          />
          <Typography variant="body1">
            Contaminants associated with marine plastics
          </Typography>
          <OptionsBox
            config={
              searchConfig["Contaminants associated with marine plastics"]
            }
          />
          <Typography variant="body1">
            Socio-economic impacts, damage and opportunity
          </Typography>
          <OptionsBox
            config={
              searchConfig["Socio-economic impacts, damage and opportunity"]
            }
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Research methodology/approach
          </Typography>
          <OptionsBox
            config={searchConfig["Research methodology/approach 1"]}
          />
          <Typography variant="body1">
            Socio-economic impacts, damage and opportunity
          </Typography>
          <OptionsBox
            config={
              searchConfig[
                "Discussions on methodology testing and effectiveness"
              ]
            }
          />
          <OptionsBox
            config={searchConfig["Research methodology/approach 2"]}
          />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Policy response measures
          </Typography>
          <Typography variant="body1">Laws, administrative measures</Typography>
          <OptionsBox config={searchConfig["Laws, administrative measures"]} />

          <Typography variant="body1">Economic measures</Typography>
          <OptionsBox config={searchConfig["Economic measures"]} />
          <OptionsBox config={searchConfig["Policy response"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Education, outreach and communication
          </Typography>
          <OptionsBox
            config={searchConfig["Education, outreach and communication"]}
          />
        </Grid>
      </Grid>
    </Accordion>
  );
}
