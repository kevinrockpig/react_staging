import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = ()=>{
    // 常規解構附值
    // const {value} = this.keyWordElement
  
    // 獲取用戶輸入(連續解構賦值+重新命名)ex: value命名為keyWord
    const {keyWordElement:{value:keyWord}} = this

    // 發送請求前通知List更新狀態
    PubSub.publish('huan', {isFirst:false, isLoading:true})

    // 發送網路請求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        // 請求成功後通知List更新狀態
        PubSub.publish('huan', {isLoading:false, users:response.data.items})
      },
      error => {
        // 請求失敗後通知List更新狀態
        PubSub.publish('huan', {isLoading:false, err:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder="輸入關鍵字點擊搜尋"/>&nbsp;
            <button onClick={this.search}>搜尋</button>
          </div>
      </section>
    )
  }
}
