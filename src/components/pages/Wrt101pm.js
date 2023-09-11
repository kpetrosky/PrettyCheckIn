import React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

import Syllabus from './Wrt101pm/Syllabus';
import Classwork from './Wrt101pm/ClassWork';
import Homework from './Wrt101pm/Homework';
import DueDates from './Wrt101pm/DueDates';
import HelpfulLinks from './Wrt101pm/HelpfulLinks';

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <NavLink to="/wrt101pm/classwork" activeClassName="active">
            ClassWork
          </NavLink>
        </li>
        <li>
          <NavLink to="/wrt101pm/due-dates" activeClassName="active">
            Due Dates
          </NavLink>
        </li>
        <li>
          <NavLink to="/wrt101pm/homework" activeClassName="active">
            Homework
          </NavLink>
        </li>
        <li>
          <NavLink to="/wrt101pm/HelpfulLinks" activeClassName="active">
            Helpful Links
          </NavLink>
        </li>
        <li>
          <NavLink to="/wrt101pm/syllabus" activeClassName="active">
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

const Wrt101pm = () => {
  return (
    <div>
      <h1>Writing 101 PM TTH 6:30-7:52</h1>

      {/* Include the VerticalNavBar component */}
      <VerticalNavBar />

      {/* Nested routes for Wrt101pm pages */}
      <Routes>
        <Route path="/wrt101pm/syllabus" element={<Syllabus />} />
        <Route path="/wrt101pm/classwork" element={<Classwork />} />
        <Route path="/wrt101pm/homework" element={<Homework />} />
        <Route path="/wrt101pm/dueDates" element={<DueDates />} />
        <Route path="/wrt101pm/helpfulLinks" element={<HelpfulLinks />} />
      </Routes>

      <Outlet /> {/* This allows nested routes to be rendered */}
    </div>
  );
};

export default Wrt101pm;
