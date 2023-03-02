import { useContext, useState, useEffect } from 'react'

import Sidebar from '../../Sidebar/Sidebar'
import { SideContext } from '../Contexts/Context'
import './Settings.css'

const Settings = () => {
    const display = useContext(SideContext)

    const cpuCount = navigator.hardwareConcurrency;
    const [availableMemory, setAvailableMemory] = useState(0);

    useEffect(() => {
        const updateAvailableMemory = () => {
            setAvailableMemory((performance.memory.totalJSHeapSize - performance.memory.usedJSHeapSize) / 1048576)
        }
        updateAvailableMemory()
        const memoryInterval = setInterval(updateAvailableMemory, 1000)
        return () => clearInterval(memoryInterval)
    }, [])

    const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [currentTime, setCurrentTime] = useState(new Date());

    function handleTimeZoneChange(event) {
        setTimeZone(event.target.value);
    }
    function updateTime() {
        setCurrentTime(new Date());
    }
    setInterval(updateTime, 1000);

    return (
        <div className='setting-main-1'>
            <Sidebar display={display} />
            <div className='setting-main-2'>
                <div className='device-health'>
                    <p>CPU count: {cpuCount}</p>
                    <p>Memory: {availableMemory.toFixed(2)} GB</p>
                </div>
                <div className='timezone-setting'>
                    <label>
                        Time zone:
                        <select value={timeZone} onChange={handleTimeZoneChange}>
                            <option value="America/New_York">New York</option>
                            <option value="America/Los_Angeles">Los Angeles</option>
                            <option value="Europe/London">London</option>
                            <option value="Europe/Paris">Paris</option>
                            <option value="Asia/Tokyo">Tokyo</option>
                        </select>
                    </label>
                    <p>
                        Current time in {timeZone}: {currentTime.toLocaleString(undefined, { timeZone })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Settings