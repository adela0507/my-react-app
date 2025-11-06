import './App.css';
import "./Header.js";
import  Home from "./Home.js";
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout.js";

function App() {
  return (
      <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
