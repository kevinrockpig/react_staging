import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async ()=>{
    // 常規解構附值
    // const {value} = this.keyWordElement
  
    // 獲取用戶輸入(連續解構賦值+重新命名)ex: value命名為keyWord
    const {keyWordElement:{value:keyWord}} = this

    // 發送請求前通知List更新狀態
    PubSub.publish('huan', {isFirst:false, isLoading:true})

    // 發送網路請求 ---- 使用axios方法
    // axios.get(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     // 請求成功後通知List更新狀態
    //     PubSub.publish('huan', {isLoading:false, users:response.data.items})
    //   },
    //   error => {
    //     // 請求失敗後通知List更新狀態
    //     PubSub.publish('huan', {isLoading:false, err:error.message})
    //   }
    // )

    // 發送網路請求 ---- 使用fetch發送請求(未優化)
    // fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     console.log('連接伺服器成功');
    //     return response.json()
    //   },
    //   error => {
    //     console.log('連接伺服器失敗', error);
    //     return new Promise(()=>{})
    //   }
    // ).then(
    //   response => {
    //     console.log('獲取數據成功', response);
    //   },
    //   error => {
    //     console.log('獲取數據失敗', error);
    //   }
    // )

    // 發送網路請求 ---- 使用fetch發送請求(優化)
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('huan', {isLoading:false, users:data.items})
    } catch (error) {
      PubSub.publish('huan', {isLoading:false, err:error.message})
    }



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
