import { QuarkElement, customElement, state,  createRef, } from "quarkc"
import style from "./index.less"

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  componentDidMount(): void {}

  render() {
    return (
      <>
        <h1>Welcome ~</h1>
        <a href="/"></a>
      </>
    );
  }
}

export default Home;