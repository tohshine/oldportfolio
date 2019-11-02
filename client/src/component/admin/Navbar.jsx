import React, { useContext, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { user, isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  return (
    <ul className="navbar bg-light">
      <h3 className="text-primary">
        {icon} {title}
      </h3>
      <ul>
        {isAuthenticated && (
          <Fragment>
            <li>Hello {user && user.email}</li>
            <li>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt text-primary" />{' '}
                <span className="hide-sm text-primary">Logout</span>
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    </ul>
  );
};

Navbar.defaultProps = {
  title: 'My profile CV',
   icon: <i className="far fa-file-alt"></i>,
  props: 'props'
};

export default Navbar;
