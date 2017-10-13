import React, { Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tweets = this.props.results
    return (
      <div>
        <p>
          {tweets}
        </p>
      </div>
    )
  }
}

export default Results
