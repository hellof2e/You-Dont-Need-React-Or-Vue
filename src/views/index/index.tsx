import { QuarkElement, Fragment, property, customElement, state,  createRef } from "quarkc";
// import testHTML, { attributes } from "./readme.md";
import style from "./index.css?inline";
import TestHTML from "./defining.md"

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  ref: any = createRef();
  
  componentDidMount(): void {
    // document.title = attributes.title;
    // this.ref.current.innerHTML = testHTML

    console.log(TestHTML, 999);
  }
  
  render() {
    return (
      <Fragment>
        {/* <g-markdown file="../../docs/ref.md" /> */}
        <h1>112</h1>

        
        <TestHTML />

        <code>
          import {'{'} QuarkElement3, Fragment, property, customElement, state,  createRef {'}'} from "quarkc";

        
          {/* let obj: {a: 11} */}
        </code>
      </Fragment>
    );
  }
}

export default Home;