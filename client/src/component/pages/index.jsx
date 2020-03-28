import React, { Fragment } from 'react';
import Navbar from '../../component/layout/navbar';
import About from '../pages/about';
import Project from './project';
import Contact from './contact';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Fragment>
      <Navbar />
      <About />
      <Project />
      <Contact />
    </Fragment>
  );
};

export default index;
