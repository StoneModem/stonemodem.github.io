import React from "react";
import logo from "./construction.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./components/react-dnd/Dnd";
import UnderConstruction from "./components/under-construction/UnderConstruction";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UnderConstruction logo={logo} />} />
          <Route path="/dev" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
