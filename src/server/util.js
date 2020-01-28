import React from 'react'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import getStore from '../store'

const { renderToString } = ReactDomServer

export default (req) => {
  const content = renderToString((
    <Provider store={getStore()}>
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
