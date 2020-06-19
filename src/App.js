import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navbar';
import OrangeStripe from './components/OrangeStripe';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';


/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './App.css';


class App extends Component {
  render() {
  return (
    <React.Fragment>
        <OrangeStripe/>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </Switch>
    </React.Fragment>
  );
  }
}

export default App;