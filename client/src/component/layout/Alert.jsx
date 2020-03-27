import React, { useContext, Fragment } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    <Fragment>
      {alert.length > 0 &&
        alert.map(al => (
          <div key={al.id} className={`alert alert-${al.type}`}>
            <i className="fa fa-info-circle"></i> <small>{al.msg}</small>
          </div>
        ))}
    </Fragment>
  );
};

export default Alert;
