import Express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import Home from './containers/Home'

const { renderToString } = ReactDomServer
const app = Express()

app.get('/', (req, res) => res.send(renderToString(<Home />)))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
