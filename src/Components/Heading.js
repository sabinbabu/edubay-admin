import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
const Heading = () => {
  return (
    <div>
      <header className="header">
        <div className="logodiv">
          <img
            className="logo"
            src="http://122.248.199.144:3000/static/media/logo-black-outline.c1344e96.png"
            alt="logo"
          />
          <h4>Edubay</h4>
        </div>

        <div className="logout">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
          </svg>
        </div>
      </header>
      <div className="container">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Heading;
