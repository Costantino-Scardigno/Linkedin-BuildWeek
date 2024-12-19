import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mynavbar from "./component/Mynavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./component/Home";
import MainContent from "./component/MainContent";
import Jobs from "./component/Jobs";
import { useState } from "react";

function App() {
  return (
    <>
      <Router>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<MainContent />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
