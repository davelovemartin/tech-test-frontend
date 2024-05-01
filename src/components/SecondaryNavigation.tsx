import React from 'react';
import SecondaryNavigationList from './SecondaryNavigationList';
import SecondaryNavigationListItem from './SecondaryNavigationListItem';
import { useParams } from 'react-router-dom';
import { appendIdToUrl } from '~/utility/functions';
import { ROUTES } from '~/resources/routes-constants';

const SecondaryNavigation = () => {
  const { resourceId } = useParams();
  if (!resourceId) return;
  return (
    <nav aria-label="secondary">
      <SecondaryNavigationList>
        <SecondaryNavigationListItem url={appendIdToUrl(resourceId, ROUTES.ROLE_ELIGIBILITY_ROUTE)} linkName="Role eligibility" />
        <SecondaryNavigationListItem isCurrent url={appendIdToUrl(resourceId, ROUTES.SKILLS_ROUTE)} linkName="skills" />
      </SecondaryNavigationList>
    </nav>
  );
};

export default SecondaryNavigation;
