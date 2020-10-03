import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

document.title = "Perenggan";
/*
class App extends React.Component {
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
export default App;

class Home extends React.Component {
  render() {
     return (
        <div>
           <h1>Home...</h1>
        </div>
     )
  }
}
export default Home;

class About extends React.Component {
  render() {
     return (
        <div>
           <h1>About...</h1>
        </div>
     )
  }
}
export default About;

class Contact extends React.Component {
  render() {
     return (
        <div>
           <h1>Contact...</h1>
        </div>
     )
  }
}
export default Contact;

ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "about" component = {About} />
        <Route path = "contact" component = {Contact} />
     </Route>
  </Router>
), document.getElementById('app'))
*/
