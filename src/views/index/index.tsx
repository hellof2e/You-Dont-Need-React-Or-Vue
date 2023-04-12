import { QuarkElement, Fragment, customElement } from "quarkc";
import style from "./index.css?inline";
import md from "./defining.md"

import showdown from "showdown";

const converter = new showdown.Converter()
const text = '# hello, markdown!';
const html = converter.makeHtml(text);

console.log(text, html, 11);
console.log(md, 222);


@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  render() {
    return (
      <Fragment>
        <h1>Welcome</h1>
        <div dangerouslySetInnerHTML={{ __html: md }}></div>
      </Fragment>
    );
  }
}

export default Home;