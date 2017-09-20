import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
    <div className="card app-body offset col-lg-10 col-lg-offset-1">
      <div className="card">
        <img className="card-img-top" src="https://avatars3.githubusercontent.com/u/29993968?v=4" alt=""/>
        <div className="card-block">
          <h4 className="card-title">Card title</h4>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://www.linkedin.com/in/bethany-priode/" className="card-link">Linkedin</a>
          <a href="https://bethanypriode.wordpress.com/" className="card-link">Blog</a>
        </div>
      </div>
    </div>
    )
  }
}
