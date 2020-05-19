import React from 'react'
import { Layout, Form, Input, Button, DatePicker } from 'antd'

import { requiredFieldRule, nameRule } from '../../utils/rules'
import { bookField } from '../../utils/types'

const { Content } = Layout
const { TextArea } = Input

const AddBook = ({ formValue, addBook, updateField }) => {
  const handleFormChange = e => {
    const { value, name } = e.target
    updateField(name, value)
  }

  const handleDateChange = e => {
    updateField(bookField.finishDate, e)
  }

  return (
    <Layout className="layout">
      <Content>
        <h1 className="header">
          Nice work finishing your new book !! give us some information
        </h1>
        <div className="container">
          <Form>
            <Form.Item label="book name">
              <Input
                value={formValue[bookField.bookName]}
                onChange={handleFormChange}
                name={bookField.bookName}
              />
            </Form.Item>
            <Form.Item label="author name">
              <Input
                value={formValue[bookField.author]}
                onChange={handleFormChange}
                name={bookField.author}
              />
            </Form.Item>
            <Form.Item label="content summary">
              <TextArea
                rows={5}
                value={formValue[bookField.summary]}
                onChange={handleFormChange}
                name={bookField.summary}
              />
            </Form.Item>
            <Form.Item label="date you finished this book">
              <DatePicker
                value={formValue[bookField.finishDate]}
                onChange={handleDateChange}
                name={bookField.finishDate}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">save</Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  )
}

export default AddBook
