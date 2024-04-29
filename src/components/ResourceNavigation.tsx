import React from 'react';
import ResourceListItem from './ResourceListItem';
import ResourceList from './ResourceList';

const ResourceNavigation = () => {
  return (
    <nav aria-label="resources">
      <ResourceList>
        <ResourceListItem url="/skills" resourceName="Resource" isCurrent />
        <ResourceListItem url="/skills" resourceName="Resource" />
        <ResourceListItem url="/skills" resourceName="Resource" />
        <ResourceListItem url="/skills" resourceName="Resource" />
      </ResourceList>
    </nav>
  );
};

export default ResourceNavigation;
