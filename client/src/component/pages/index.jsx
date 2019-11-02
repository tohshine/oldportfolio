import React, { Fragment } from 'react';
import Navbar from '../client/Navbar';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container all-center vh">
        <div className="grid-2">
          <div>
            <h1>
              Brief introduction About myself and my working{' '}
              <span className="text-primary">Experience</span>{' '}
            </h1>
            <p className="my-2">
               Additional information will be provided upon request and i
              will be glad to hear back from you.
            </p>
            <div>
              <img
                src="siteImg/whatapp.png"
                style={{ width: '200px', height: '200px' }}
                alt=""
              />
            </div>

            <Link to="/home" >
              <a href="" className="btn btn-block btn-primary my-2">
                Goto CV
              </a>
            </Link>
          </div>
          <div className=" card bg-light img-centered" >
            <img src="siteImg/onlinecv.png" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
