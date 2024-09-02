import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = { //初始化狀態
    users:[], // users初始值為陣列
    isFirst:true, // 是否為第一次打開頁面
    isLoading:false, // 標示是否讀取中
    err:'', // 儲存請求相關錯誤訊息
  }

  // 更新App的state
  updateAppState = (stateObj)=>{
    // this.setState({users:users})，名稱一樣，縮減users。
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}