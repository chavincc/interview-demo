import React from 'react'
import { Layout, List } from 'antd'

import { bookField } from '../../utils/types/'

const { Content } = Layout

const BookList = ({ books, editBook, deleteBook }) => (
  <Layout className="layout">
    <Content>
      <h1 className="header">Book List</h1>
      <div className="container">
        <List
          bordered
          dataSource={books}
          renderItem={item => <List.Item>{item[bookField.bookName]}</List.Item>}
        />
        {/* <img
          className="img"
          src="https://cdn-images-1.medium.com/max/1200/1*YUgt_aABOjm41Hapy1phqA.png"
        /> */}
      </div>
    </Content>
  </Layout>
)

export default BookList
