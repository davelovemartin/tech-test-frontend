import React from 'react';
import ResourceListItem from './ResourceListItem';
import ResourceList from './ResourceList';
import type { Resource } from './Resources';
import { ROUTES } from '~/resources/routes-constants';
import { appendIdToUrl } from '~/utility/functions';
import { useParams } from 'react-router-dom';

const ResourceNavigation = (props: { resources: Resource[] }) => {
  const { resources } = props;
  const { resourceId } = useParams();

  return (
    <nav aria-label="resources">
      <ResourceList>
        {resources.map((resource) => {
          const isCurrent = resourceId === resource.id;
          return (
            <ResourceListItem
              key={resource.id}
              isCurrent={isCurrent}
              url={appendIdToUrl(resource.id, ROUTES.ROLE_ELIGIBILITY_ROUTE)}
              resourceName={resource.name}
            />
          );
        })}
      </ResourceList>
    </nav>
  );
};

export default ResourceNavigation;
