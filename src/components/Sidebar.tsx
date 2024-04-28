import React from 'react';

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
