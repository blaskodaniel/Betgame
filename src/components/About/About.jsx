import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(){
    super();

    this.state = {
      infos: [
        {msg: "This is a site for about.", id:1}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>About page</h1>
        <p>{this.state.infos[0].msg}</p>
      </div>
    );
  }
}

export default About;
