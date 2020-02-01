import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import { actions } from './components/Header/store'

const App = (props) => {
  const { route, staticContext } = props
  return (
    <div>
      <Header staticContext={staticContext} />
      {
        renderRoutes(route.routes)
      }
    </div>
  )
}

App.loadData = (store) => (store.dispatch(actions.getHeaderInfo()))

export default App
