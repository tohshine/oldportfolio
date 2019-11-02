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

          <pre style={text}>
            <i className="fas fa-mobile-alt"></i> {phone}
          </pre>

          <pre style={text}>
            <i className="fas fa-envelope"></i> {email}
          </pre>

          <h6 style={text}> skills--------------------------------------</h6>
          <pre style={text}>{techSkills}</pre>

          <h6 style={text}> social--------------------------------------</h6>
          <pre style={text}>{social}</pre>
        </div>
        <div>
          <h4 className="text-primary">Personal Summary</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{pSummary}</pre>
          </div>

          <h4 className="text-primary">Key Skill And Competence</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{kSkillCom}</pre>
          </div>

          <h4 className="text-primary">Technical Skills</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{techSkills}</pre>
          </div>

          <h4 className="text-primary">Projects</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{project}</pre>
          </div>

          <h4 className="text-primary">Development Task</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{devTask}</pre>
          </div>

          <h4 className="text-primary">Work And Experience</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{workExp}</pre>
          </div>

          <h4 className="text-primary">Educational And Qualification</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{institution}</pre>
          </div>

          <h4 className="text-primary">Past And Achievements</h4>
          <div className="card" style={{ background: 'white' }}>
            <pre>{pastAchieve}</pre>
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
