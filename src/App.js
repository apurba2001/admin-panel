import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'

import './App.css';
import Navbar from './Navbar/Navbar';
import Router from './Routes';
import { SideContext } from './Components/Contexts/Context';
import { ThemeContext } from './Components/Contexts/Context';

function App() {
  const [sidebar, setSidebar] = useState(true)
  const [theme, setTheme] = useState(true)
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
      <Navbar setSidebar={setSidebar} setTheme={setTheme} />
        <SideContext.Provider value={sidebar}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SideContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
