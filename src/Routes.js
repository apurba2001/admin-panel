import { Route, Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Organization from './Components/Organization/Organization'

const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/organization' element={<Organization />} />
        </Routes>
    )
}

export default Router