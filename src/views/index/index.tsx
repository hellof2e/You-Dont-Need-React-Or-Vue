import { QuarkElement, Fragment, customElement } from "quarkc";
import style from "./index.css?inline";


import showdown from "showdown";

const converter = new showdown.Converter()
const text = '# hello, markdown!';
const html = converter.makeHtml(text);

console.log(text, html, 222);


@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  componentDidMount(): void {

  }


  render() {
    return (
      <Fragment>
        <h1>Welcome</h1>
        
        {html}
      </Fragment>
    );
  }
}

export default Home;