import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Syllabus from './Wrt101/Syllabus';
import Classwork from './Wrt101/ClassWork';
import Homework from './Wrt101/Homework';
import DueDates from './Wrt101/DueDates';
import LinksToHelp from './Wrt101/LinksToHelp';

const Wrt101am = () => {
  return (
    <div>
      <h1>Writing 101 AM MW 8:15-9:35</h1>
      
      {/* Nested routes for Wrt101am pages */}
      <Routes>
        <Route path="syllabus" element={<Syllabus />} />
        <Route path="classwork" element={<Classwork />} />
        <Route path="homework" element={<Homework />} />
        <Route path="due-dates" element={<DueDates />} />
        <Route path="links-to-help" element={<LinksToHelp />} />
      </Routes>

      <Outlet /> {/* This allows nested routes to be rendered */}
    </div>
  );
};

export default Wrt101am;
