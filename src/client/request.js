import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  params: {
    secret: 'PP87ANTIPIRATE',
  },
})

export default instance
