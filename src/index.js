import Express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import Home from './containers/Home'

const app = Express()
app.use(Express.static('public'))

const { renderToString } = ReactDomServer
const content = renderToString(<Home />)

app.get('/', (req, res) => res.send(
  `
    <html>
      <head>
        <link rel="icon" href="https://zh-hans.reactjs.org/favicon.ico"/>
        <title>React SSR</title>
      </head>
        <body>
           <div id="root">${content}</div>
           <script src="index.js"></script>
        </body>
    </html>
  `,
))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
