import React, { Component } from 'react'

class Baselayout extends Component {
  render() {
    return (
      <div className="baseLayout">
        <h2>Home | Results | Research | Observations</h2>
        {this.props.children}
        <h4 id="footer">405.625.7150 | kerigspencer@gmail.com | About | Created by Keri Spencer</h4>
      </div>
    )
  }
}

export default Baselayout
