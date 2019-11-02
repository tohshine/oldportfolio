import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githhubContext';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';

const GithubItem = ({ profile }) => {
  const githhubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const {
    sendMessage,
    messages,
    error,
    clearError,
    clearMessage
  } = githhubContext;

  useEffect(() => {
    if (error !== null && error.length !== 0) {
      error.map(err => setAlert(err.msg, 'danger'));
      clearError();
    }

    if (messages !== null) {
      setAlert(messages, 'success');
      clearMessage();
    }
  }, [messages, error]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const {
    login,
    company,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    hireable
  } = profile;

  const { name, email, message } = form;

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    sendMessage({ name, email, message });
    clearError();
    setForm({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    <Fragment>
      <Link to="/home" className="btn btn-light">
        <span>
          <i className="fas fa-backspace"></i>
        </span>{' '}
        <span>Goto Back</span>
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{profile.name}</h1>
          <p>Location: {location}</p>
        </div>

        <div>
          {bio ? (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          ) : (
            <Fragment>
              <h3>Bio</h3>
              <p>No biography for this user</p>
            </Fragment>
          )}

          <a href={html_url} className="btn btn-dark my-1">
            Visit Github page
          </a>

          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Login: </strong>
                  {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Blog: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="grid-2">
        <div>
          <div className="form-container">
            {/* //?alert notification */}
            <Alert />
            <form onSubmit={onSubmit} novalidate>
              <div className="card bg-light">
                <h3 className="text-center">
                  Message <span className="text-primary">ME</span>
                </h3>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    value={message}
                    onChange={onChange}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block "
                  value="Send"
                  onSubmit={onSubmit}
                />
              </div>
            </form>
          </div>
        </div>

        <div>
          <img src="siteImg/thanks.png" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default GithubItem;
