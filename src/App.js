import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, Exchange } from "./components/index"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Treepay UX</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exchange' element={<Exchange />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
