import * as Solid from "solid-js";
import { Button, Typography, CircularProgress } from "@suid/material";

import ResultTable from "components/Table/Index";
import Banner from "pages/landing/Banner";
import SearchBar from "components/SearchBar";
import SectionA from "pages/landing/SectionA";
import SectionB from "pages/landing/SectionB";
import SectionC from "pages/landing/SectionC";
import SectionP from "pages/landing/SectionP";

import { create, insertBatch, search } from "@lyrasearch/lyra";
import { afterInsert } from "@lyrasearch/plugin-match-highlight";
import schemaDB from "data/schemaDB";

import { searchResult, searchTerm, onSubmit } from "components/SearchBar";
import { filterColumn, generateRows } from "utils/table";
import type { Row } from "utils/table";

// =============================================================================
export default function Landing<Component>() {
  const [rows, setRows] = Solid.createSignal<Row[]>([]);

  Solid.createEffect(async () => {
    setRows([]);
    if (searchResult()) {
      const database = await create({
        schema: schemaDB,
        hooks: { afterInsert },
        components: {
          tokenizer: {
            enableStemming: false,
          },
        },
      });
      await insertBatch(database, searchResult().results);
      if (searchTerm() !== "") {
        const res = await search(database, {
          term: searchTerm(),
          properties: "*",
          limit: 100000,
        });
        const formatRes = res.hits.map((hit) => hit.document);
        console.log(formatRes);
        const details = filterColumn(formatRes);
        const rows = generateRows(details);
        setRows(rows);
      } else {
        const details = filterColumn(searchResult().results);
        const rows = generateRows(details);
        setRows(rows);
      }
    }
  });

  return (
    <div>
      <Banner title="Author Search Tool" />
      <div style={{ height: "32px" }} />
      <div style={{ width: "80%", margin: "auto" }}>
        <Typography variant="h3" style={{ "text-align": "center" }}>
          Searchable & Dynamic <br />
          Catalogue of Regional Experts
        </Typography>
        <br />
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        <br />
        <SectionA />
        <br />
        <SectionB />
        <br />
        <SectionC />
        <br />
        <SectionP />
        <div style={{ width: "100%", "text-align": "center" }}>
          <Button
            type="submit"
            variant="contained"
            onClick={() => onSubmit("")}
            sx={{ height: "56px", margin: "20px 0 0 0", background: "#9D4A55" }}
          >
            Submit Search Criteria
          </Button>
          <Typography>*without search keyword</Typography>
        </div>
      </div>

      <div style={{ margin: "40px auto", width: "80%" }}>
        <SearchBar />
      </div>

      <div style={{ width: "88%", margin: "auto" }}>
        <ResultTable rows={rows()} />
        {/* <div style={{ "text-align": "center", margin: "20px 0" }}>
          <Solid.Show when={rows().length === 0}>Loading</Solid.Show>
        </div> */}
      </div>

      <div style={{ height: "200px" }} />
    </div>
  );
}
