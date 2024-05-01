import React from 'react';
import HomeLink from './HomeLink';
import Resources from './Resources';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <HomeLink />
      <Resources />
    </div>
  );
};

export default Sidebar;
