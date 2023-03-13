import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'
import { ThemeContext } from '../Components/Contexts/Context'

// icons
import dashboard_icon from './icons/layout.png'
import students_icon from './icons/students.png'
import org_icon from './icons/organization.png'
import user_icon from './icons/team.png'
import settings_icon from './icons/settings.png'
import logout_icon from './icons/logout.png'

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
          <div className='side-element'> { display && 'Dashboard' } <img src={dashboard_icon} alt="" width='20' /> </div>
          </NavLink>
        <NavLink
          to="/organization"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'>{display && 'Organizations'} <img src={org_icon} alt="" width='20' /></div>
        </NavLink>
        <NavLink
          to="/user"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'>{display && 'Users'} <img src={user_icon} alt="" width='20' /></div>
        </NavLink>
        <NavLink
          to="/student"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'>{display && 'Students'} <img src={students_icon} alt="" width='20' /></div>
        </NavLink>
        <NavLink
          to="/settings"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'>{display && 'Settings'} <img src={settings_icon} alt="" width='20' /></div>
        </NavLink>
        <NavLink
          to="/logout"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'>{display && 'Logout'} <img src={logout_icon} alt="" width='20' /></div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar