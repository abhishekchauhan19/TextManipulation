import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/form';
import Mainabout from './components/about';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>   
        <Navbar title="TextUtilites" able="enable" />   
        <div className="container my-3">
          {/* Removed Mainabout here, because it's now rendered by Routes */}
        </div>
        <div className="container">
          <Routes>
            <Route path="/about" element={<Mainabout />} />
            <Route path="/" element={<Textform heading="Enter the text to analyze below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
