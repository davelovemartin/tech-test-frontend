import React from 'react';

const ResourceList = (props: { children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <ul role="list" className="resource-list">
      {props.children}
    </ul>
  );
};

export default ResourceList;
