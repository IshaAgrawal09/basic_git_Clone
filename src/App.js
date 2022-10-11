import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Github from "./Component/Github";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </div>
  );
}

export default App;
