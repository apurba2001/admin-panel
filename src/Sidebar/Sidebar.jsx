import { useContext, useState } from 'react'
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

const Sidebar = ({ display, setSidebar, fixed }) => {
  const theme = useContext(ThemeContext)
  // const [isClicked, setIsclicked] = useState(false)

  const handleSidebar = (type) =>{
    console.log(fixed)
    if(!fixed){
      if(type === 'open'){
        setSidebar(true)
      }else{
        setSidebar(false)
      }
    }
  }

  return (
    <div className={`sidebar-container ${display ? "open" : "close" } ${theme ? '' : 'dark'}`} onMouseEnter={() => handleSidebar('open')} onMouseLeave={ () =>  handleSidebar('close')} >
      <nav className='side-nav'>
        <NavLink
          to="/"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'> <img src={dashboard_icon} alt="" width='20' />{ display && 'Dashboard' }  </div>
          </NavLink>
        <NavLink
          to="/organization"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'> <img src={org_icon} alt="" width='20' /> {display && 'Organizations'}</div>
        </NavLink>
        <NavLink
          to="/user"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'> <img src={user_icon} alt="" width='20' /> {display && 'Users'}</div>
        </NavLink>
        <NavLink
          to="/student"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'> <img src={students_icon} alt="" width='20' /> {display && 'Students'}</div>
        </NavLink>
        <NavLink
          to="/settings"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'> <img src={settings_icon} alt="" width='20' /> {display && 'Settings'}</div>
        </NavLink>
        <NavLink
          to="/logout"
          className='side-nav-link'
          activeclass='active'
        >
          <div className='side-element'> <img src={logout_icon} alt="" width='20' /> {display && 'Logout'}</div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar