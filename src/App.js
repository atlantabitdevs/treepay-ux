import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, Exchange } from "./components/index"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exchange' element={<Exchange />} />
        </Routes>
    </div>
  );
}

export default App;
