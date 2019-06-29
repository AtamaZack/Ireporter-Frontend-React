import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from '../SignUp';
import Login from '../Login';
import Incident from '../Incident';
import Incidents from '../Incidents';

class App extends Component {

  render() {
    return (
      <Router>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new_redflag" component={Incident} />
          <Route exact path="/red-flags" component={Incidents} />
      </Router>
    );
  }
}

export default App;