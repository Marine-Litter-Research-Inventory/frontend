import * as Solid from "solid-js";
import { TextField, Button } from "@suid/material";
import { SearchRounded } from "@suid/icons-material";
import { formatQuery, fetchSearch } from "utils/query";

export const [query, setQuery] = Solid.createSignal<{ [index: string]: any }>({
  ID: { column: "ID", operator: "regexp", array: ["."] },
});

export const [searchTerm, setSearchTerm] = Solid.createSignal("");
export const [searchResult, setSearchResult] = Solid.createSignal<any>();
export const [search, setSearch] = Solid.createSignal();
export const [word, setWord] = Solid.createSignal("");

export default function SearchBar() {
  //@ts-ignore
  const [result] = Solid.createResource(search, fetchSearch);

  Solid.createEffect(() => {
    setSearchResult(result());
  });

  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        width: "100%",
        "align-items": "center",
      }}
    >
      <TextField
        label="Search..."
        fullWidth
        InputProps={{
          endAdornment: <SearchRounded />,
        }}
        onChange={(e) => {
          setWord(e.target.value);
        }}
        onKeyPress={(e: KeyboardEvent) => {
          if (e.key === "Enter")
            onSubmit((e.target as HTMLInputElement)?.value);
        }}
      />
    </div>
  );
}

export function onSubmit(term: string) {
  setSearchTerm(term);
  let temp = formatQuery(query());
  setSearch(temp);
  // console.log(search());
  // console.log(searchTerm());
}
