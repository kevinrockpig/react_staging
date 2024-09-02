import React, { Component } from 'react'
import {Link, Route, Routes} from 'react-router-dom'

import Detail from './Detail';

export default class Message extends Component {

  state = {
    messageArr : [
      {id:"01", title:"消息1" },
      {id:"02", title:"消息2" },
      {id:"03", title:"消息3" },
    ]
  }

  render() {
    const {messageArr} = this.state;
    return (
        <div>
          <ul>
            {
              messageArr.map((msgObj)=>{
                return(
                  <li key={msgObj.id}>
                    {/* 向路由組件傳遞params參數 */}
                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                    {/* 向路由組件傳遞search參數 */}
                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                   
                   
                    {/* 舊 向路由組件傳遞state參數 */}
                    {/* <Link to={{pathname:'/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                    {/* v6 向路由組件傳遞state參數 */}
                    <Link replace to='/home/message/detail' state={{id:msgObj.id, title:msgObj.title}}>{msgObj.title}</Link>&nbsp;&nbsp;
                 </li>
                )
              })
            }
          </ul>
          <hr/>
          <Routes>
            {/* 聲明接收params參數 */}
            {/* <Route path="/detail/:id/:title" element={<Detail/>} /> */}

            {/* search參數無需聲明接收 */}
            {/* <Route path="/detail" element={<Detail/>} /> */}

            {/* state參數無需聲明接收 */}
            <Route path="/detail" element={<Detail/>} />
          </Routes>
        </div>
    )
  }
}
