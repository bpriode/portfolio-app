import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
    <div className="card app-body offset col-lg-10 col-lg-offset-4">
      <div className="card">
        <img className="card-img-top" src="https://avatars3.githubusercontent.com/u/29993968?v=4" alt=""/>
        <div className="card-block">
          <h4 className="card-title">Bethany Priode</h4>
          <h5 className="card-subtitle mb-2 text-muted">Lover of Language and Puzzles</h5>
          <p className="card-text">After successfully teaching middle school for 4 years in Knoxville, TN, I found myself moving to Chattanooga. I thought a move was the perfect chance to try somthing new. My love of the English language and solving complex math problems, led me to web development. I studied web development at The Iron Yard Atlanta. </p>
          <a href="https://www.linkedin.com/in/bethany-priode/" className="card-link"><i className="fa fa-linkedin fa-2x"></i></a> |
          <a href="https://bethanypriode.wordpress.com/" className="card-link"><i className="fa fa-wordpress fa-2x"></i></a> |
          <a href="mailto:bpriode@gmail.com" className="card-link"><i className="fa fa-envelope-o fa-2x" ></i></a> |
          <a href="https://github.com/bpriode" className="card-link"><i className="fa fa-github fa-2x" ></i></a>
        </div>
      </div>
    </div>
    )
  }
}
