import React, { useContext } from 'react';
import AdminContext from '../../context/admin/adminContext';

const CvPostItem = ({ cV }) => {
  const adminContext = useContext(AdminContext);

  const { setCurrent } = adminContext;

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
  } = cV;

  return (
    <div className="card bg-light">
      <div className="grid-2-3">
        <div className="bg-primary ">
          <div className="text-center">
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/18355585?v=4"
                alt=""
                className="round-img"
                style={{ width: '100px', height: '100px', marginTop: '10px' }}
              />
            </div>

            <h4 style={style}>{name}</h4>
            <h6 style={style}>{title}</h6>
          </div>
          {/*  contacts */}

          <p style={text}>
            <i className="fas fa-mobile-alt"></i> {phone}
          </p>

          <p style={text}>
            <i className="fas fa-envelope"></i> {email}
          </p>

          <h6 style={text}> skills--------------------------------------</h6>
          <p style={text}>{techSkills}</p>

          <h6 style={text}> social--------------------------------------</h6>
          <p style={text}>{social}</p>
        </div>
        <div>
          <h4 className="text-primary">Personal Summary</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{pSummary}</p>
          </div>

          <h4 className="text-primary">Key Skill And Competence</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{kSkillCom}</p>
          </div>

          <h4 className="text-primary">Technical Skills</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{techSkills}</p>
          </div>

          <h4 className="text-primary">Projects</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{project}</p>
          </div>

          <h4 className="text-primary">Development Task</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{devTask}</p>
          </div>

          <h4 className="text-primary">Work And Experience</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{workExp}</p>
          </div>

          <h4 className="text-primary">Educational And Qualification</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{institution}</p>
          </div>

          <h4 className="text-primary">Past And Achievements</h4>
          <div className="card" style={{ background: 'white' }}>
            <p>{pastAchieve}</p>
          </div>

          <input
            type="submit"
            value="Edit"
            className="btn btn-block btn-primary"
            onClick={() => setCurrent(cV)}
          />
        </div>
      </div>
    </div>
  );
};

const style = {
  fontFamily: 'Open Sans'
};

const text = {
  fontFamily: 'Open Sans',
  fontSize: '0.6rem',
  marginTop: '10px',
  marginLeft: '10px'
};

export default CvPostItem;
