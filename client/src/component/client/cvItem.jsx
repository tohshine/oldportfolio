import React from 'react';
import { Link } from 'react-router-dom';

const cvItem = ({ cv }) => {
  const {
    name,
    title,
    institution,
    phone,
    email,
    social,
    pSummary,
    kSkillCom,
    techSkills,
    project,
    devTask,
    workExp,
    pastAchieve
  } = cv;

  return (
    <div className="container">
      <div className="card bg-light">
        <div className="grid-2-3">
          <div className="bg-primary">
            <div className="text-center">
              <img
                src="https://avatars0.githubusercontent.com/u/18355585?v=4"
                alt=""
                style={{ width: '100px', height: '100px', marginTop: '10px' }}
                className="round-img"
              />
              <h1>{name}</h1>
              <strong>{title}</strong>
            </div>
            {/*  personal details  */}
            <div>
            <small style={textStyle}>
              <i className="fas fa-mobile-alt"></i> {phone}
            </small>
            </div>
            
            <small style={textStyle}>
              <i className="fas fa-envelope"></i> {email}
            </small>
            <span className="hr" />
              
           <div> <strong style={text}>Skills</strong></div>
            <p style={textStyle}>{techSkills}</p>
            <span className="hr" />
             
            <div><strong style={text}>Social</strong></div>
            <p style={textStyle}>{social}</p>
            <span className="hr" />

            <Link to="/profile" className="btn btn-danger my-2" style={textStyle}>
              <span>
                <i className="fab fa-github"></i>
              </span>{' '}
              <span>Github profile</span>
            </Link>
          </div>
          <div>
            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Personal Summary
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{pSummary}</small>
            </div>

            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Key Skill And Competence
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{kSkillCom}</small>
            </div>

            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Technical Skills
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{techSkills}</small>
            </div>

            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Projects
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{project}</small>
            </div>

            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Development Task
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{devTask}</small>
            </div>

            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Work Experience
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{workExp}</small>
            </div>

            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Educational And Qualifications
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{institution}</small>
            </div>

            <h3 className="text-primary" style={{ textAlign: 'left' }}>
              Past Achievements
            </h3>
            <div className="card " style={{ background: 'white' }}>
              <small>{pastAchieve}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const text = {
  marginLeft: '10px',
  marginTop: '10px'
};
const style = {
  backgroundColor: 'red'
};

const textStyle = {
  marginLeft: '10px',
  marginTop: '10px',
  fontSize: '0.8em',
  color: 'white',
  textAllign:'center'
};

export default cvItem;
