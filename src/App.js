import React from 'react';
import {Header, Card} from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" component={Card}/>
      <Route path="/about" component={Header}/>
    </Router>
  );
}

export default App;