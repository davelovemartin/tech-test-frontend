import React from 'react';

const ResourceAvatar = (props: { resourceName: string }) => {
  return <div className="resource-avatar">{initialsFromString(props.resourceName)}</div>;
};

function initialsFromString(resourceName: string) {
  const initialArray = resourceName.split(' ').map((name) => name.charAt(0));
  return initialArray.join('');
}

export default ResourceAvatar;
