import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/twitter-watson-app/src/styles/App.css'
import Results from './Results'
import Gauge from './Gauge'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      tweetsArray: [],
      personalityArray: [],
      tonesArray: []
    }
  }

  findPersonality = text => {
    let watsonUrl = `http://localhost:4000/?username=${text}`
    fetch(watsonUrl).then(r => r.json()).then(json => {
      this.setState({
        personalityArray: json.personalities.personality,
        tweetsArray: json.tweets,
        tonesArray: json.tones.tones
      })
      console.log(json)
    })
  }

  _text = e => {
    e.preventDefault()

    this.setState({ text: e.target.value })
  }

  _submit = e => {
    e.preventDefault()
    let username = this.state.text

    this.findPersonality(username)

    let input_reset = document.querySelector('#input_reset')
    input_reset.value = ''
    let div = document.querySelector('#foo')
    div.className = 'hide'

    let box = document.querySelector('#tweetResults')
    box.className = 'tweetBoxShowing'

    let tonesDiv = document.querySelector('#tonesDiv')
    tonesDiv.className = 'displayTones'
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
        <div id="tonesDiv" className="hide">
          {this.state.tonesArray.map((tone, k) =>
            <h2 className="centerText" key={k}>
              {tone.tone_name} | {Math.floor(tone.score * 100)}%
            </h2>
          )}
        </div>
        <div id="marginBottom">
          {this.state.personalityArray
            .sort(function(a, b) {
              return b.percentile - a.percentile
            })
            .map((trait, i) =>
              <div key={i} id="resultBox">
                <div>
                  <h3 className="results">
                    <Gauge label={trait.name} percentile={Math.floor(trait.percentile * 100)} />
                  </h3>
                </div>
                <div>
                  {trait.children.map((name, j) =>
                    <p key={j} id="traitName">
                      {name.name}
                    </p>
                  )}
                </div>
              </div>
            )}
        </div>
        <div className="tweetsWrap">
          <div id="tweetResults" className="tweetBox">
            <h3 id="tweeter">
              Tweets from @{this.state.text}
            </h3>
            {this.state.tweetsArray.map((text, i) =>
              <p key={i} className="results">
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
