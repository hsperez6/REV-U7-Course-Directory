import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// App Components
import Home from "./components/Home";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Featured from "./components/Featured";

//Courses Components
import CourseContainer from "./components/courses/HTML";

import { HTMLCourses, CSSCourses, JSCourses } from "./data/courses";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="teachers/:topic/:name" element={<Featured />} />
        <Route path="courses" element={<Courses />}>
          <Route index element={<Navigate replace to="html"/>} />
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route path="javascript" element={<CourseContainer data={JSCourses} />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
};

export default App;

//Added Comments just to test if Git commands work here.
