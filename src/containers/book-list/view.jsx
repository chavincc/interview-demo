import React from 'react'
import { Layout, List, Card, Button } from 'antd'

import { bookField } from '../../utils/types/'

const { Content } = Layout

const BookList = ({ books, editBook, deleteBook }) => {
  return (
    <Layout className="layout">
      <Content>
        <h1 className="header">Book List</h1>
        <div className="container">
          <List
            dataSource={books}
            renderItem={item => (
              <List.Item key={item[bookField.id]}>
                <Card
                  id={item[bookField.id]}
                  title={item[bookField.bookName]}
                  extra={
                    <>
                      <Button
                        onClick={() => {
                          deleteBook(item[bookField.id])
                        }}>
                        delete
                      </Button>
                      <Button
                        onClick={() => {
                          editBook(item[bookField.id], {
                            [bookField.bookName]: 'edit test id = 0',
                            [bookField.author]: '',
                            [bookField.summary]: '',
                            [bookField.finishDate]: '',
                            [bookField.imageURL]: '',
                            [bookField.timespan]: ''
                          })
                        }}>
                        edit
                      </Button>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          {/* <img
          className="img"
          src="https://cdn-images-1.medium.com/max/1200/1*YUgt_aABOjm41Hapy1phqA.png"
        /> */}
        </div>
      </Content>
    </Layout>
  )
}

export default BookList
