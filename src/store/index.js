import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'cyan' }, action) => state
// 避免所有render公用一个store
const getStore = () => createStore(reducer, applyMiddleware(thunk))

export default getStore
