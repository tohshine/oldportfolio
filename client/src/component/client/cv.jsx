import React, { useContext, useEffect } from 'react';
import ClientContext from '../../context/client/clientContext';
import CvItem from './cvItem';
import Spinner from '../layout/spinner';

const Cv = () => {
  const clientContext = useContext(ClientContext);
  const { cv, getCv } = clientContext;

  useEffect(() => {
    getCv();
  }, []);

  if ((cv = null)) {
    return <Spinner />;
  }

  return <div>{cv !== null && <CvItem cv={cv} />}</div>;
};

export default Cv;
