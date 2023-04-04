import { QuarkElement, Fragment, property, customElement, state,  createRef, } from "quarkc";
import style from "./index.css";
import testHTML, { attributes } from "../components/test.md";

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


        <div id="test"></div>
        <div dangerouslySetInnerHTML="foo"></div>
        <div dangerouslySetInnerHTML={`__html: ${this.test}`}></div>
        
        <a href="baidu.com">22</a>
        
        <div>
          <a href="https://quark.hellobike.com" target="_blank">
            <img src="https://quark-design.hellobike.com/assets/quark-logo.f9a6a307.png" class="logo" alt="quark logo" />
          </a>
        </div>
        
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