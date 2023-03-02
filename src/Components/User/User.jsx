import { useContext, useState } from 'react'

import Table from '../Table/Table'
import userData from '../../data/user.json'
import Sidebar from '../../Sidebar/Sidebar'
import { SideContext } from '../Contexts/Context'
import Form from '../Form/Form'

const User = () => {
    const display = useContext(SideContext)
    const [formDisplay, setFormDisplay] = useState(false)
    const [formType, setFormType] = useState('')
    const [editElement, setEditElement] = useState(0)

    const [newUsers, setNewUsers] = useState(userData)

    const editData = (id) => {
        setFormType('edit')
        setFormDisplay(true)
        const editElement = newUsers.find((element) => element.Id === id)
        setEditElement(editElement)
    }

    const deleteData = (id) => {
        const newUserData = newUsers.filter((item) => item.Id !== id)
        setNewUsers(newUserData)
    }


    const saveData = (type, id, data) => {
        if (type === 'edit') {
            const newData = newUsers.map((item) => {
                return item.Id === id ? data : item
            })
            setNewUsers(newData)
        } else {
            const newData = { ...data, Id: newUsers.length + 1 }
            setNewUsers([...newUsers, newData])
            setFormDisplay(false)
        }
    }

    return (
        <div className='user-container-1' style={{ display: 'flex' }}>
            <Sidebar display={display} />
            <div className='user-container-2' style={{ width: 'calc(100% - 250px)', margin: "20px" }}>
                <Table data={newUsers} editFunc={editData} deleteFunc={deleteData} />
                <button className='create-data-btn' onClick={() => saveData('edit')} >Create</button>
                <Form display={formDisplay} data={editElement} type={formType} saveData={saveData}/>
            </div>
        </div>
    )
}

export default User