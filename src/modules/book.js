import { v4 as uuidv4 } from 'uuid'

import { bookField } from '../utils/types'

export const UPDATE_FIELD = 'book/UPDATE_FIELD'
export const ADD_BOOK = 'book/ADD_BOOK'
export const CLEAR_BOOK = 'book/CLEAR_BOOK'

const initialState = {
  books: [
    {
      [bookField.id]: '0',
      [bookField.bookName]: 'testbook id=0',
      [bookField.author]: '',
      [bookField.summary]: '',
      [bookField.finishDate]: '',
      [bookField.imageURL]: '',
      [bookField.timespan]: ''
    }
  ],
  formValue: {
    [bookField.bookName]: '',
    [bookField.author]: '',
    [bookField.summary]: '',
    [bookField.finishDate]: '',
    [bookField.imageURL]: '',
    [bookField.timespan]: ''
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
        books: [
          ...state.books,
          {
            ...action.book,
            id: uuidv4()
          }
        ]
      })

    case 'DELETE_BOOK':
      return Object.assign({}, state, {
        books: state.books.filter(book => book[bookField.id] !== action.id)
      })

    case 'EDIT_BOOK':
      return Object.assign({}, state, {
        books: state.books.map(book =>
          book[bookField.id] === action.id
            ? { ...action.newBook, id: book[bookField.id] }
            : book
        )
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

export const deleteBook = id => {
  return dispatch =>
    dispatch({
      type: 'DELETE_BOOK',
      id
    })
}

export const editBook = (id, newBook) => {
  return dispatch =>
    dispatch({
      type: 'EDIT_BOOK',
      id,
      newBook
    })
}
