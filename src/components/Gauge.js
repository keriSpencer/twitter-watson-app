import React, { Component } from 'react'
import ReactGauge from 'react-svg-gauge'

class Gauge extends Component {
  pickColor(percentile) {
    if (percentile > 80) {
      return '#97ED8A'
    } else if (percentile > 60) {
      return '#45BF55'
    } else if (percentile > 40) {
      return '#167F39'
    } else if (percentile > 20) {
      return '#044C29'
    } else {
      return '#00261C'
    }
  }

  render() {
    return (
      <div>
        <ReactGauge
          id="gaugeIcon"
          color={this.pickColor(this.props.percentile)}
          value={this.props.percentile}
          width={400}
          height={300}
          label={this.props.label}
        />
      </div>
    )
  }
}

export default Gauge
