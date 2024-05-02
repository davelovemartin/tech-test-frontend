import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ResourceAvatar = (props: { isLoading?: boolean; resourceName: string }) => {
  const { isLoading, resourceName } = props;
  return <div className="resource-avatar">{isLoading ? <Skeleton circle /> : initialsFromString(resourceName)}</div>;
};

function initialsFromString(resourceName: string) {
  const initialArray = resourceName.split(' ').map((name) => name.charAt(0));
  return initialArray.join('');
}

export default ResourceAvatar;
