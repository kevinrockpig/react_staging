import React, { Component } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home' // Home是路由組件
import About from './pages/About' // About是路由組件
import Header from './components/Header' // Header是一般組件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header/>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生html中，靠<a>跳轉不同的頁面 */}
            {/* <a className="list-group-item active" href="./about.html">About</a>
            <a className="list-group-item" href="./home.html">Home</a> */}
          
            {/* 在React中靠路由連結實現切換組件 */}
            {/* 舊版 activeClassName ， react-router-v6不適用 */}
            {/* <NavLink activeclassName="demo" className="list-group-item" to="/about">About</NavLink>
            <NavLink activeclassName="demo" className="list-group-item" to="/home">Home</NavLink> */}

            {/* 新版 react-router-v6， active的寫法 */}
            {/* <NavLink className={({isActive}) => (isActive ? "list-group-item demo" : 'list-group-item')} to="/about">About</NavLink>
            <NavLink className={({isActive}) => (isActive ? "list-group-item demo" : 'list-group-item')} to="/home">Home</NavLink> */}
            <MyNavLink to="/about" a="1" b="2" c="4" >About</MyNavLink>
            <MyNavLink to="/home" >Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
                {/* 舊版 註冊路由 */}
                {/* <Route path="/about" Component={About}/>
                <Route path="/home" Component={Home}/> */}

                {/* 新版 註冊路由 -- react-touter-v6 */}
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    )
  }
}