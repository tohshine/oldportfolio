import React, { Fragment, useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alert from '../layout/Alert';

const Register = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { email, password, password2 } = form;
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearError, user } = authContext;

  useEffect(() => {
    if (Array.isArray(error) && error.length > 0) {
      error.map(err => setAlert(err.msg, 'danger'));
    } else if (
      error === 'server down : Try Again later' ||
      error === 'user already exist'
    ) {
      setAlert(error, 'danger');
    }
    clearError();
  }, [error, user]);

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      return setAlert('password does not match', 'danger');
    }
    register({ email, password });
  };

  return (
    <Fragment>
      <div className="form-container">
        <Alert />
      </div>
      <div className="form-container">
        <div className="card bg-light">
          <h3 className="text-center">
            Admin <span className="text-primary">Register</span>
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

            <div className="form-group">
              <label htmlFor="">Repeat password</label>
              <input type="password" name="password2" onChange={onChange} />
            </div>

            <input
              type="submit"
              value="Register"
              className="btn btn-block btn-primary"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
