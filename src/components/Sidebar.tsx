import React from 'react';
import HomeLink from './HomeLink';
import ResourceNavigation from './ResourceNavigation';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <HomeLink />
      <ResourceNavigation />
    </div>
  );
};

export default Sidebar;
