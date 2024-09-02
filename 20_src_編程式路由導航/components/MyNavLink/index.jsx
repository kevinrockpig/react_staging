import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // const { title } = this.props
    return (
        // <NavLink className={({isActive}) => (isActive ? "list-group-item demo" : 'list-group-item')} to="/home">Home</NavLink>
        // <NavLink className={({isActive}) => (isActive ? "list-group-item demo" : 'list-group-item')} to={to}>Home</NavLink>
        // <NavLink className={({isActive}) => (isActive ? "list-group-item demo" : 'list-group-item')} {...this.props}>{title}</NavLink>
        <NavLink className={({isActive}) => (isActive ? "list-group-item demo" : 'list-group-item')} {...this.props} />
    )
  }
}
