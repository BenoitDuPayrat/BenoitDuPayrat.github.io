import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Map from './Map';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="appPage">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/documents">Documents</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
