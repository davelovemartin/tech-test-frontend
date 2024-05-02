import React from 'react';
import ResourceAvatar from './ResourceAvatar';
import Skeleton from 'react-loading-skeleton';

const ResourceTitle = (props: { isLoading?: boolean; resourceName: string }) => {
  const { isLoading, resourceName } = props;
  return (
    <div className="resource-title">
      <ResourceAvatar isLoading={isLoading} resourceName={resourceName} />
      <h1>{isLoading ? <Skeleton /> : resourceName}</h1>
    </div>
  );
};

export default ResourceTitle;
