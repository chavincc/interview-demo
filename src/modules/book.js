import { bookField } from '../utils/types'

const initialState = {
  [bookField.bookName]: '',
  [bookField.author]: '',
  [bookField.summary]: '',
  [bookField.finishDate]: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return Object.assign({}, state, {
        [action.field]: action.value
      })
    default:
      return state
  }
}

export const updateField = (field, value) => {
  return dispatch =>
    dispatch({
      type: 'UPDATE_FIELD',
      action: {
        field,
        value
      }
    })
}
