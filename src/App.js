import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import JobOffers from './pages/JobOffers'
import About from './pages/About'
import MeetUs from './pages/MeetUs'
import Internship from './pages/Internship'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={JobOffers} />
        <Route exact path='/about' component={About} />
        <Route exact path='/meetus' component={MeetUs} />
        <Route exact path='/internship' component={Internship} />
      </Switch>
    );
  }
}

export default App;
