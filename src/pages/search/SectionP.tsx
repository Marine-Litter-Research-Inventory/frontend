import * as Solid from "solid-js";
import OptionsBox from "components/OptionsBox/Index";
import Option from "components/OptionsBox/Option";
import { searchConfig } from "data/searchConfig";
import { Grid } from "@suid/material";
import Accordion from "components/Accordion";
// =============================================================================

export default function SectionP() {
  return (
    <Accordion title="(P) Other popular searches:">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {() => {
            const [checked, setChecked] = Solid.createSignal(false);
            let foo =
              searchConfig["New or emerging technologies for marine plastic"];
            let bar =
              searchConfig[
                "Satellite and drone research including for marine plastic occurrence"
              ];
            return (
              <div style={{ display: "flex" }}>
                <div style={{ display: "none" }}>
                  <Option
                    column={foo.column}
                    operator={foo.operator}
                    {...foo.options[0]}
                    checked={checked()}
                    setChecked={setChecked}
                  />
                </div>
                <Option
                  column={bar.column}
                  operator={bar.operator}
                  {...bar.options[0]}
                  checked={checked()}
                  setChecked={setChecked}
                />
              </div>
            );
          }}

          <OptionsBox config={searchConfig["Fishing Gear/ALDFG"]} />
          <OptionsBox config={searchConfig["Aquaculture"]} />
          <OptionsBox config={searchConfig["Single-use plastics"]} />
          <OptionsBox
            config={searchConfig["Plastisphere, Microbes and pathogens"]}
          />

          {() => {
            const [checked, setChecked] = Solid.createSignal(false);
            let foo = searchConfig["Atmosphere"];
            let bar =
              searchConfig["Airborne plastic into the marine environment"];
            return (
              <div style={{ display: "flex" }}>
                <div style={{ display: "none" }}>
                  <Option
                    column={foo.column}
                    operator={foo.operator}
                    {...foo.options[0]}
                    checked={checked()}
                    setChecked={setChecked}
                  />
                </div>
                <Option
                  column={bar.column}
                  operator={bar.operator}
                  {...bar.options[0]}
                  checked={checked()}
                  setChecked={setChecked}
                />
              </div>
            );
          }}
        </Grid>
        <Grid item xs={6}>
          <OptionsBox config={searchConfig["Toxicity"]} />
          <OptionsBox
            config={searchConfig["Abundance, concentration and hotspots"]}
          />
          <OptionsBox
            config={searchConfig["Extended Producer Responsibility (EPR)"]}
          />
          <OptionsBox config={searchConfig["Economic loss and cost"]} />
          <OptionsBox config={searchConfig["Policy response measures"]} />
        </Grid>
      </Grid>
    </Accordion>
  );
}
