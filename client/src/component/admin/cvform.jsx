import React, { useState, useContext, useEffect, Fragment } from 'react';
import AdminContext from '../../context/admin/adminContext';

const Cvform = () => {
  const adminContext = useContext(AdminContext);
  const { current, clearCurrent, upload, setUpdate, profileCv } = adminContext;

  useEffect(() => {
    if (current !== null) {
      setForm(current);
    } else {
      setForm({
        name: '',
        title: '',
        institution: '',
        phone: '',
        email: '',
        pSummary: '',
        workExp: '',
        pastAchieve: '',
        kSkillCom: '',
        techSkills: '',
        project: '',
        devTask: '',
        form: '',
        social: ''
      });
    }
  }, [current]);

  const [form, setForm] = useState({
    name: '',
    title: '',
    institution: '',
    phone: '',
    email: '',
    pSummary: '',
    workExp: '',
    pastAchieve: '',
    kSkillCom: '',
    techSkills: '',
    project: '',
    devTask: '',
    social: ''
  });

  const {
    name,
    title,
    institution,
    phone,
    email,
    pSummary,
    workExp,
    pastAchieve,
    kSkillCom,
    techSkills,
    project,
    devTask,
    social
  } = form;

  const onchange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current !== null) {
      setUpdate(form);
      clearCurrent();
    } else {
      upload(form);
      setForm({
        name: '',
        title: '',
        institution: '',
        phone: '',
        email: '',
        pSummary: '',
        workExp: '',
        pastAchieve: '',
        kSkillCom: '',
        techSkills: '',
        project: '',
        devTask: '',
        form: '',
        social: ''
      });
    }
  };

  return (
    <Fragment>
      <div className="card bg-light">
        <h1 className="text-center bg-primary">
          {current !== null ? 'Update your data' : 'Input your data & upload'}
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" value={name} name="name" onChange={onchange} />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" value={title} name="title" onChange={onchange} />
          </div>

          <div className="form-group">
            <label htmlFor="institution">Educational And Qualification</label>
            <textarea
              name="institution"
              cols="30"
              rows="5"
              onChange={onchange}
              value={institution}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" value={phone} name="phone" onChange={onchange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={onchange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pSummary">Personal Summary</label>
            <textarea
              name="pSummary"
              cols="30"
              rows="5"
              onChange={onchange}
              value={pSummary}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="workExp">Work Experience</label>
            <textarea
              name="workExp"
              cols="30"
              rows="5"
              onChange={onchange}
              value={workExp}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="pastAchieve">Past Archeivement</label>
            <textarea
              name="pastAchieve"
              cols="30"
              rows="5"
              onChange={onchange}
              value={pastAchieve}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="kSkillCom">Key Skills and Competence</label>
            <textarea
              name="kSkillCom"
              cols="30"
              rows="5"
              onChange={onchange}
              value={kSkillCom}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="techSkills">Technical skills</label>
            <textarea
              name="techSkills"
              cols="30"
              rows="5"
              onChange={onchange}
              value={techSkills}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="project">Projects List</label>
            <textarea
              name="project"
              cols="30"
              rows="5"
              onChange={onchange}
              value={project}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="devTask">Development tasks</label>
            <textarea
              name="devTask"
              cols="30"
              rows="5"
              onChange={onchange}
              value={devTask}
            ></textarea>
          </div>
          <strong className="text-center bg-primary">Social media</strong>
          <div className="form-group">
            <textarea
              name="social"
              cols="30"
              rows="5"
              onChange={onchange}
              value={social}
            ></textarea>
          </div>

          {current !== null ? (
            <input
              type="submit"
              value="Update"
              className=" btn btn-block btn-primary"
            />
          ) : (
            profileCv === null && (
              <input
                type="submit"
                value="Upload"
                className=" btn btn-block btn-primary"
              />
            )
          )}

          {current !== null && (
            <input
              type="submit"
              className="btn btn-block btn-danger"
              value="Clear"
              onClick={() => clearCurrent()}
            />
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default Cvform;
