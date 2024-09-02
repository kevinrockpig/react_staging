import React from 'react'
import { useParams } from 'react-router-dom'

// // v6不適用
// export default class Detail extends Component {
//   render() {
//     const {id, title} = this.props.match.params
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

// v6 使用 useParams hook方式，但不能在class中使用，所以這邊改用函數組件。
export default function Detail() {
    // 接收params參數
    const {id, title} = useParams();
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