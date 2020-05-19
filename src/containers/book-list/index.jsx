import { connect } from 'react-redux'
import { editBook, deleteBook } from '../../modules/book'
import BookList from './view'

const mapStateToProps = state => {
  return { books: state.book.books }
}

const mapDispatchToProps = dispatch => ({
  editBook: (id, newBook) => dispatch(editBook(id, newBook)),
  deleteBook: id => dispatch(deleteBook(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
