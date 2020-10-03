import { render } from "@testing-library/react";
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  );
}

export default App;

class App1 extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default App1;

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home...</h1>
      </div>
    );
  }
}
export default Home;

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About...</h1>
      </div>
    );
  }
}
export default About;

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact...</h1>
      </div>
    );
  }
}
export default Contact;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById("app")
);
