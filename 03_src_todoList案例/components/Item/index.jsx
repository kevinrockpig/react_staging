import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false} // 標示鼠標移入、移出

  // 鼠標移入、移出的方法
  handleMouse =(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾選和取消勾選某一個todo的方法
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id, event.target.checked)
    }
  }
  
  // 刪除一個todo的方法
  handleDelete = (id)=>{
    if(window.confirm('確定刪除嗎？')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state

    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={()=> this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>刪除</button>
      </li>
    )
  }
}
