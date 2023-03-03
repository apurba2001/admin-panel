

const Table = ({ data, editData, deleteData }) => {
    const tableHeader = []
    for (let hd in data[0]) {
        if (hd === 'Id') continue
        tableHeader.push(<th key={Date.now() + Math.random()}>{hd}</th>)
    }
    const tableBody = data?.map((item) => {
        let tableBody = []
        for (let element in item) {
            if (element === 'Id') continue
            tableBody.push(<td key={Date.now() + Math.random()}>{item[element]}</td>)
        }
        return (
            <tr key={item.Id}>
                {tableBody}
                <td>
                    <span>
                        <button className='table-button' onClick={() => editData(item.Id)}>Edit</button>
                    </span>
                    <span>
                        <button className='table-button' onClick={() => deleteData(item.Id)} >Delete</button>
                    </span>
                </td>
            </tr>
        )
    })
    return (
        <table className='table-data'>
            <thead>
                <tr>
                    {tableHeader}
                    <th>Edit or Delete</th>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    )
}

export default Table
