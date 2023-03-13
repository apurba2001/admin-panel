import React from 'react'
import moment from 'moment'
import { useContext, useState, useEffect } from 'react';

import menu_logo from '../icons/menu.png'
import logo from '../icons/logo.png'
import user from '../icons/user.png'
import './Navbar.css'
import { ThemeContext } from '../Components/Contexts/Context';

const Navbar = ({ setSidebar, setTheme, setFixed, sidebar }) => {
    const [currentDateTime, setCurrentDateTime] = useState(moment().format('MMMM Do YYYY, hh:mm:ss A'))
    useEffect(() => {
        const updateTime = () => {
            setCurrentDateTime(moment().format('MMMM Do YYYY, hh:mm:ss A'))
        }
        let intervel = setInterval(updateTime, 1000)
        return () => intervel
    }, [])

    const theme = useContext(ThemeContext)

    let toggleTheme = () => {
        let body = document.body
        if (theme) {
            body.classList.remove('dark')
        } else {
            body.classList.add('dark')
        }
    }

    useEffect(() => {
        toggleTheme()
    }, [theme])

    const handleMenu = () =>{
        setSidebar(pre => !pre)
        setFixed(true)
    }

    useEffect(()=>{
        if(!sidebar){
            setFixed(false)
        }
    }, [sidebar])

    return (
        <div className={`navbar-container ${theme ? '' : 'dark'}`}>
            <div className="icon-container">
                <div className="logo-icon" style={{ margin: '5px' }}>
                    <img src={logo} alt="logo-icon" width='35' style={{ cursor: 'pointer' }} />
                </div>
                <div className="logo-icon" style={{ margin: '5px' }} >
                    <img src={menu_logo} alt="menu" width='35' style={{ cursor: 'pointer' }} onClick={handleMenu} />
                </div>
            </div>
            <div className="nav-options">
                <div><input type="text" placeholder='Search..' id='search' /></div>
                <div><button id='language' className='nav-btn' >Change language</button></div>
                <div><button id='theme' className='nav-btn theme' onClick={() => setTheme(pre => !pre)} >{theme ? 'Dark' : 'Light'}</button></div>
                <div className='time-container'><div>{currentDateTime.split(',')[1]}</div><div>{currentDateTime.split(',')[0]}</div> </div>
                <div className="user-logo">
                    <img src={user} alt='user' width='35' style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default Navbar