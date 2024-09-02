import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 鍵盤事件的方法
  handleKeyUp =(event)=> {
      // 解構賦值獲取keyCode, tartget
      const {keyCode, target} = event;
      // 判斷是否enter按鍵
      if (keyCode !== 13) return
      if (target.value.trim() === '') {
        alert('輸入不能為空')
        return
      }
      // 準備好一個todo物件
      const todoObj = {id:nanoid(), name:target.value, done:false}
      // todo傳遞給App
      this.props.addTodo(todoObj);
  }

  // 對接收的props進行: 類型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按Enter鍵確認"/>
      </div>
    )
  }
}
