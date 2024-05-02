import React, { useEffect, useState } from 'react';
import AcquiredSkillsFilter from '~/components/AcquiredSkillsFilter';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import SecondaryNavigation from '~/components/SecondaryNavigation';
import SkillList from '~/components/SkillList';
import SkillListItem from '~/components/SkillListItem';
import { z } from 'zod';
import { useLoaderData, useNavigation, useSearchParams } from 'react-router-dom';
import type { Resource } from '~/components/Resources';
import { sortSkillsByName } from '~/utility/functions';

const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
});

// type Role = z.infer<typeof RoleSchema>;

const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
  requiredForRoles: z.array(RoleSchema),
});

export type Skill = z.infer<typeof SkillSchema>;

interface LoaderData {
  resource: Resource;
  skills: Skill[];
}

const SkillsPage = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const { resource, skills } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('filter');
  useEffect(() => {
    if (filter === 'true') {
      setIsFiltered(true);
    }
  }, [filter]);

  const isLoading = navigation.state === 'loading';

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFiltered(!!e.currentTarget.checked);
    setSearchParams({ filter: e.currentTarget.checked.toString() });
  };

  const sortedSkills = sortSkillsByName(skills);
  return (
    <>
      <ResourceTitle isLoading={isLoading} resourceName={resource.name} />
      <ResourceContainer>
        <SecondaryNavigation />
        <AcquiredSkillsFilter isChecked={isFiltered} handleChange={handleFilterChange} />
        <SkillList>
          {sortedSkills.map((skill) => {
            return (
              <SkillListItem
                key={skill.id}
                isAcquired={isFiltered}
                isFailed={false}
                isLoading={false}
                skillName={skill.name}
                rolesApplicableToSkill={skill.requiredForRoles.map((role) => role.name)}
              />
            );
          })}
        </SkillList>
        {/* <hr />
        <SkillList>
          <SkillListItem isAcquired={false} isFailed={false} isLoading={false} skillName="React" rolesApplicableToSkill={['Frontend']} />
          <SkillListItem isAcquired={false} isFailed={false} isLoading={true} skillName="Preact" rolesApplicableToSkill={['Frontend']} />
          <SkillListItem isAcquired={true} isFailed={false} isLoading={false} skillName="Python" rolesApplicableToSkill={['Backend']} />
          <SkillListItem isAcquired={true} isFailed={false} isLoading={true} skillName="Git" rolesApplicableToSkill={['Backend', 'Frontend']} />
          <SkillListItem isAcquired={false} isFailed={true} isLoading={false} skillName="Docker" rolesApplicableToSkill={['DevOps']} />
        </SkillList> */}
      </ResourceContainer>
    </>
  );
};

export default SkillsPage;
