import React from 'react';
import ResourceListItem from './ResourceListItem';
import ResourceList from './ResourceList';
import type { Resource } from './Resources';
import { ROUTES } from '~/resources/routes-constants';
import { appendIdToUrl } from '~/utility/functions';

const ResourceNavigation = (props: { resources: Resource[] }) => {
  const { resources } = props;

  return (
    <nav aria-label="resources">
      <ResourceList>
        {resources.map((resource) => (
          <ResourceListItem key={resource.id} url={appendIdToUrl(resource.id, ROUTES.ROLE_ELIGIBILITY_ROUTE)} resourceName={resource.name} isCurrent />
        ))}
      </ResourceList>
    </nav>
  );
};

export default ResourceNavigation;
