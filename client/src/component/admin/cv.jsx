import React, { useContext, useEffect } from 'react';
import AdminContext from '../../context/admin/adminContext';
import CvPostItem from '../../component/admin/cvPostItem';

const Cv = () => {
  const adminContext = useContext(AdminContext);

  const { profileCv, getCV } = adminContext;

  useEffect(() => {
    getCV();
    
  }, []);

  if (profileCv === null) {
    return <h3>No Current Cv found : upload a CV</h3>;
  }

  return (
    <div>
      <strong>
        CV <span className="text-primary">Log</span>
      </strong>
      <CvPostItem cV={profileCv} />
    </div>
  );
};

export default Cv;
