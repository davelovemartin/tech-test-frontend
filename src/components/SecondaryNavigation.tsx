import React from 'react';
import SecondaryNavigationList from './SecondaryNavigationList';
import SecondaryNavigationListItem from './SecondaryNavigationListItem';
import { useParams } from 'react-router-dom';
import { appendIdToUrl, isRouteActive } from '~/utility/functions';
import { ROUTES } from '~/resources/routes-constants';

const SecondaryNavigation = () => {
  const { resourceId } = useParams();
  if (!resourceId) return;

  const roleEligibilityRoute = appendIdToUrl(resourceId, ROUTES.ROLE_ELIGIBILITY_ROUTE);
  const skillsRoute = appendIdToUrl(resourceId, ROUTES.SKILLS_ROUTE);

  const isRoleEligibilityActive = isRouteActive(roleEligibilityRoute);
  const isSkillsActive = isRouteActive(skillsRoute);

  return (
    <nav aria-label="secondary">
      <SecondaryNavigationList>
        <SecondaryNavigationListItem isCurrent={isRoleEligibilityActive} url={roleEligibilityRoute} linkName="Role eligibility" />
        <SecondaryNavigationListItem isCurrent={isSkillsActive} url={skillsRoute} linkName="skills" />
      </SecondaryNavigationList>
    </nav>
  );
};

export default SecondaryNavigation;
