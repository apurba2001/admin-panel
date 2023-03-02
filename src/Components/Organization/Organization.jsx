import { useContext, useState } from 'react'

import Sidebar from '../../Sidebar/Sidebar'
import './Organization.css'
import { SideContext } from '../Contexts/Context'
import Form from '../Form/Form'
import Table from '../Table/Table'

import orgsData from '../../data/organization.json'
import groupsData from '../../data/group.json'
import rolesData from '../../data/role.json'
import usersData from '../../data/user.json'

const Organization = () => {
    const display = useContext(SideContext)
    const [formDisplay, setFormDisplay] = useState(false)
    const [formType, setFormType] = useState('')
    const [editElement, setEditElement] = useState(0)

    const [organization, setOrganization] = useState(orgsData)
    const [groups, setGroups] = useState(groupsData)
    const [roles, setRoles] = useState(rolesData)
    const [users, setUsers] = useState(usersData)

    const editData = (id, dataType) => {
        setFormType('edit')
        setFormDisplay(true)
        const dataMap = {
            org: organization,
            group: groups,
            role: roles,
            user: users,
        }
        const editElement = dataMap[dataType].find((element) => element.Id === id)
        setEditElement(editElement)
    }

    const deleteData = (id, dataType) => {
        switch (dataType) {
            case 'org':
                const newOrgData = organization.filter((item) => item.Id !== id)
                setOrganization(newOrgData)
                break
            case 'group':
                const newGroupData = groups.filter((item) => item.Id !== id)
                setGroups(newGroupData)
                break
            case 'role':
                const newRoleData = roles.filter((item) => item.Id !== id)
                setRoles(newRoleData)
                break
            case 'user':
                const newUserData = users.filter((item) => item.Id !== id)
                setUsers(newUserData);
                break
            default:
                break
        }
    }

    const getNextId = (dataType) => {
        switch (dataType) {
            case 'org':
                return organization.length + 1
            case 'group':
                return groups.length + 1
            case 'role':
                return roles.length + 1
            case 'user':
                return users.length + 1
            default:
                return 1
        }
    }

    const saveData = (type, dataType, id, data) => {
        if (type === 'edit') {
            switch (dataType) {
                case 'org':
                    const newOrgData = organization.map((item) => {
                        return item.Id === id ? data : item
                    });
                    setOrganization(newOrgData)
                    break;
                case 'group':
                    const newGroupData = groups.map((item) => {
                        return item.Id === id ? data : item
                    });
                    setGroups(newGroupData)
                    break
                case 'role':
                    const newRoleData = roles.map((item) => {
                        return item.Id === id ? data : item
                    });
                    setRoles(newRoleData)
                    break
                case 'user':
                    const newUserData = users.map((item) => {
                        return item.Id === id ? data : item
                    });
                    setUsers(newUserData)
                    break
                default:
                    break
            }
        } else {
            const newData = { ...data, Id: getNextId(dataType) }
            switch (dataType) {
                case 'org':
                    setOrganization([...organization, newData])
                    break;
                case 'group':
                    setGroups([...groups, newData])
                    break;
                case 'role':
                    setRoles([...roles, newData])
                    break;
                case 'user':
                    setUsers([...users, newData])
                    break
                default:
                    break
            }
        }
        setFormDisplay(false)
    }

    const createData = (dataType) =>{
        setFormType('create')
        setFormDisplay(true)
        switch (dataType) {
            case 'org':
                setEditElement({
                    "Id": "",
                    "organization": "",
                    "group": "",
                    "department": "",
                    "status": ""
                })
                break
            case 'group':
                setEditElement({
                    "Id": "",
                    "organization": "",
                    "group": "",
                    "status": ""
                })
            case 'role':
                setEditElement({
                    "Id": "",
                    "role": "",
                    "status": ""
                })
            case 'user':
                setEditElement({
                    "Id": "",
                    "organization": "",
                    "group": "",
                    "department": "",
                    "role": "",
                    "name": "",
                    "gender": "",
                    "profilePic": "",
                    "status": "",
                    "idCardNo": "",
                    "address": "",
                    "phone": "",
                    "email": ""
                })
        }
    }
    return (
        <div className='org-main'>
            <Sidebar display={display} />
            <div className='org-container-1'>
                <div className='org-container-2'>
                    <h2 style={{ margin: "0 0 10px 0" }}>Organization</h2>
                    <Table dataType='org' data={organization} editFunc={editData} deleteFunc={deleteData} />
                    <button className='create-data-btn' onClick={() => createData('org')} >Create</button>
                </div>
                <Form createData={createData} display={formDisplay} dataType='org' data={editElement} type={formType} saveData={saveData} />
                <div className='org-container-2'>
                    <h2 style={{ margin: "0 0 10px 0" }}>Groups</h2>
                    <Table dataType='group' data={groups} editFunc={editData} deleteFunc={deleteData} />
                    <button className='create-data-btn' onClick={() => createData('group')} >Create</button>
                </div>
                <Form createData={createData} display={formDisplay} dataType='group' data={editElement} type={formType} saveData={saveData} />
                <div className='org-container-2'>
                    <h2 style={{ margin: "0 0 10px 0" }}>Roles</h2>
                    <Table dataType='role' data={roles} editFunc={editData} deleteFunc={deleteData} />
                    <button className='create-data-btn' onClick={() => createData('role')} >Create</button>
                </div>
                <Form createData={createData} display={formDisplay} dataType='role' data={editElement} type={formType} saveData={saveData} />
                <div className='org-container-2'>
                    <h2 style={{ margin: "0 0 10px 0" }}>Users</h2>
                    <Table dataType='user' data={users} editFunc={editData} deleteFunc={deleteData} />
                    <button className='create-data-btn' onClick={() => createData('user')} >Create</button>
                </div>
                <Form createData={createData} display={formDisplay} dataType='user' data={editElement} type={formType} saveData={saveData} />
            </div>
        </div>
    )
}

export default Organization