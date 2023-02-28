import React from 'react'

import menu_logo from '../icons/menu.png'
import logo from '../icons/logo.png'
import user from '../icons/user.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="icon-container">
                {/* <div className="logo-icon" style={{margin: '5px'}}>
                    <img src={logo} alt="logo-icon" width='40' style={{ cursor: 'pointer' }} />
                </div> */}
                <div className="logo-icon" style={{margin: '5px'}} >
                    <img src={menu_logo} alt="menu" width='40' style={{cursor: 'pointer'}} />
                </div>
            </div>
            <div className="nav-options">
                <div><input type="text" placeholder='Search..' id='search' /></div>
                <div><button className='nav-btn'>Change language</button></div>
                <div><button className='nav-btn'>Dark</button></div>
                <p>9:15 Jan 12</p>
                <div className="user-logo">
                    <img src={user} alt='user' width='40' style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default Navbar