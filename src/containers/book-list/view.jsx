import React from 'react'
import { Layout, List, Card, Button } from 'antd'

import { bookField } from '../../utils/types/'

const { Content } = Layout

const BookList = ({ books, editBook, deleteBook }) => {
  const handleEdit = id => {
    editBook(
      id,
      // new book
      {
        [bookField.bookName]: 'edit test id = 0',
        [bookField.author]: 'edit',
        [bookField.summary]: `I cannot finish this feature on time. However, store action is implemented.
          BRIEF: store find book with same id and change every field except id.
          `,
        [bookField.finishDate]: 'edit',
        [bookField.imageURL]: 'edit',
        [bookField.timespan]: 'edit'
      }
    )
  }

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
                          handleEdit(item[bookField.id])
                        }}>
                        edit
                      </Button>
                    </>
                  }>
                  <img
                    src={item[bookField.imageURL]}
                    style={{ marginBottom: '1rem', maxHeight: '200px' }}
                  />
                  <p>author: {item[bookField.author]}</p>
                  <p>summary: {item[bookField.summary]}</p>
                  <p>finish date: {item[bookField.finishDate]}</p>
                  <p>timespan: {item[bookField.timespan] + ' day(s)'}</p>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </Content>
    </Layout>
  )
}

export default BookList
