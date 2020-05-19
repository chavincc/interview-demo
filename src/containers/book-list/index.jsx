import { connect } from 'react-redux'
import {} from '../../modules/book'
import BookList from './view'

const mapStateToProps = state => {
  return { books: state.book.books }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
