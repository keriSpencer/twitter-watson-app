import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import Baselayout from './components/Baselayout'
import Form from './components/Form'
import PlainText from './components/PlainText'

ReactDOM.render(
  <BrowserRouter>
    <Baselayout>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/text" component={PlainText} />
      </Switch>
    </Baselayout>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
