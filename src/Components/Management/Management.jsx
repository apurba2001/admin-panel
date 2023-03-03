import { useState } from 'react'

import Form from '../Form/Form'
import Table from '../Table/Table'
import fields from '../Fields/Fields'

const Management = ({ data, heading }) => {
    const [editElement, setEditElement] = useState({})
    const [stateData, setStateData] = useState(data)
    const [formDisplay, setFormDisplay] = useState(false)
    const [formType, setFormType] = useState('')

    const editData = (id) => {
        setFormType('edit')
        setFormDisplay(true)
        const editElement = stateData.find((element) => element.Id === id)
        setEditElement(editElement)
    }
    const deleteData = (id) => {
        const newData = stateData.filter((item) => item.Id !== id)
        setStateData(newData)
    }
    const createData = () => {
        setFormType('create')
        setFormDisplay(true)
        setEditElement(fields[heading])
    }
    const saveData = (data, type, id) => {
        console.log(data, type, id)
        if (type === 'create') {
            setStateData([...stateData, { ...data, Id: Date.now() }])
        } else if (type === 'edit') {
            const newData = stateData.map((preData) => preData.Id === id ? data : preData)
            setStateData(newData)
        }
    }

    return (
        <>
            <div className='org-container-2'>
                <h2 style={{ margin: "0 0 10px 0" }}>{heading}</h2>
                <Table data={stateData} editData={editData} deleteData={deleteData} />
                <button className='create-data-btn' onClick={() => createData()} >Create</button>
            </div>
            <Form display={formDisplay} setDisplay={setFormDisplay} data={editElement} formType={formType} saveData={saveData} />
        </>
    )
}

export default Management