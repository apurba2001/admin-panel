import React from 'react'
import moment from 'moment'
import { useContext } from 'react';

import menu_logo from '../icons/menu.png'
import logo from '../icons/logo.png'
import user from '../icons/user.png'
import './Navbar.css'
import { ThemeContext } from '../Components/Contexts/Theme';

const Navbar = ({ setSidebar, setTheme }) => {
    const currentDateTime = moment().format('MMMM Do YYYY, hh:mm:ss A')
    const theme = useContext(ThemeContext)
    return (
        <div className={`navbar-container ${theme}`}>
            <div className="icon-container">
                <div className="logo-icon" style={{margin: '5px'}}>
                    <img src={logo} alt="logo-icon" width='35' style={{ cursor: 'pointer' }} />
                </div>
                <div className="logo-icon" style={{margin: '5px'}} >
                    <img src={menu_logo} alt="menu" width='35' style={{cursor: 'pointer'}} onClick={()=> setSidebar(pre => !pre)} />
                </div>
            </div>
            <div className="nav-options">
                <div><input type="text" placeholder='Search..' id='search' /></div>
                <div><button className='nav-btn' style={{ background: "rgb(243, 243, 243)", color: 'black'}}>Change language</button></div>
                <div><button className='nav-btn' onClick={() => setTheme(pre => !pre)} >{theme ? 'Dark' : 'Light'}</button></div>
                <div className='time-container'><div>{currentDateTime.split(',')[1]}</div><div>{currentDateTime.split(',')[0]}</div> </div>
                <div className="user-logo">
                    <img src={user} alt='user' width='35' style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default Navbar