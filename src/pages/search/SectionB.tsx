import OptionsBox from "components/OptionsBox/Index";
import { searchConfig } from "data/searchConfig";
import { Typography } from "@suid/material";
import Accordion from "components/Accordion";
// =============================================================================

export default function SectionB() {
  return (
    <Accordion title="(B) Select Technical Research Expertise and Equipment for your search:">
      <Typography variant="h6">
        B1 Plastic sizes examined in any research &gt;
      </Typography>
      <OptionsBox config={searchConfig["Plastic sizes examined"]} />

      <Typography variant="h6">
        B2 Plastic Polymer Identification &gt;
      </Typography>
      <OptionsBox
        config={searchConfig["Plastic Polymer Identification Technique"]}
      />

      <Typography variant="h6" style={{ display: "inline-block" }}>
        B4 Plastic Polymer Characterisation (Colour and/or Shape) &gt;
      </Typography>
      <OptionsBox
        config={
          searchConfig["Plastic Polymer Characterisation (Colour and/or Shape)"]
        }
      />

      <Typography variant="h6">B5 Field Sampling &gt;</Typography>
      <OptionsBox config={searchConfig["Field Sampling"]} />

      <Typography variant="h6">B6 Biota Sampling and Analysis &gt;</Typography>
      <OptionsBox config={searchConfig["Biota Sampling and Analysis"]} />

      <Typography variant="h6">B7 Microbes and pathogens &gt;</Typography>
      <OptionsBox config={searchConfig["Microbes and pathogens"]} />

      <Typography variant="h6">B8 POPs and Heavy Metals &gt;</Typography>
      <OptionsBox config={searchConfig["POPs and Heavy Metals"]} />

      <Typography variant="h6">B9 Modelling &gt;</Typography>
      <OptionsBox config={searchConfig["Modelling"]} />

      <Typography variant="h6">B10 Geospatial Methods &gt;</Typography>
      <OptionsBox config={searchConfig["Geospatial Methods"]} />

      <Typography variant="h6">B11 Literature Review &gt;</Typography>
      <OptionsBox config={searchConfig["Literature Review"]} />
    </Accordion>
  );
}
