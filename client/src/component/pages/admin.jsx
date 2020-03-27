import React, { Fragment, useContext, useEffect } from 'react';
import CvForm from '../../component/admin/cvform';
import AuthContext from '../../context/auth/authContext';
import CvList from '../../component/admin/cv';
import ClientMessage from '../../component/admin/clientMessage';
import Navbar from '../admin/Navbar';
import Alert from '../layout/Alert';
import Spinner from '../../component/layout/spinner';

const Admin = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, isAuthenticated, loading } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="form-container">
        <Alert />
      </div>
      <div className="container">
        <div className="grid-2 ">
          <div>
            <CvForm />
          </div>
          <div>
            <div>
              <CvList />
            </div>

            <div>
              <ClientMessage />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
