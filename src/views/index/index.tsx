import { QuarkElement, Fragment, property, customElement, state,  createRef, } from "quarkc";
import style from "./index.css";
import testHTML, { attributes } from "@/components/test.md";

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  @property({
    type: Number
  })
  count = 0;

  ref: any = createRef();
  
  add = () => {
    this.count += 1;
    console.log('button was clicked', typeof this.count);
  }

  componentDidMount(): void {
    document.title = attributes.title;
    this.ref.current.innerHTML = testHTML
  }
  
  render() {
    return (
      <Fragment>

        <div ref={this.ref}></div>
        
        <h1>Quark - 为跨技术栈而生</h1>

        <div className="card">
          <button onClick={this.add}>
            count is: { this.count }
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Home;