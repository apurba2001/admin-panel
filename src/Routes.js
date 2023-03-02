import { Route, Routes} from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Organization from './Components/Organization/Organization'
import User from './Components/User/User'

const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/organization' element={<Organization />} />
            <Route path='/user' element={<User />} />
        </Routes>
    )
}

export default Router