import { useContext } from 'react'

import Sidebar from '../../Sidebar/Sidebar'
import './Organization.css'
import { SideContext } from '../Contexts/Context'
import Management from '../Management/Management'
import { ThemeContext } from '../Contexts/Context'

import orgsData from '../../data/organization.json'
import groupsData from '../../data/group.json'
import rolesData from '../../data/role.json'
import departmentData from '../../data/department.json'

const Organization = () => {
    const display = useContext(SideContext)
    const theme = useContext(ThemeContext)

    const managementData = [orgsData, groupsData, rolesData, departmentData]
    const managementHeadings = ['organizations', 'groups', 'roles', 'departments']

    return (
        <div className={`org-main ${theme ? '' : 'dark'}`}>
            <Sidebar display={display} />
            <div className='org-container-1'>
                {
                    managementData.map((data, idx) => <Management data={data} heading={managementHeadings[idx]} />)
                }
            </div>
        </div>
    )
}

export default Organization