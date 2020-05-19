import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import Home from '../home'
import About from '../about'
import AddBook from '../add-book'
import BookList from '../book-list'

const { Header, Footer } = Layout

const App = () => (
  <div>
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about-us">About Us</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/add-book">Add Book</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/book-list">Book List</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/add-book" component={AddBook} />{' '}
      <Route exact path="/book-list" component={BookList} />
    </main>
    <Footer style={{ textAlign: 'center' }}>
      Interview ©2018 Created by Promphat
    </Footer>
  </div>
)

export default App
