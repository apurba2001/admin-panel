

const Table = ({ data, editFunc, deleteFunc, dataType }) => {
    const header = []
    for (let hd in data[0]) {
        if (hd === 'Id') continue
        header.push(<th key={Date.now() + Math.random()}>{hd}</th>)
    }
    const tableData = data.map((item) => {
        let temp = []
        for (let element in item) {
            if (element === 'Id') continue
            temp.push(<td key={Date.now() + Math.random()}>{item[element]}</td>)
        }
        return (
            <tr key={item.Id}>
                {temp}
                <td>
                    <span>
                        <button className='table-button' onClick={() => editFunc(item.Id, dataType)} >Edit</button>
                    </span>
                    <span>
                        <button className='table-button' onClick={() => deleteFunc(item.Id, dataType)} >Delete</button>
                    </span>
                </td>
            </tr>
        )
    })
    return (
        <table className='table-data'>
            <thead>
                <tr>
                    {header}
                    <th>Edit or Delete</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
    )
}

export default Table
