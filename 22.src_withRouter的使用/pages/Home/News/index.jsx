// import React, { Component } from 'react'
// import React, {useEffect} from 'react'
import React from 'react'
// import {useNavigate} from 'react-router-dom'

// v6 之前的版本
// export default class News extends Component {

//   componentDidMount(){
//     setTimeout(()=>{
//       this.props.history.push('/home/message')
//     }, 2000)
//   }

//   render() {
//     return (
//       <ul>
//         <li>news001</li>
//         <li>news002</li>
//         <li>news003</li>
//       </ul>
//     )
//   }

// }



// v6 版本，useNavigate()是個鉤子，所以必須在函數組件中才能使用它
export default function News() {
  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/home/message')
  //   }, 2000)
  //   return () => clearTimeout(timer)
  // })

    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
}