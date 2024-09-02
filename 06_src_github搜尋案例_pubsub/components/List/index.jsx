import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = { //初始化狀態
    users:[], // users初始值為陣列
    isFirst:true, // 是否為第一次打開頁面
    isLoading:false, // 標示是否讀取中
    err:'', // 儲存請求相關錯誤訊息
  }

  componentDidMount() {
    // msg沒有要輸入，可以用_取代。
    this.token = PubSub.subscribe('huan', (_, stateObj)=>{
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLodaing, err} = this.state
    return (
      <div className="row">
          {
            isFirst ? <h2>輸入關鍵字，點擊搜尋</h2> :
            isLodaing ? <h2>Loading.......</h2> :
            err ? <h2 style={{color:'red'}}>{err}</h2> :
            users.map((userObj)=>{
              return (
                <div key={userObj.id} className="card">
                  <a href={userObj.html_url} target="_blank" rel="noopener noreferrer">
                    <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
                  </a>
                  <p className="card-text">{userObj.login}</p>
                </div>
              )
            })
          }
      </div>
    )
  }
}
