import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [mode, setMode] = useState('light');
  const [greenMode, GreensetMode] = useState('light');
  const [purplemode, PurplesetMode] = useState('light');

  const [functionName, setFunctionName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const MsgAlert = (name) => {
    setFunctionName(name);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const DarkMode = () => {
    let color = document.getElementsByTagName("body")[0];
    if (mode === 'light') {
      color.style.backgroundColor = '#002244';
      color.style.color = 'white';
      setMode('dark');
      MsgAlert("Dark mode is enabled now");
    } else {
      color.style.backgroundColor = 'white';
      color.style.color = '#002244';
      setMode('light');
      MsgAlert("Dark mode is disabled now");
    }
  };

  const GreenMode = () => {
    let color = document.getElementsByTagName("body")[0];
    if (greenMode === 'light') {
      color.style.backgroundColor = '#ADFF2F';
      color.style.color = 'white';
      GreensetMode('green');
      MsgAlert("Green mode is enabled now");
    } else {
      color.style.backgroundColor = 'white';
      color.style.color = '#002244';
      GreensetMode('light');
      MsgAlert("Green mode is disabled now");
    }
  };

  const PurpleMode = () => {
    let color = document.getElementsByTagName("body")[0];
    if (purplemode === 'light') {
      color.style.backgroundColor = '#800080';
      color.style.color = 'white';
      PurplesetMode('purple');
      MsgAlert("Purple mode is enabled now");
    } else {
      color.style.backgroundColor = 'white';
      color.style.color = '#002244';
      PurplesetMode('light');
      MsgAlert("Purple mode is disabled now");
    }
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
      DarkMode(); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode === 'light' && greenMode === 'light' && purplemode === 'light' ? 'light' : 'dark'}`}
        style={{
          color: mode === 'light' && greenMode === 'light' && purplemode === 'light' ? 'black' : 'white'
        }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">{props.able}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            {/* Dark Mode Switch */}
            <div className="form-check form-switch">
              <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchDark" onClick={DarkMode} />
              <label className="form-check-label" htmlFor="flexSwitchDark">{mode} mode</label>
            </div>
            {/* Green Mode Switch */}
            <div className="form-check form-switch">
              <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchGreen" onClick={GreenMode} />
              <label className="form-check-label" htmlFor="flexSwitchGreen">{greenMode} mode</label>
            </div>
            {/* Purple Mode Switch */}
            <div className="form-check form-switch">
              <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchPurple" onClick={PurpleMode} />
              <label className="form-check-label" htmlFor="flexSwitchPurple">{purplemode} mode</label>
            </div>
          </div>
        </div>
      </nav>

      {showAlert && (
        <div className="alert alert-success" role="alert">
          {functionName}
        </div>
      )}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  able: PropTypes.string.isRequired
};
