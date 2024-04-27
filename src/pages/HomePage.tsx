import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <a href="/">VF Resourcing</a>
        <nav>
          <ul className="resourceList">
            <li className="resourceListItem">
              <a href="/skills">Resource</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>Welcome</h1>
        <p>Welcome to VF Resourcing. Select a resource to view role eligibility and skills for selected resources.</p>
      </div>
    </div>
  );
};

export default HomePage;
