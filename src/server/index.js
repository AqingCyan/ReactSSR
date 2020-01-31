import Express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import render from './util'
import { getStore } from '../store'
import routes from '../Routes'

const app = Express()
app.use(Express.static('public'))
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: (req) => `/ssr/api${req.url}`,
}))

app.get('*', (req, res) => {
  const store = getStore(req)
  // 根据路由来获取对应组件的loadData方法，再让matchedRoutes中所有组件的loadData方法执行一次让store拿到state
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      // 这里一层封装使得不管哪个请求出现了问题，都能使Promise.all触发，尽可能的准备全数据（容错机制）
      const promise = new Promise(((resolve) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      }))
      promises.push(promise)
    }
  })
  Promise.all(promises).then(() => {
    const context = {}
    const html = render(store, routes, req, context)
    // 服务器端重定向
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NotFound) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  }).catch(() => {
    res.send('对不起，数据加载有误')
  })
})

app.listen(3000, () => console.log('ReactSSR project is listening on port 3000!'))
