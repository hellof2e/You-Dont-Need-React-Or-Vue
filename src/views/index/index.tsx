import { QuarkElement, Fragment, property, customElement, state,  createRef, } from "quarkc";
import testHTML, { attributes } from "./readme.md";
import style from "./index.css?inline";

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  ref: any = createRef();
  
  componentDidMount(): void {
    document.title = attributes.title;
    this.ref.current.innerHTML = testHTML
  }
  
  render() {
    return (
      <Fragment>
        <div ref={this.ref}></div>
        <h1>Home</h1>
      </Fragment>
    );
  }
}

export default Home;