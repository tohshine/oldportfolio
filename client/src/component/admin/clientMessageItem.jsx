import React from 'react';

const clientMessageItem = ({ messages }) => {
  const { name, email, message, date } = messages;

  return (
    <div className="card bg-light">
      <div>
        <span style={text}>
          <strong>Name:</strong> {name}
        </span>
      </div>

      <div>
        <span style={text}>
          <strong>Email:</strong> {email}
        </span>
      </div>

      <div>
        <span style={text}>
          <strong>Message:</strong> {message}
        </span>
      </div>
      <div>
        <strong>
          Time: <span className="text-danger">{date}</span>
        </strong>
      </div>
    </div>
  );
};
const text = {
  fontFamily: 'Open Sans',
  fontSize: '0.6rem',
  marginTop: '10px',
  marginLeft: '10px'
};
export default clientMessageItem;
