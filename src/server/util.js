import React from 'react'
import ReactDomServer from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../Routes'
import getStore from '../store'

const { renderToString } = ReactDomServer

export default (req) => {
  const store = getStore()
  const matchRoutes = []
  // 根据路由来获取对应组件的loadData方法
  routes.some((route) => {
    const match = matchPath(req.path, route)
    if (match) {
      matchRoutes.push(route)
    }
    return matchRoutes
  })
  const content = renderToString((
    <Provider store={getStore()}>
      <StaticRouter location={req.path}>
        {
          routes.map((route) => (
            <Route {...route} />
          ))
        }
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
