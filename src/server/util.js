import React from 'react'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

const { renderToString } = ReactDomServer

export default (store, routes, req, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {
          renderRoutes(routes)
        }
      </StaticRouter>
    </Provider>
  ))
  const helmet = Helmet.renderStatic()

  const cssStr = context.css.length ? context.css.join('\n') : ''

  return (`
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico"/>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>
          * {
            margin: 0;
            padding: 0;
          }
        </style>
        <style>${cssStr}</style>
      </head>
      <body>
         <div id="root">${content}</div>
         <script>window.context={state: ${JSON.stringify(store.getState())}}</script>
         <script src="index.js"></script>
      </body>
    </html>
  `)
}
