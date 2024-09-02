import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'querystring'

// // v6不適用
// export default class Detail extends Component {
//   render() {
//  // 接收params參數
//     const {id, title} = this.props.match.params
//
//  // 接收search參數
//     const {search} = this.props.location
//     const {id, title} = qs.parse(search.slice(1))
//     return (
//       <ul>
//         <li>ID:{id}</li>
//         <li>TITLE:{title}</li>
//         <li>CONTENT:???</li>
//       </ul>
//     )
//   }
// }

const detailData = [
  {id:'01', content:'hello, this is one'},
  {id:'02', content:'hello, this is second'},
  {id:'03', content:'hello, this is third'}
]

// v6 使用 useLocation 方式，但不能在class中使用，所以這邊改用函數組件。
export default function Detail() {
    // 接收search參數
    const {id, title} = qs.parse(useLocation().search.slice(1))
    const findResult = detailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
}