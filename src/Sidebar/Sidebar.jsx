import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'
import { ThemeContext } from '../Components/Contexts/Context'
const Sidebar = ({ display }) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`sidebar-container ${display ? "open" : "close" } ${theme ? '' : 'dark'}`}>
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