import { bookField } from '../utils/types'

export const UPDATE_FIELD = 'book/UPDATE_FIELD'
export const ADD_BOOK = 'book/ADD_BOOK'
export const CLEAR_BOOK = 'book/CLEAR_BOOK'

const initialState = {
  books: [
    {
      [bookField.bookName]: 'dummy',
      [bookField.author]: 'mister writer',
      [bookField.summary]: 'idk',
      [bookField.finishDate]: '2010-10-10'
    }
  ],
  formValue: {
    [bookField.bookName]: '',
    [bookField.author]: '',
    [bookField.summary]: '',
    [bookField.finishDate]: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return Object.assign({}, state, {
        formValue: {
          ...state.formValue,
          [action.field]: action.value
        }
      })
    case 'CLEAR_BOOK_FORM':
      return Object.assign({}, state, {
        formValue: {
          [bookField.bookName]: '',
          [bookField.author]: '',
          [bookField.summary]: '',
          [bookField.finishDate]: ''
        }
      })
    case 'ADD_BOOK':
      return Object.assign({}, state, {
        books: [...state.books, action.book]
      })

    default:
      return state
  }
}

export const updateField = (field, value) => {
  return dispatch =>
    dispatch({
      type: 'UPDATE_FIELD',
      field,
      value
    })
}

export const clearBookForm = () => {
  return dispatch =>
    dispatch({
      type: 'CLEAR_BOOK_FORM'
    })
}

export const addBook = book => {
  return dispatch =>
    dispatch({
      type: 'ADD_BOOK',
      book
    })
}
