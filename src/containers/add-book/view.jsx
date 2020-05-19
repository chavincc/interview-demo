import React from 'react'
import { Layout, Form, Input, Button, DatePicker } from 'antd'

import { bookField } from '../../utils/types'

const { Content } = Layout
const { TextArea } = Input

const AddBook = ({ formValue, addBook, updateField, clearBookForm }) => {
  const handleFormChange = e => {
    const { value, name } = e.target
    updateField(name, value)
  }

  const handleDateChange = e => {
    updateField(bookField.finishDate, e)
  }

  const handleSubmit = () => {
    // if form valid do
    addBook(formValue)
    clearBookForm()
    alert('saved')
  }

  return (
    <Layout className="layout">
      <Content>
        <h1 className="header">
          Nice work finishing your new book !! give us some information
        </h1>
        <div className="container">
          <Form>
            <Form.Item label="book name" key="1">
              <Input
                value={formValue[bookField.bookName]}
                onChange={handleFormChange}
                name={bookField.bookName}
              />
            </Form.Item>
            <Form.Item label="author name" key="2">
              <Input
                value={formValue[bookField.author]}
                onChange={handleFormChange}
                name={bookField.author}
              />
            </Form.Item>
            <Form.Item label="content summary" key="3">
              <TextArea
                rows={5}
                value={formValue[bookField.summary]}
                onChange={handleFormChange}
                name={bookField.summary}
              />
            </Form.Item>
            <Form.Item label="date you finished this book" key="4">
              <DatePicker
                value={formValue[bookField.finishDate]}
                onChange={handleDateChange}
                name={bookField.finishDate}
              />
            </Form.Item>
            <Form.Item label="time you took to finished this book" key="5">
              <Input
                value={formValue[bookField.timespan]}
                onChange={handleFormChange}
                name={bookField.timespan}
                suffix={'day(s)'}
              />
            </Form.Item>
            <Form.Item label="image (url)" key="6">
              <Input
                value={formValue[bookField.imageURL]}
                onChange={handleFormChange}
                name={bookField.imageURL}
              />
            </Form.Item>
            <Form.Item key="7">
              <Button onClick={handleSubmit}>save</Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  )
}

export default AddBook
