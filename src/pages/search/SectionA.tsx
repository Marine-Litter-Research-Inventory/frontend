import * as Solid from "solid-js";
import OptionsBox from "components/OptionsBox/Index";
import { searchConfig } from "data/searchConfig";
import { Grid, Typography } from "@suid/material";
import Accordion from "components/Accordion";
import { query, setQuery } from "components/SearchBar";

// =============================================================================
export default function SectionA() {
  const [A1Count, setA1Count] = Solid.createSignal(0);
  const [A2Count, setA2Count] = Solid.createSignal(0);

  Solid.createEffect(() => {
    const A1 = query()["Location/Territory studied"]?.array.length ?? 0;
    const A2 = query()["Relevant Water Body_General"]?.array.length ?? 0;
    if (A1 != A1Count()) setA1Count(A1);
    if (A2 != A2Count()) setA2Count(A2);
  });

  Solid.createEffect(() => {
    if (
      A1Count() > 0 &&
      "Relevant Water Body_General" in Solid.untrack(query)
    ) {
      setQuery((query) => {
        delete query["Relevant Water Body_General"];
        return query;
      });
    }
  });

  Solid.createEffect(() => {
    if (A2Count() > 0 && "Location/Territory studied" in Solid.untrack(query)) {
      setQuery((query) => {
        delete query["Location/Territory studied"];
        return query;
      });
    }
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Accordion title="(A1) Select Country/Territory for your search:">
          {A2Count() === 0 ? (
            <div>
              <OptionsBox solo config={searchConfig["Exclude Regional"]} />
              <div style={{ height: "16px" }} />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <OptionsBox config={searchConfig["Country/Territory1"]} />
                </Grid>
                <Grid item xs={6}>
                  <OptionsBox config={searchConfig["Country/Territory2"]} />
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>Please deselect all options in A2 to see options here</div>
          )}
        </Accordion>
      </Grid>

      <Grid item xs={6}>
        <Accordion title="(A2) Select Water Body for your search:">
          {A1Count() === 0 ? (
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <OptionsBox config={searchConfig["Water Body1"]} />
              </Grid>
              <Grid item xs={6}>
                <OptionsBox config={searchConfig["Water Body2"]} />
              </Grid>
            </Grid>
          ) : (
            <div>Please deselect all options in A1 to see options here</div>
          )}
        </Accordion>
      </Grid>
    </Grid>
  );
}
