import React from 'react';

const RoleEligibilityPage = () => {
  return (
    <div id="main" role="main">
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
      <div className="role-eligibility">
        <div className="acquired-skills-filter">
          <p>role eligibility status</p>
        </div>
        <ul>
          <li>
            <div className="role">
              <p>role</p>
              <p>x out of x required skills</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoleEligibilityPage;
