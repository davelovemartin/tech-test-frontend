import React from 'react';

const ResourceContainer = (props: { children: React.ReactElement | React.ReactElement[] }) => <div className="resource-container">{props.children}</div>;

export default ResourceContainer;
