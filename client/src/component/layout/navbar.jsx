import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
const navbar = () => {
  const { Text } = Typography;
  return (
    <header>
      <nav className="navbar ">
        <span data-aos="zoom-out">
          <img
            src="https://res.cloudinary.com/dlecos9op/image/upload/c_scale,w_1400/v1585305697/IMG_20200326_125425_785_htjocx.jpg"
            style={{
              width: '50px',
              height: '50px',

              borderRadius: '50%'
            }}
            alt="sat stores logo "
          />
        </span>

        <ul className="m-2">
          <li>
            <a href="#contact">
              <Button style={style.btnRadius} type="ghost">
                <Text type="warning">contact</Text>
              </Button>
            </a>
          </li>
          <li>
            <a href="#project">
              <Button style={style.btnRadius} type="ghost">
                <Text type="danger">project</Text>
              </Button>
            </a>
          </li>
          <li>
            <a href="#about">
              <Button style={style.btnRadius} type="ghost">
                about
              </Button>
            </a>
          </li>
        </ul>
      </nav>

      <div
        className="container"
        style={{ paddingLeft: '30px', paddingRight: '30px' }}
      >
        <div className="grid-2">
          <div>
            <h1
              data-aos="fade-left"
              className="text-light large text-light all-center"
            >
              Hello, I'm <span className="text-danger">TOSIN OWOEYE</span>
            </h1>
            <p data-aos="fade-right" className="text-light lead all-center p-3">
              A Fullstack MERN developer
            </p>

            <Link
              data-aos="fade-out"
              to="/home"
              type="submit"
              className="btn btn-block btn-primary text-light text-center"
              style={{ borderRadius: '25px' }}
            >
              My Cv
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const style = {
  header: {
    fontFamily: 'Open Sans ,sans-serif'
  },
  btnRadius: {
    borderRadius: '20px',
    color: '#fff'
  }
};
export default navbar;
