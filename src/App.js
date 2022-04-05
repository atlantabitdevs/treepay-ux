import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, Exchange, Wallet } from "./components/index"
import {createTheme} from '@mui/material/styles';
import Demiurge from './components/Demiurge';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exchange' element={<Exchange />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/demiurge' element={<Demiurge />} />
        </Routes>
    </div>
  );
}

export default App;
