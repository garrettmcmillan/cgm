import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navbar';
import OrangeStripe from './components/OrangeStripe';
import About from './components/About';
import Work from './components/Work';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer'


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
            <Route exact path="/" component={About} />
            <Route path="/studies" component={CaseStudies} />
            <Route path="/recent" component={Work} />
          </Switch>
          <Footer/>

        </React.Fragment>
        
    
  );
  }
}

export default App;