import React from 'react';
import HomeLink from './HomeLink';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <HomeLink />
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
