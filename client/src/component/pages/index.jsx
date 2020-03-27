import React, { Fragment } from 'react';
<<<<<<< HEAD
import Navbar from '../../component/layout/navbar';
import About from '../pages/about';
=======
import Navbar from '../client/Navbar';
>>>>>>> 2531b3f8f93238597ea9c9998fe5f4cfbd16b52d
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <Navbar />
      <About />
      <div className="container " id="project">
        <p className="bg-danger  ">
          <strong className="text-light p-1 ">Projects</strong>
        </p>
        <div className="grid-2">
          <div>
            <strong>
              Title: <span>Fastsearch</span>
            </strong>
            <br />
            <strong>
              Technology:{' '}
              <span>
                {' '}
                <span style={{ color: '#5E8B56' }}>
                  <i
                    className="fab fa-react"
                    style={{ fontSize: '25px', color: '#5E8B56' }}
                  ></i>
                  Node
                </span>
                |{' '}
                <span style={{ color: '#53B1CC' }}>
                  <i
                    className="fab fa-react"
                    style={{ fontSize: '25px', color: '#53B1CC' }}
                  ></i>
                  React
                </span>
                |
                <span style={{ color: '#764ABC' }}>
                  <img
                    style={{ width: '25px' }}
                    src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                    alt="my cv redux"
                  />
                  Redux
                </span>
              </span>
            </strong>
            <img src="./fastseaech.jpg" alt="" />
            <button
              type="submit"
              className="btn btn-sm bg-primary my-2"
              style={{ borderRadius: '10px' }}
              onClick={() => {
                window.open('https://fastsearch.herokuapp.com/');
              }}
            >
              <img src="./link.png" style={{ width: '15px' }} alt="" />
              Launch
            </button>
          </div>

          <div>
            <strong>
              Title: <span>Threadme</span>
            </strong>
            <br />
            <strong>
              Technology :{' '}
              <span>
                {' '}
                <span style={{ color: '#5E8B56' }}>
                  <i
                    className="fab fa-react"
                    style={{ fontSize: '25px', color: '#5E8B56' }}
                  ></i>
                  Node
                </span>
                | {' '} 
                <span style={{ color: '#53B1CC' }}>
                  <i
                    className="fab fa-react"
                    style={{ fontSize: '25px', color: '#53B1CC' }}
                  ></i>
                  React
                </span>

                |

                <span style={{ color: '#764ABC' }}>
                  <img
                    style={{ width: '25px' }}
                    src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                    alt="my cv redux"
                  />
                  Redux
                </span>
              </span>
            </strong>
            <img src="./threadme.jpg" alt="" />
            <button
              type="submit"
              className="btn btn-sm bg-primary my-2"
              style={{ borderRadius: '10px' }}
              onClick={() => {
                window.open('http://threadme.herokuapp.com/');
              }}
            >
              <img src="./link.png" style={{ width: '15px' }} alt="" />
              Launch
            </button>
=======
      <div className="vh">
        <Navbar />
        <div className="container all-center p-3 ">
          <div className="grid-2">
            <div>
              <h1>
                Brief introduction About myself and my working{' '}
                <span className="text-primary">Experience</span>{' '}
              </h1>
              <p className="my-2">
                Additional information will be provided upon request and i will
                be glad to hear back from you.
              </p>
              <div>
                <img
                  src="siteImg/whatapp.png"
                  style={{ width: '200px', height: '200px' }}
                  alt=""
                />
              </div>

              <Link to="/home">
                <a href="" className="btn btn-block btn-primary my-2">
                  Goto CV
                </a>
              </Link>
            </div>
            <div>
              <div className="cover">
                <img src="siteImg/resume.svg" alt="" />
              </div>
              <img
                className="big-circle"
                src="siteImg/big-eclipse.svg"
                alt=""
              />
              <img
                className="medium-circle"
                src="siteImg/mid-eclipse.svg"
                alt=""
              />
              <img
                className="small-circle"
                src="siteImg/small-eclipse.svg"
                alt=""
              />
            </div>
>>>>>>> 2531b3f8f93238597ea9c9998fe5f4cfbd16b52d
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
