import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import Baselayout from './components/Baselayout'
import PlainText from './components/PlainText'
import Research from './components/Research'
import Observations from './components/Observations'

ReactDOM.render(
  <BrowserRouter>
    <Baselayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/text" component={PlainText} />
        <Route path="/research" component={Research} />
        <Route path="/observations" component={Observations} />
      </Switch>
    </Baselayout>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
