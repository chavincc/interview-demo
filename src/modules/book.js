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
      [bookField.author]: 'cat',
      [bookField.summary]: '11/10 good book',
      [bookField.finishDate]: '2019-5-5',
      [bookField.imageURL]:
        'data:image/jpeg;base64,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',
      [bookField.timespan]: '1'
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
          [bookField.finishDate]: '',
          [bookField.imageURL]: '',
          [bookField.timespan]: ''
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
