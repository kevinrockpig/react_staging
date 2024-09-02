// 引入react核心庫
import React from 'react'
// 引入ReacrDOM
import ReactDOM from 'react-dom/client'
// 引入App組件
import App from './App.js'

// React17
// ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'))


// React18
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)