import React from 'react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = ({ display }) => {

  return (
    <div className={`sidebar-container ${display ? "open" : "close" }`}>
      <nav className='side-nav'>
        <NavLink
          to="/"
          className='side-nav-link'
          activeclass='active'
        >
          <p>Dashboard</p>
          </NavLink>
        <NavLink
          to="/organization"
          className='side-nav-link'
          activeclass='active'
        >
          <p>Organization Management</p>
        </NavLink>
        <NavLink
          to="/user"
          className='side-nav-link'
          activeclass='active'
        >
            <p>User Management</p>
        </NavLink>
        <NavLink
          to="/student"
          className='side-nav-link'
          activeclass='active'
        >
          <p>Student Management</p>
        </NavLink>
        <NavLink
          to="/settings"
          className='side-nav-link'
          activeclass='active'
        >
          <p>Settings</p>
        </NavLink>
        <NavLink
          to="/logout"
          className='side-nav-link'
          activeclass='active'
        >
          <p>Logout</p>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar