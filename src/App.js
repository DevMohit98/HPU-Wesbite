import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./Component/Sign";
import Login from "./Component/Login";
import CompleteReg from "./Component/CompleteReg";
import ParticlesBackground from "./Component/ParticlesBackground";
import DashBoard from "./Component/DashBoard";
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
          <Route path="/dashboard/name=:name" element={<DashBoard />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
