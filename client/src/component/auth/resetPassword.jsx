import React, { useContext, useEffect, useState, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';


const ResetPassword = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const {
    PasswordresetMessage,
    resetPassword,
    error,
    clearError,
    isValidToken
  } = authContext;

  useEffect(() => {
    if (error === 'error reset your password') {
      alertContext.setAlert(error, 'danger');
    } else if (error === 'The email entered does not match any credentials!') {
      alertContext.setAlert(error, 'danger');
    } else if (PasswordresetMessage !== null) {
      alertContext.setAlert(PasswordresetMessage, 'success');
    }

    clearError();
  }, [error, PasswordresetMessage]);

  const [email, setEmail] = useState('');

  const onChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    resetPassword({ email: email });
   setEmail('')
  };

  return (
    <div className="form-container">
      <Alert />

      <div className="card bg-light">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Enter your valid email:</label>
            <input
              className="my-2"
              type="text"
              name="email"
              onChange={onChange}
              value={email}
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
  );
};

export default ResetPassword;
