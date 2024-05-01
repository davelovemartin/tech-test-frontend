import React from 'react';
import AcquiredSkillsFilter from '~/components/AcquiredSkillsFilter';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import SecondaryNavigation from '~/components/SecondaryNavigation';
import SkillList from '~/components/SkillList';
import SkillListItem from '~/components/SkillListItem';

const SkillsPage = () => {
  return (
    <>
      <ResourceTitle resourceName="dave lovemartin" />
      <ResourceContainer>
        <SecondaryNavigation />
        <AcquiredSkillsFilter handleChange={() => {}} />
        <SkillList>
          <SkillListItem isAcquired={false} isFailed={false} isLoading={false} skillName="React" rolesApplicableToSkill={['Frontend']} />
          <SkillListItem isAcquired={false} isFailed={false} isLoading={true} skillName="Preact" rolesApplicableToSkill={['Frontend']} />
          <SkillListItem isAcquired={true} isFailed={false} isLoading={false} skillName="Python" rolesApplicableToSkill={['Backend']} />
          <SkillListItem isAcquired={true} isFailed={false} isLoading={true} skillName="Git" rolesApplicableToSkill={['Backend', 'Frontend']} />
          <SkillListItem isAcquired={false} isFailed={true} isLoading={false} skillName="Docker" rolesApplicableToSkill={['DevOps']} />
        </SkillList>
      </ResourceContainer>
    </>
  );
};

export default SkillsPage;
