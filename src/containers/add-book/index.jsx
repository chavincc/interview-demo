import React, { useState } from 'react'
import { Layout, Form, Input, Button, DatePicker } from 'antd'

import { requiredFieldRule, nameRule } from '../../utils/rules'
import { bookField } from '../../utils/types'

const { Content } = Layout
const { TextArea } = Input

const AddBook = () => {
  return (
    <Layout className="layout">
      <Content>
        <h1 className="header">
          Nice work finishing your new book !! give us some information
        </h1>
        <div className="container">
          <Form>
            <Form.Item
              label="book name"
              name={bookField.bookName}
              rules={[requiredFieldRule]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="author name"
              name={bookField.author}
              rules={[requiredFieldRule, nameRule]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="content summary"
              name={bookField.summary}
              rules={[requiredFieldRule]}>
              <TextArea rows={5} />
            </Form.Item>
            <Form.Item
              label="date you finished this book"
              name={bookField.finishDate}>
              <DatePicker />
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
