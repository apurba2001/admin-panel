import { useContext, useState } from 'react'

import Table from '../Table/Table'
import studentsData from '../../data/student.json'
import Sidebar from '../../Sidebar/Sidebar'
import { SideContext } from '../Contexts/Context'
import Form from '../Form/Form'

const User = () => {
    const display = useContext(SideContext)
    const [formDisplay, setFormDisplay] = useState(false)
    const [formType, setFormType] = useState('')
    const [editElement, setEditElement] = useState(0)

    const [students, setStudents] = useState(studentsData)

    const editData = (id) => {
        setFormType('edit')
        setFormDisplay(true)
        const editElement = students.find((element) => element.Id === id)
        setEditElement(editElement)
    }

    const deleteData = (id) => {
        const newUserData = students.filter((item) => item.Id !== id)
        setStudents(newUserData)
    }


    const saveData = (type, id, data) => {
        if (type === 'edit') {
            const newData = students.map((item) => {
                return item.Id === id ? data : item
            })
            setStudents(newData)
        } else {
            const newData = { ...data, Id: students.length + 1 }
            setStudents([...students, newData])
        }
        setFormDisplay(false)
    }

    return (
        <div className='user-container-1' style={{ display: 'flex' }}>
            <Sidebar display={display} />
            <div className='user-container-2' style={{ width: 'calc(100% - 250px)', margin: "20px" }}>
                <h2 style={{ margin: '10px 0' }}>Users</h2>
                <Table data={students} editFunc={editData} deleteFunc={deleteData} />
                <button className='create-data-btn' onClick={() => saveData('edit')} >Create</button>
                <Form display={formDisplay} data={editElement} type={formType} saveData={saveData} />
            </div>
        </div>
    )
}

export default User