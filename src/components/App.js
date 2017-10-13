import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/twitter-watson-app/src/styles/App.css'
import Results from './Results'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      tweetsArray: [],
      personalityArray: []
    }
  }

  findTweets = text => {
    let url = `https://cors-anywhere.herokuapp.com/https://dry-peak-75080.herokuapp.com/1.1/statuses/user_timeline.json?screen_name=${text}&count=10`
    fetch(url).then(r => r.json()).then(json => {
      let texts = json.map(tweet => {
        return tweet.text
      })
      this.setState({ tweetsArray: texts })
    })
  }

  findPersonality = text => {
    let watsonUrl = `http://localhost:4000/?username=${text}`
    fetch(watsonUrl).then(r => r.json()).then(json => {
      this.setState({
        personalityArray: json.personality
      })
    })
  }

  _text = e => {
    e.preventDefault()

    this.setState({ text: e.target.value })
  }

  _submit = e => {
    e.preventDefault()
    let username = this.state.text

    this.findTweets(username)
    this.findPersonality(username)

    let input_reset = document.querySelector('#input_reset')
    input_reset.value = ''
    let div = document.querySelector('#foo')
    div.className = 'hide'

    let box = document.querySelector('#tweetResults')
    box.className = 'tweetBoxShowing'
  }

  render() {
    return (
      <div id="appForm">
        <div id="foo">
          <form className="form" onSubmit={this._submit}>
            <div>
              <label>Twitter Handle</label>
              <br />
              <input type="text" id="input_reset" onChange={this._text} placeholder="No '@' needed!" />
            </div>
            <button>Check Results!</button>
          </form>
        </div>
        <div id="tweetResults" className="tweetBox">
          {this.state.tweetsArray.map((text, i) =>
            <p key={i} className="results">
              {text}
            </p>
          )}
        </div>
        <div id="marginBottom">
          {this.state.personalityArray
            .sort(function(a, b) {
              return b.percentile - a.percentile
            })
            .map((trait, i) =>
              <div id="resultBox">
                <h3 key={i} className="results">
                  {trait.name}
                </h3>
                <p className="results">
                  {Math.floor(trait.percentile * 100)}%
                </p>
                <div>
                  {trait.children.map((name, j) =>
                    <p>
                      {name.name}
                    </p>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default App
