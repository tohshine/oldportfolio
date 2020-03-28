import React, { Fragment } from 'react';
import Navbar from '../../component/layout/navbar';
import About from '../pages/about';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Fragment>
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
                    className="fab fa-node"
                    style={{ fontSize: '25px', color: '#5E8B56' }}
                  ></i>
                  
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
                    className="fab fa-node"
                    style={{ fontSize: '25px', color: '#5E8B56' }}
                  ></i>
                 
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
