import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Baselayout extends Component {
  render() {
    return (
      <div className="baseLayout">
        <div className="nav">
          <ul id="navOptions">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/text">Text</NavLink>
            </li>
            <li>
              <NavLink to="research">Research</NavLink>
            </li>
            <li>
              <NavLink to="/observations">Observations</NavLink>
            </li>
          </ul>
        </div>
        {this.props.children}
        <ul id="footer">
          <li className="footerItem">405.625.7150</li>
          <li className="footerItem">|</li>
          <li className="footerItem">Keri Spencer</li>
          <li className="footerItem">|</li>
          <li className="footerItem">kerigspencer@gmail.com</li>
        </ul>
      </div>
    )
  }
}

export default Baselayout
