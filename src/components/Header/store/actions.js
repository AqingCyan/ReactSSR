import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value,
})

export const getHeaderInfo = () => (dispatch, getState, axiosInstance) => (
  axiosInstance.get('/api/isLogin.json')
    .then((res) => {
      dispatch(changeLogin(res.data.data.login))
    })
)

export const login = () => (dispatch, getState, axiosInstance) => (
  axiosInstance.get('/api/login.json')
    .then((res) => {
      if (res.data.success) {
        dispatch(changeLogin(true))
      }
    })
)

export const logout = () => (dispatch, getState, axiosInstance) => (
  axiosInstance.get('/api/logout.json')
    .then((res) => {
      if (res.data.success) {
        dispatch(changeLogin(false))
      }
    })
)
