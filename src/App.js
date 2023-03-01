import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'

import './App.css';
import Navbar from './Navbar/Navbar';
import Router from './Routes';
import { SideContext } from './Components/Contexts/Context';


function App() {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div className="App">
        <Navbar setSidebar={setSidebar} />
      <SideContext.Provider value={sidebar}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SideContext.Provider>
    </div>
  );
}

export default App;
