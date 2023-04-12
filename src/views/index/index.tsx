import { QuarkElement, Fragment, customElement } from "quarkc";
import style from "./index.css?inline";

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  render() {
    return (
      <Fragment>
        <h1>112222</h1>
      </Fragment>
    );
  }
}

export default Home;