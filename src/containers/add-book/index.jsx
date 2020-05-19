import { connect } from 'react-redux'
import { addBook, updateField, clearBookForm } from '../../modules/book'
import AddBook from './view'

const mapStateToProps = state => {
  return { formValue: state.book.formValue }
}

const mapDispatchToProps = dispatch => ({
  clearBookForm: book => dispatch(clearBookForm()),
  addBook: book => dispatch(addBook(book)),
  updateField: (field, value) => dispatch(updateField(field, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook)
