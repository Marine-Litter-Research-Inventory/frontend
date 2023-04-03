import * as Solid from "solid-js";
import { Checkbox, Typography } from "@suid/material";

import { setQuery } from "components/SearchBar";

// =============================================================================
interface OptionProps {
  column: string;
  operator: string;
  pattern: string;
  title: string;
  checked: boolean;
  setChecked: Solid.Setter<boolean>;
  solo?: boolean;
}

export default function Option(props: OptionProps) {
  Solid.createEffect(() => {
    if (props.checked)
      setQuery((query) => {
        if (props.column in query) {
          let array: Array<string> = query[props.column].array;
          array.push(props.pattern as string);
          return {
            ...query,
            [props.column]: { operator: props.operator, array },
          };
        } else
          return {
            ...query,
            [props.column]: {
              operator: props.operator,
              array: [props.pattern],
            },
          };
      });
    else
      setQuery((query) => {
        if (props.column in query) {
          let array: Array<string> = query[props.column].array;
          let index = array.indexOf(props.pattern);
          if (index > -1) array.splice(index, 1);
          return {
            ...query,
            [props.column]: { operator: props.operator, array },
          };
        }
        return query;
      });
  });

  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
      }}
    >
      <Checkbox
        checked={props.checked}
        onChange={() => props.setChecked(!props.checked)}
        sx={{ height: "32px" }}
      />
      <Typography
        variant={props.solo ? "h6" : "body1"}
        style={{ "font-size": "14px" }}
      >
        {props.title}
      </Typography>
    </div>
  );
}
