import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  // 狀態在哪裡，操作狀態的方法就在哪裡

  // 初始化狀態
  state = {todos:[
    {id:'001',name:'吃飯',done:true},
    {id:'002',name:'睡覺',done:true},
    {id:'003',name:'寫程式',done:false},
    {id:'004',name:'逛街',done:true}
  ]}

  // addTodo用於添加一個todo，接收參數的是todo物件
  addTodo = (todoObj)=>{
    // 獲取原todos
    const {todos} = this.state
    // 追加一個todo
    const newTodos = [todoObj,...todos]
    // 更新狀態
    this.setState({todos:newTodos})
  }

  // 用於更新一個todo物件
  updateTodo = (id, done)=>{
    // 獲取狀態中的todos
    const {todos} = this.state
    // 匹配處理數據
    const newTodos = todos.map((todoObj)=>{
      if (todoObj.id === id) {
        return {...todoObj, done}
      } else {
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }

  // 用於刪除一個todo物件
  deleteTodo = (id)=>{
    // 獲取原狀態
    const {todos} = this.state
    // 刪除指定id的todo物件
    const newTodos = todos.filter((todosObj)=>{
      return todosObj.id !== id
    })
    // 更新狀態
    this.setState({todos:newTodos})
  }

  // 用於全選
  checkAllTodo = (done)=>{
    // 獲取原來的todos
    const {todos} = this.state
    // 加工數據
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done}
    })
    // 更新狀態
    this.setState({todos:newTodos})
  }

  // 用於清除所有已完成的項目
  clearAllDone = ()=>{
    // 獲取原來的todos
    const {todos} = this.state
    // 過濾數據
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    // 更新狀態
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
