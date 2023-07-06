import OptionsBox from "components/OptionsBox/Index";
import { searchConfig } from "data/searchConfig";
import { Typography, Grid } from "@suid/material";
import Accordion from "components/Accordion";
// =============================================================================

export default function SectionB() {
  return (
    <Accordion title="(B) Select Technical Research Expertise and Equipment for your search:">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Plastic sizes examined in any research
          </Typography>
          <OptionsBox config={searchConfig["Plastic Examined_Size or Type"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Plastic Polymer Identification
          </Typography>
          <OptionsBox
            config={searchConfig["Plastic Polymer Identification Technique"]}
          />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Plastic Polymer Characterisation (Colour and/or Shape)
          </Typography>
          <OptionsBox
            config={
              searchConfig[
              "Plastic Polymer Characterisation (Colour and/or Shape)"
              ]
            }
          />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Field Sampling
          </Typography>
          <OptionsBox config={searchConfig["Field Sampling"]} />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Biota Sampling and Analysis
          </Typography>
          <OptionsBox config={searchConfig["Biota Sampling and Analysis"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Microbes and pathogens
          </Typography>
          <OptionsBox config={searchConfig["Microbes and pathogens"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            POPs and Heavy Metals
          </Typography>
          <OptionsBox config={searchConfig["POPs and Heavy Metals"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Modelling
          </Typography>
          <OptionsBox config={searchConfig["Modelling"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Geospatial Methods
          </Typography>
          <OptionsBox config={searchConfig["Geospatial Methods"]} />

          <Typography variant="body1" style={{ "font-weight": "bold" }}>
            Literature Review
          </Typography>
          <OptionsBox config={searchConfig["Literature Review"]} />
        </Grid>
      </Grid>
    </Accordion>
  );
}
