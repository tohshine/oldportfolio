import React, { Fragment, useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContent from '../../context/alert/alertContext';
import { Link } from 'react-router-dom';

import Alert from '../layout/Alert';

const Login = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContent);

  const { setAlert } = alertContext;
  const { login, error, clearError, loading, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated && !loading) {
      props.history.push('/admin');
    }

    if (Array.isArray(error) && error != null) {
      error.map(err => setAlert(err.msg, 'danger'));
      clearError();
    } else if (
      error === 'incorrect email or password' ||
      error === 'incorrect email or password' ||
      error === 'internal server error'
    ) {
      setAlert(error, 'danger');
      clearError();
    }
  }, [error, isAuthenticated, props.history]);

  const [loginForm, setLoginForm] = useState({
    email: '',
    pasword: ''
  });

  const { email, password } = loginForm;

  const onChange = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
    clearError();
  };

  const forgotPassword = () => {
    console.log('passwordforget');
  };
  return (
    <Fragment>
      <div className="form-container">
        <Alert />
      </div>
      <div className="form-container">
        <div className="card bg-light">
          <h3 className="text-center">
            Admin <span className="text-primary">Login</span>
          </h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={onChange} />
            </div>
            <input
              onSubmit={onSubmit}
              type="submit"
              value="Login"
              className="btn btn-block btn-primary"
            />
           <small>Forgot your password click</small> {' '}
            <Link to="/reset-password">here</Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
