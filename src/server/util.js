import React from 'react'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Routes from '../Routes'

const { renderToString } = ReactDomServer

export default (req) => {
  const reducer = (state = { name: 'cyan' }, action) => state
  const store = createStore(reducer, applyMiddleware(thunk))

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))
  return (`
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico"/>
        <title>React SSR</title>
        <style>
          * {
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
        <body>
           <div id="root">${content}</div>
           <script src="index.js"></script>
        </body>
    </html>
  `)
}
