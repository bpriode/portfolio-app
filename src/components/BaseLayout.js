import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "180%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">My Developer Story</NavLink>
                </li>
                <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}

      </div>
    );
  }
}
