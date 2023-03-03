import { useContext } from 'react'

import studentsData from '../../data/student.json'
import Sidebar from '../../Sidebar/Sidebar'
import { SideContext } from '../Contexts/Context'
import Management from '../Management/Management'

const User = () => {
    const display = useContext(SideContext)

    return (
        <div className='user-container-1' style={{ display: 'flex' }}>
            <Sidebar display={display} />
            <div className='user-container-2' style={{ width: 'calc(100% - 250px)', margin: "20px" }}>
                <Management data={studentsData} heading='students' />
            </div>
        </div>
    )
}

export default User