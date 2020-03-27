import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <ul className="navbar bg-light">
      <h3 className="text-primary">
        {icon} {title}
      </h3>
      <ul>
        <li>
          <Link to="/about" className="text-dark">
            <span className="text-dark">About</span>
          </Link>
        </li>
      </ul>
    </ul>
  );
};

Navbar.defaultProps = {
  title: 'My profile CV',
  icon: <i className="far fa-file-alt"></i>
};

export default Navbar;
