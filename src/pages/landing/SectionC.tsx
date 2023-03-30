import OptionsBox from "components/OptionsBox/Index";
import { searchConfig } from "data/searchConfig";
import { Typography } from "@suid/material";
import Accordion from "components/Accordion";
// =============================================================================

export default function SectionC() {
  return (
    <Accordion title="(C) Select Research Topics for your search:">
      <div>
        <Typography variant="h6">
          Recording of presence and absence in the marine environment
        </Typography>
        <OptionsBox
          config={
            searchConfig[
              "Recording of presence and absence in the marine environment"
            ]
          }
        />

        <Typography variant="h6">Sources and pathways</Typography>
        <OptionsBox config={searchConfig["Sources and pathways"]} />

        <Typography variant="h6">Impact</Typography>
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
          config={searchConfig["Contaminants associated with marine plastics"]}
        />

        <Typography variant="body1">
          Socio-economic impacts, damage and opportunity
        </Typography>
        <OptionsBox
          config={
            searchConfig["Socio-economic impacts, damage and opportunity"]
          }
        />

        <Typography variant="h6">Research methodology/approach</Typography>
        <OptionsBox config={searchConfig["Research methodology/approach 1"]} />
        <Typography variant="body1">
          Socio-economic impacts, damage and opportunity
        </Typography>
        <OptionsBox
          config={
            searchConfig["Discussions on methodology testing and effectiveness"]
          }
        />
        <OptionsBox config={searchConfig["Research methodology/approach 2"]} />

        <Typography variant="h6">Policy response measures</Typography>
        <Typography variant="body1">Laws, administrative measures</Typography>
        <OptionsBox config={searchConfig["Laws, administrative measures"]} />

        <Typography variant="body1">Economic measures</Typography>
        <OptionsBox config={searchConfig["Economic measures"]} />
        <OptionsBox config={searchConfig["Policy response"]} />

        <Typography variant="h6">
          Education, outreach and communication
        </Typography>
        <OptionsBox
          config={searchConfig["Education, outreach and communication"]}
        />
      </div>
    </Accordion>
  );
}
