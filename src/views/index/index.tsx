import { QuarkElement, Fragment, customElement, property, state } from "quarkc";
import style from "./index.css?inline";
import md from "./defining.md"
const modulesPage = (import.meta as any).glob(
  "/src/docs/**/**.md"
)
// import showdown from "showdown";

// const converter = new showdown.Converter()

// const text = '# hello, markdown!';
// const html = converter.makeHtml(text);

// console.log(text, html, 11);

@customElement({ tag: "app-home", style })
class Home extends QuarkElement {
  @property({
    type: String,
  })
  path = '/src/docs/events.md';

  @state()
  md = '';

  componentDidMount() {
    modulesPage[this.path]().then((data) => {
      this.md = data.default
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome</h1>
        <div dangerouslySetInnerHTML={{ __html: this.md }}></div>
      </Fragment>
    );
  }
}

export default Home;