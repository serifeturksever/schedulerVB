import React from 'react';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <div className='navbar-container'>
        <a className='nav-home-link' href='/'>Home</a>
        <a className='nav-script-link' href='/list'>All Scripts</a>
    </div>
  );
}

export default Navbar;