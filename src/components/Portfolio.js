import React, { Component } from 'react';


export default class Portfolio extends Component {
  render() {

    let portfolio = {
      "backgroundColor": "#5D576B",
      "width": "50%",
      "color": "#B3B5BB",
    }
    return(
      <div className="card app-body offset col-lg-10 col-lg-offset-1" style={portfolio}>
        <div className="card-block">
          <h4 className="card-title">Portfolio</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://github.com/bpriode" className="card-link">Git Hub Account</a>
        </div>
      </div>
    )
  }
}
