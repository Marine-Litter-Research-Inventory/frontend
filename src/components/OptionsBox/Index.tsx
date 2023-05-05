import * as Solid from "solid-js";
import Option from "components/OptionsBox/Option";
import { SearchConfigType } from "data/searchConfig";

// =============================================================================
interface OptionsBoxProps {
  config: SearchConfigType;
  solo?: boolean;
}

export const [reset, setReset] = Solid.createSignal(false);

export default function OptionsBox(props: OptionsBoxProps) {
  const { column, operator, options } = props.config;

  return (
    <div>
      <Solid.For each={options}>
        {(option, i) => {
          const [checked, setChecked] = Solid.createSignal(false);

          Solid.createEffect(() => {
            if (reset()) setChecked(false);
          });

          return (
            <div style={{ display: "flex" }}>
              <Option
                solo={props.solo}
                column={column}
                operator={operator}
                {...option}
                checked={checked()}
                setChecked={setChecked}
              />
            </div>
          );
        }}
      </Solid.For>
    </div>
  );
}
