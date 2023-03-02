import { Route, Routes} from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Organization from './Components/Organization/Organization'
import User from './Components/User/User'
import Students from './Components/Students/Students'
import Settings from './Components/Settings/Settings'

const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/organization' element={<Organization />} />
            <Route path='/user' element={<User />} />
            <Route path='/student' element={<Students />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
    )
}

export default Router