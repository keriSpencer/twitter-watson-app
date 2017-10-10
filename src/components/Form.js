import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      textArray: []
    }
  }

  findTweets = text => {
    let url = `https://cors-anywhere.herokuapp.com/https://dry-peak-75080.herokuapp.com/1.1/statuses/user_timeline.json?screen_name=${text}&count=10`
    fetch(url).then(r => r.json()).then(json => {
      let texts = json.map(tweet => {
        return tweet.text
      })
      this.setState({ textArray: texts })
    })
  }

  _text = e => {
    e.preventDefault()

    this.setState({ text: e.target.value })
  }

  _submit = e => {
    e.preventDefault()
    let text = this.state.text

    this.findTweets(text)

    let input_reset = document.querySelector('#input_reset')
    input_reset.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <div />
          <div>
            <label>Twitter Handle</label>
            <br />
            <input type="text" id="input_reset" onChange={this._text} placeholder="No '@' needed!" />
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

export default Form
