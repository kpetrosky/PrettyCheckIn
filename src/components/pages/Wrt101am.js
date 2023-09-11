import React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

import Syllabus from './Wrt101am/Syllabus';
import Classwork from './Wrt101am/ClassWork';
import Homework from './Wrt101am/Homework';
import DueDates from './Wrt101am/DueDates';
import HelpfulLinks from './Wrt101am/HelpfulLinks';
import Home from './Home';

const VerticalNavBar = () => {
    return (
        <nav className="vertical-nav">
            <ul>
                <li>
                    <NavLink to="/wrt101am/home" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wrt101am/classwork" activeClassName="active">
                        ClassWork
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wrt101am/due-dates" activeClassName="active">
                        Due Dates
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wrt101am/homework" activeClassName="active">
                        Homework
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wrt101am/HelpfulLink" activeClassName="active">
                        Helpful Links
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wrt101am/syllabus" activeClassName="active">
                        Syllabus
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>

        </nav >
    );
};

const Wrt101am = () => {
    return (
        <div>
            <h1>Writing 101 AM MW 8:15-9:30</h1>

            {/* Include the VerticalNavBar component */}
            <VerticalNavBar />

            {/* Nested routes for Wrt101pm pages */}
            <Routes>
                <Route path="/wrt101am/home" element={<Home />} />
                <Route path="/wrt101am/syllabus" element={<Syllabus />} />
                <Route path="/wrt101am/classwork" element={<Classwork />} />
                <Route path="/wrt101am/homework" element={<Homework />} />
                <Route path="/wrt101am/due-dates" element={<DueDates />} />
                <Route path="/wrt101am/HelpfulLinks" element={<HelpfulLinks />} />
            </Routes>

            <Outlet /> {/* This allows nested routes to be rendered */}
        </div>
    );
};

export default Wrt101am;

