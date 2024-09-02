// 引入react核心庫
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom/client'
// 引入App
import App from './App'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>)