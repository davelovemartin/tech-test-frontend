import React from 'react';
import { Link } from 'react-router-dom';

interface ResourceListItemProps {
  isCurrent?: boolean;
  resourceName: string;
  url: string;
}

const ResourceListItem = (props: ResourceListItemProps) => {
  const { isCurrent, resourceName, url } = props;
  return (
    <li className="resource-list-item">
      <Link to={url} aria-current={isCurrent ? 'page' : 'false'}>
        {resourceName}
      </Link>
    </li>
  );
};

export default ResourceListItem;
