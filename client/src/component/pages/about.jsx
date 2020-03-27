import React from 'react';

const about = () => {
  return (
    <div className="container " id="about">
      <div className="my-2">
        <p className="bg-danger  ">
          <strong className="text-light p-1 ">About Me</strong>
        </p>
        <div className=" card grid-2">
          <div className="all-center">
            <strong>
              {' '}
              My name is <span className="text-danger">Tosin Owoeye</span>, also
              called Tohshine. I’m a Software Engineer and love making things
              that might possibly work using JavaScript.
            </strong>{' '}
            <strong className="my-2">
              I love working with the developer communities to build an
              ecosystem. which make me an{' '}
              <span className="text-danger">ingressive</span> ambassador for my
              institution.
            </strong>
          </div>
          <div className="">
            <img
              style={{ borderRadius: '10px' }}
              src="twitter.jpg"
              alt="mycv picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default about;
