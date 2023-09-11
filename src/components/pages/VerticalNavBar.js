import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNavBar.css'; // Import your CSS file for styling

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
      <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Wrt101am" activeClassName="active">
            Writing 101 Am
          </NavLink>
        </li>
        <li>
          <NavLink to="/homework" activeClassName="active">
            Homework
          </NavLink>
        </li>
        <li>
          <NavLink to="/syllabus" activeClassName="active">
            Syllabus
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
