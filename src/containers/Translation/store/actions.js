import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
})

const getTranslationList = () => (dispatch, getState, axiosInstance) => (
  axiosInstance.get('/api/translations.json?secret=PP87ANTIPIRATE')
    .then((res) => {
      if (res.data.success) {
        const list = res.data.data
        dispatch(changeList(list))
      } else {
        const list = []
        dispatch(changeList(list))
      }
    })
)

export default getTranslationList
