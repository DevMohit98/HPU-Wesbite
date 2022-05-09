import React from "react";
import ParticlesBackground from "./Component/ParticlesBackground";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./Component/Sign";
import Login from "./Component/Login";
import CompleteReg from "./Component/CompleteReg";
const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Router>
        <Routes>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/registeration/name=:name"
            element={<CompleteReg />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
