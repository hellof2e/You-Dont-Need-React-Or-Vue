import { QuarkElement, Fragment, property, customElement, state,  createRef } from "quarkc";
import style from "./index.css?inline";

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  ref: any = createRef();
  
  componentDidMount(): void {}
  
  render() {
    return (
      <Fragment>
        <h1>112222</h1>
        <g-markdown file="../../docs/ref.md" />
      </Fragment>
    );
  }
}

export default Home;