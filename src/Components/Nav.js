import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navigation">
      <span>
        <Link to="/">DASHBOARD</Link>
      </span>
      <span>
        <a href="#">PROFILE</a>
      </span>
      <span>
        <Link to="/requestList">REQUEST LIST</Link>
      </span>
      <span>
        <a href="#">MESSAGES</a>
      </span>
    </nav>
  );
};

export default Nav;
