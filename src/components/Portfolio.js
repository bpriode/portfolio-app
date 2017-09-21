import React, { Component } from 'react';


export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      git:{},
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/bpriode')
    .then(r => r.json()
    .then((data) => {
      this.setState({git: data.results})
    })
  )
}
  render() {

    return(
      <div className="portfolio">
        <div className="card app-body offset col-lg-10" id="portfolioCard">
          <h4 className="card-title" id="titleStyle">Portfolio</h4>
          <p className="card-text">Full Stack Web Developer | React | Node.js Fan | Mongo DB Lover</p>
          <a id='git' href="https://github.com/bpriode" className="card-link"><i className="fa fa-github fa-2x" ></i></a>
          <hr/>
          <h3>All my project repositories can be found on my GitHub account. I have featured two of my more in-depth full stack applications here.</h3>
        </div>
        <div className="card">
        <h2>Flipcards</h2>
        <a id="repoLink"href='https://github.com/bpriode/flipcards'>Flipcards GitHub Repository</a>
        <p>A flipcard study tool to remove the hassle of needing multiple study materials. Flipcards allows a user to create an account, login, create-edit-delete decks of cards, and take a quiz in which the cards randomly sort themselves.
        </p>
        <a href="https://imgflip.com/gif/1w9nu2"><img src="https://i.imgflip.com/1w9nu2.gif" alt=""/></a>

        <h2>Wander</h2>
        <a id="repoLink"href='https://github.com/bpriode/social_network'>Wander GitHub Repository</a>
        <p>Social sharing platform to create connections with the outdoors and fellow outdoor lovers. Wander allows a user to create an account, login, create a post and delete their own posts, see other user's posts, and like posts of other users.</p>
        <a href="https://imgflip.com/gif/1w9oni"><img src="https://i.imgflip.com/1w9oni.gif" alt=""/></a>
        </div>
      </div>
    )
  }
}
