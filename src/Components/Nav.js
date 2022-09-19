import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navigation">
      <span>
        <NavLink className="link" to="/" activeClassName="active" end>
          DASHBOARD
        </NavLink>
      </span>
      <span>
        <a href="#" className="link">
          PROFILE
        </a>
      </span>
      <span>
        <NavLink to="/requestList" className="link" activeClassName="active">
          REQUEST LIST
        </NavLink>
      </span>
      <span>
        <a href="#" className="link">
          MESSAGES
        </a>
      </span>
    </nav>
  );
};

export default Nav;
