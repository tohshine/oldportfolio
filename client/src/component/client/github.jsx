import React, { useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githhubContext';
import GithubItems from './githubItem';
import Spinner from '../layout/spinner';

const Github = () => {
  const githhubContext = useContext(GithubContext);
  const { profile, githubProfile } = githhubContext;

  useEffect(() => {
    githubProfile();
  }, []);
  if (profile === null) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <GithubItems profile={profile} />
    </div>
  );
};

export default Github;
