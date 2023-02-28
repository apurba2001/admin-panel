import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Router from './Routes';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
