import React, { Component } from 'react'

import sadJoy from '../images/sadJoy.png'
import joyScale2 from '../images/joyScale2.png'
import emergencyKittens from '../images/emergencyKittens.png'
import conOpen from '../images/conOpen.png'
import purchasingPref from '../images/purchasingPref.png'
import healthPref from '../images/healthPref.png'
import musicPref from '../images/musicPref.png'

import { Link } from 'react-router-dom'

class Examples extends Component {
  render() {
    return (
      <div className="useCases">
        <h2 id="exampleHeader">Examples</h2>
        <h3 className="h3useCase" id="toneId">
          Samples of Tone Analysis
        </h3>
        <p className="exampleP">
          Here we can see some of the different tone results that are returned from different users' Twitter handles.
          Text can have no recognizable tone or it might have several tones. This does not mean that the messages are
          conflicting but more likely, they are working in harmony with one another.
          <br />
          <br />
          <p className="exampleP">
            We might see this with someone that tweets about the highs and lows of each day. Often the same person will
            have messages like, "Excited for today's coffee break," but that doesn't prevent messages such as, "I've
            been on hold with XYZ company forever. When will I finally have my issue resolved?"
          </p>
        </p>
        <ul>
          <li>
            <h4 className="exampleH4">Person One</h4>
            <p className="exampleP">
              This shows us that the overall tone of this users's tweets are mostly Joyous. Anything less than 50% will
              likely go unnoticed by the reader and not displayed in our analysis.
            </p>
            <img src={joyScale2} height="369px" width="auto" />
          </li>
          <li>
            <h4 className="exampleH4">Person Two</h4>
            <p className="exampleP">
              This user has two dominating tones recognized in the majority of their tweets. These elements are not
              competing but working in harmony with one another.
            </p>
            <img src={sadJoy} height="407px" width="auto" />
          </li>
          <li>
            <h4 className="exampleH4">Person Three</h4>
            <p className="exampleP">
              This user has three dominating tones recognized in the majority of their tweets.{' '}
              <Link className="userCase" to="https://twitter.com/EmrgencyKittens">
                This user
              </Link>{' '}
              shares many photos of cats being cute and crazy.
            </p>
            <img src={emergencyKittens} height="399px" width="auto" />
          </li>
        </ul>

        <h3 className="h3useCase" id="toneId">
          Samples of Personality Insights
        </h3>
        <p className="exampleP">
          This takes a deep dive into different personality traits. The more text we provide, the more accurate the data
          we receive. Here we are providing up to 200 tweets per user and up to several thousand words. This
          demonstration is focused on the big five personality traits identified by IBM's Watson.
        </p>
        <ul>
          <li>
            <h4 className="exampleH4">Person One</h4>
            <p className="exampleP">
              This individual's strongest personality trait is the Emotional Range. This means that they are prone to
              the characteristics seen below.
            </p>
            <img src={joyScale2} height="369px" width="auto" />
          </li>
          <li>
            <h4 className="exampleH4">Comparing Different Traits</h4>
            <p className="exampleP">
              These scales show us how this person falls on the scales for conscientiousness and openness.
            </p>
            <img src={conOpen} height="452px" width="auto" />
          </li>
        </ul>

        <h3 className="h3useCase">Extensive Applications</h3>
        <p className="exampleP">
          This becomes really powerful when we search for certain endpoints in our API. We can see anything from
          purchasing preferences to music and movie choices.
        </p>
        <p className="exampleP">
          The score ranges from 0-1. Zero means they are unlikely to have this preference; one means that they are
          likely to have this preference.
        </p>
        <ul>
          <li>
            <h4 className="exampleH4">Purchasing preferences sample options</h4>
            <img src={purchasingPref} height="307px" width="auto" />
          </li>
          <li>
            <h4 className="exampleH4">Health preferences sample options</h4>
            <img src={healthPref} height="260px" width="auto" />
          </li>
          <li>
            <h4 className="exampleH4">Music preferences sample options</h4>
            <img src={musicPref} height="253px" width="auto" />
          </li>
        </ul>
        <p />
      </div>
    )
  }
}

export default Examples
