import React, { useContext, useState, useEffect, Fragment } from 'react';
import Alert from '../layout/Alert';
import AuthContenxt from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import { Redirect } from 'react-router-dom';

const ChangePassword = props => {
  const authContext = useContext(AuthContenxt);
  const alertContext = useContext(AlertContext);

  const {
    PasswordresetMessage,
    resetPassword,
    error,
    clearError,
    newPassword,
    resetToken,
    isValidToken,
    validateResetToken
  } = authContext;

  useEffect(() => {
    validateResetToken(props.match.params.token);
    if (Array.isArray(error)) {
      error.map(err => alertContext.setAlert(err.msg, 'danger'));
    } else if (error === 'reset time expired: Try Again') {
      alertContext.setAlert(error, 'danger');
    }

    if (PasswordresetMessage !== null) {
      alertContext.setAlert(PasswordresetMessage, 'success');
    }
    clearError();
  }, [error, PasswordresetMessage]);

  const [newInputPassword, setNewPassword] = useState({
    password: '',
    password2: ''
  });
  const { password2, password } = newInputPassword;

  const onChange = e => {
    e.preventDefault();
    setNewPassword({
      ...newInputPassword,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2)
      alertContext.setAlert('password does not match', 'danger');
    if (resetToken != null) {
      newPassword({ password: password, token: resetToken });
    }

    setNewPassword({
      password: '',
      password2: ''
    });
  };

  return (
    <Fragment>
      {isValidToken && (
        <div className="form-container">
          <Alert />
          <div className="card bg-light">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="">Password:</label>
                <input
                  className="my-2"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={password}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Repeat password:</label>
                <input
                  className="my-2"
                  type="password"
                  name="password2"
                  onChange={onChange}
                  value={password2}
                />
              </div>
              <input
                type="submit"
                className="btn btn-block btn-primary my-2"
                value="Reset password"
              />
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ChangePassword;
