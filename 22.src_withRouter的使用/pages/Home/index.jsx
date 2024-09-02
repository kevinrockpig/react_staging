import React, { Component } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink  from '../../components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news"> news </MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message"> message </MyNavLink>
            </li>
          </ul>
            {/* 註冊路由 */}
            <Routes>
              <Route path="/news" element={<News/>} />
              <Route path="/message/*" element={<Message/>} />
              <Route path="/" element={<Navigate to ="/home/news" replace />}/>
            </Routes>
        </div>
    )
  }
}