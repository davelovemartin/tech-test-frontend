import React from 'react';

const SkillsPage = () => {
  return (
    <>
      <h1>Resource Name</h1>
      <nav className="secondary-navigation">
        <ul>
          <li>
            <a href="/role-eligibility">Role eligibility</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
        </ul>
      </nav>
      <div className="skills">
        <div className="acquired-skills-filter">
          <input type="checkbox"></input>
          <label>Only show acquired skills</label>
        </div>
        <ul>
          <li>
            <div>
              <div className="skill">
                <p>skill</p>
                <p>
                  Roles:{' '}
                  <ul>
                    <li>role</li>
                  </ul>
                </p>
              </div>
              <div className="skill-action">add</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SkillsPage;
