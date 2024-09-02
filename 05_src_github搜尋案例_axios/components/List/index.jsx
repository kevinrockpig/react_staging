import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLodaing, err} = this.props
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
