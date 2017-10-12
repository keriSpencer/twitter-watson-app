import React, { Component } from 'react'

class PlainText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      textArray: []
    }
  }

  _text = e => {
    e.preventDefault()

    this.setState({ text: e.target.value })
  }

  _submit = e => {
    e.preventDefault()
    let text = this.state.text
    let newArray = this.state.textArray
    newArray.push(text)

    this.setState({
      text: text
    })

    let input_reset = document.querySelector('#input_reset')
    input_reset.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <div>
            <label>Plain Text Here</label>
            <br />
            <textarea type="text" id="input_reset" onChange={this._text} placeholder="Copy and Paste text here" />
          </div>
          <button>Check Results!</button>
        </form>
        <div>
          {this.state.textArray.map((text, i) =>
            <p key={i}>
              {text}
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default PlainText
