import React, { Component } from 'react'
import ReactGauge from 'react-svg-gauge'

class Gauge extends Component {
  render() {
    return (
      <div>
        <ReactGauge id="gaugeIcon" color={'#ccc'} value={this.props.percentile} width={400} height={320} label="" />
      </div>
    )
  }
}

export default Gauge
