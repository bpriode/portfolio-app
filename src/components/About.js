import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
    <div className="row">
    <div className="card app-body offset col-lg-10 col-lg-offset-4">
      <div className="card">
        <img className="card-img-top" src="https://avatars3.githubusercontent.com/u/29993968?v=4" alt=""/>
        <div className="card-block">
          <h4 className="card-title">Bethany Priode</h4>
          <h4 className="card-subtitle mb-2 text-muted">Lover of Language and Critical Thinking</h4>
          <p className="card-text">I taught middle school math and English for 4 years before life moved me from Knoxville to Chattanooga, Tennessee. The move was the ideal time to try something new and challenging, and my love of language and complex problem solving led me to web development. A 3-month long coding bootcamp through the The Iron Yard allowed me to pursue my new interest and gain experience. I studied both Front-End and Back-End fundamentals, as well as a specialization in React.  </p>
          <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/bethany-priode/" className="card-link"><i className="fa fa-linkedin fa-2x"></i></a> |
          <a target='_blank' rel="noopener noreferrer" href="https://bethanypriode.wordpress.com/" className="card-link"><i className="fa fa-wordpress fa-2x"></i></a> |
          <a href="mailto:bpriode@gmail.com" className="card-link"><i className="fa fa-envelope-o fa-2x" ></i></a> |
          <a target='_blank' rel="noopener noreferrer" href="https://github.com/bpriode" className="card-link"><i className="fa fa-github fa-2x" ></i></a>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
