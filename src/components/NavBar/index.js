//  React library
import React, { Component } from 'react';

// styling
import './NavBar.scss';


import { defaultImagePath } from '../../utils';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBarPanel">
        <div className="NavBarPanel__Navbar">
          <ul>
            <li>
              <a href="/">Home</a>
              <a href="/red-flags">Incidents</a>
            </li>
          </ul>
        </div>
        <div className="NavBarPanel__logo" align="center">
          <img src={`${defaultImagePath}/logo.png`} />
        </div>
      </div>
    );
  }
}

export default NavBar;
