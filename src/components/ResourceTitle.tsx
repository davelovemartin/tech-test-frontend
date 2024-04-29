import React from 'react';
import ResourceAvatar from './ResourceAvatar';

const ResourceTitle = (props: { resourceName: string }) => {
  const { resourceName } = props;
  return (
    <div className="resource-title">
      <ResourceAvatar resourceName={resourceName} />
      <h1>{resourceName}</h1>
    </div>
  );
};

export default ResourceTitle;
