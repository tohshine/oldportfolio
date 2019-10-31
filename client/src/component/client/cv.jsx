import React, { useContext ,useEffect} from 'react';
import ClientContext from '../../context/client/clientContext';
import CvItem from './cvItem';

const Cv = () => {
  const clientContext = useContext(ClientContext);
  const { cv,getCv } = clientContext;

  useEffect(()=>{
    getCv()
  },[])
 
  return (
    <div>
      {cv!==null&&(<CvItem  cv={cv} />)}
      
    </div>
  );
};

export default Cv;
