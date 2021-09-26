import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div id="header">
      <div className="col">
      <img src={logo} alt="" id="logo"/>
      <h1>Music World</h1>
      </div>
      <div className="col budget_section">
        <p id="header_info">Our Music Concert</p>
        <p id="total_budget">Total Budget: 10 Million</p>
      </div>

    </div>
  );
};

export default Header;