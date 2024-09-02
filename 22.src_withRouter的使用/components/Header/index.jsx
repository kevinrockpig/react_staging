import React from 'react'
import { useNavigate } from 'react-router-dom'

// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

// 舊版
// withRouter可以加工一般組件，讓一般組件具備路由組件所持有的API
// withRouter的返回值是一個新組件
// class Header extends Component {

//   goBack = () => {
//     this.props.history.goBack();
//   }

//   goForward = () => {
//     this.props.history.goForward();
//   }

//   go = () => {
//     this.props.history.go(2);
//   }

//   render() {
//     return (
//         <div className="page-header">
//           <h2>React Router Demo</h2>
//           <button onClick={this.goBack}>後退</button>&nbsp;
//           <button onClick={this.goForward}>前進</button>&nbsp;
//           <button onClick={this.go}>go 2 page</button>
//         </div>
//     )
//   }
// }

// export default withRouter(Header)

// v6 不支援withRouter
export default function Header() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  const go = () => {
    navigate(2)
  }

  return(
    <div className="page-header">
      <h2>React Router Demo</h2>
      <button onClick={goBack}>後退</button>&nbsp;
      <button onClick={goForward}>前進</button>&nbsp;
      <button onClick={go}>go 2 page</button>
    </div>
  )

}