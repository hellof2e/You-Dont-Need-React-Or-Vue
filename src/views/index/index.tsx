import { QuarkElement, Fragment, property, customElement, state,  createRef, } from "quarkc";
import style from "./index.css?inline";
import testHTML, { attributes } from "./readme.md";

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  @property({
    type: Number
  })
  count = 0;

  ref: any = createRef();
  
  add = () => {
    this.count += 1;
  }

  componentDidMount(): void {
    document.title = attributes.title;
    this.ref.current.innerHTML = testHTML
  }
  
  render() {
    return (
      <Fragment>

        <div onClick={this.add} ref={this.ref}></div>
        
      </Fragment>
    );
  }
}

export default Home;