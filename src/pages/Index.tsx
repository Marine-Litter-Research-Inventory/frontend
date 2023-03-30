import * as Solid from "solid-js";
import About from "pages/about/Index";
import Search from "pages/search/Index";
import Banner, { tab } from "components/Banner";

export default function Index() {
  return (
    <div>
      <Banner title="Search Tool" />
      <Solid.Switch>
        <Solid.Match when={tab() === 0}>
          <Search />
        </Solid.Match>
        <Solid.Match when={tab() === 1}>
          <About />
        </Solid.Match>
      </Solid.Switch>
    </div>
  );
}
