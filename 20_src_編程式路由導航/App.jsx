import React, { Component } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
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
            <MyNavLink to="/about" >About</MyNavLink>
            <MyNavLink to="/home" >Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
                {/* 舊版 註冊路由 */}
                {/* 預設模糊匹配，加上exact={true} or 加上exact 就可以變為精準匹配 */}
                {/* 
                    <Switch> 
                        <Route path="/about" Component={About}/>
                        <Route path="/home" Component={Home}/> 
                        <Redirect to="/about" />
                    </Switch> 
                */}

                {/* 新版 註冊路由 -- react-touter-v6 */}
                {/* 預設精準匹配，路經後加上*即可模糊匹配 */}
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home/*" element={<Home/>}/>
                    {/* <Route path="/home/*" element={<div>test page</div>}/> */}
                    <Route path="/" element={<Navigate to ="/about" replace />}/>
                </Routes>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    )
  }
}