import React from 'react';
import './App.css';
import logo from './assets/images/blue-logo.png';
import { Link } from 'react-router-dom';


function Dining() {
  return (
    <div className="App">
      <div className="banner">
        <div className="navbar">
          <img src={logo} alt="Blue logo" className="logo"/>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/bedroom">Bedroom</Link></li>
            <li><Link to="/dining">Dining</Link></li>
            <li><Link to="/kitchen">Kitchen</Link></li>
            <li><Link to="/backyard">Backyard</Link></li>
          </ul>
        </div>

        <div className="content">
          <h1>DESIGN YOUR HOUSE</h1>
          <p>Subscribe Easy Tutorials YouTub Channel to watch more videos, <br/>press the bell icon to get latest updates.</p>
          <div>
            <button type="button"><span></span>WATCH MORE</button>
            <button type="button"><span></span>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Dining;
