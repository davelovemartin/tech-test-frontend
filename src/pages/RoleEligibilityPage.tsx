import React from 'react';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import RoleEligibilityStatus from '~/components/RoleEligibilitySummary';
import RoleList from '~/components/RoleList';
import RoleListItem from '~/components/RoleListItem';
import SecondaryNavigation from '~/components/SecondaryNavigation';

const RoleEligibilityPage = () => {
  return (
    <>
      <ResourceTitle resourceName="dave lovemartin" />
      <ResourceContainer>
        <SecondaryNavigation />
        <RoleEligibilityStatus resourceName="Dave Lovemartin" roleEligibilityCount={2} />
        <RoleList>
          <RoleListItem requiredSkillsCount={3} roleName="Frontend Developer" totalRequiredSkillsCount={4} />
          <RoleListItem requiredSkillsCount={2} roleName="Backend Developer" totalRequiredSkillsCount={2} />
          <RoleListItem requiredSkillsCount={3} roleName="DevOps Engineer" totalRequiredSkillsCount={4} />
        </RoleList>
      </ResourceContainer>
    </>
  );
};

export default RoleEligibilityPage;
