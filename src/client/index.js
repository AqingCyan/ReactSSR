import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../Routes'
import getStore from '../store'

const App = () => (
  <Provider store={getStore()}>
    <BrowserRouter>
      {
        routes.map((route) => (
          <Route {...route} />
        ))
      }
    </BrowserRouter>
  </Provider>
)

ReactDom.hydrate(<App />, document.getElementById('root'))
