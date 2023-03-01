import React from 'react'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

import Sidebar from '../../Sidebar/Sidebar'
import { SideContext } from '../Contexts/Context'
import groupData from '../../data/group.json'
import studentData from '../../data/student.json'
import userData from '../../data/user.json'
import './Dashboard.css'

const Dashboard = () => {
  const [weather, setWeather] = useState('')
  const sidebar = useContext(SideContext)

  const getWeather = async () => {
    const weatherData = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    setWeather(weatherData.data.current_weather)
  }

  useEffect(() => {
    getWeather()
    return () => getWeather()
  }, [])

  return (
    <div className='dashboard-container-1'>
      <Sidebar display={sidebar} />
      <div className='dashboard-container-2'>
        <table className='table-data'>
          <thead>
            <tr>
              <th>Total student</th>
              <th>Total group</th>
              <th>Total active user</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{studentData.length}</td>
              <td>{groupData.length}</td>
              <td>{userData.reduce((acc, user) => {
                if (user.status === 'Active') return acc + 1
                return acc
              }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className='weather-container'>
          <h2>Weather</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Windspeed: {weather.windspeed} m/s</p>
          <p>{moment(weather.time).format("MMMM Do YYYY, h:mm a")}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard