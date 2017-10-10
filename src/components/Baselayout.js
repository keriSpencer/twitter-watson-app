import React, { Component } from 'react'

class Baselayout extends Component {
  render() {
    return (
      <div className="form-layout">
        <h2>Home | Form | Results</h2>
        {this.props.children}
        <h4>Phone | Email | About | Created by Keri Spencer </h4>
      </div>
    )
  }
}

export default Baselayout
