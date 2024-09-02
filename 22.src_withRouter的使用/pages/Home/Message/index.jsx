import React from 'react'
import {Link,Route, Routes, useNavigate} from 'react-router-dom'

import Detail from './Detail';


export default function Message() {


  const messageArr = [
    {id:"01", title:"消息1" },
    {id:"02", title:"消息2" },
    {id:"03", title:"消息3" },
  ]

  const navigate = useNavigate();

  // 向路由組件傳遞state參數
  const handlePushNavigate = (id, title) => {
    // replace跳轉＋攜帶params參數 
    // navigate(`/home/message/detail/${id}/${title}`);

    // replace跳轉＋攜帶search參數
    // navigate(`/home/message/detail?id=${id}&title=${title}`);

    // replace跳轉＋攜帶state參數
    navigate('/home/message/detail', {state: { id: id, title: title}});
  }

  const handleReplaceNavigate = (id, title) => {
    // replace跳轉＋攜帶params參數 
    // navigate(`/home/message/detail/${id}/${title}`, {replace: true});

    // replace跳轉＋攜帶search參數
    // navigate(`/home/message/detail?id=${id}&title=${title}`, {replace: true});

    // replace跳轉＋攜帶state參數
    navigate('/home/message/detail', { state: { id: id, title: title }, replace: true });
  }

  const goBack = () => {
    navigate(-1)
  }

  // const goForward = () => {
  //   navigate(1)
  // }

  const go = () => {
    navigate(2)
  }

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
                   
                    {/* v6 向路由組件傳遞state參數 */}  
                    <Link to='/home/message/detail' state={{id:msgObj.id, title:msgObj.title}}>{msgObj.title}</Link>&nbsp;&nbsp;

                    &nbsp;<button onClick={()=>handlePushNavigate(msgObj.id, msgObj.title)}>push查看</button>
                    &nbsp;<button onClick={()=>handleReplaceNavigate(msgObj.id, msgObj.title)}>replace查看</button>
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
            {/* <Route path="detail" element={<Detail />} /> */}

            {/* state參數無需聲明接收 */}
            <Route path="detail" element={<Detail />} />
          </Routes>

          <button onClick={goBack}>後退</button>&nbsp;
          <button onClick={() => navigate(1)}>前進</button>&nbsp;
          <button onClick={go}>go 2 page</button>

        </div>
    )
  }

