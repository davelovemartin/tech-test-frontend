import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import RoleEligibilityStatus from '~/components/RoleEligibilitySummary';
import RoleList from '~/components/RoleList';
import RoleListItem from '~/components/RoleListItem';
import SecondaryNavigation from '~/components/SecondaryNavigation';
import type { Resource } from '../components/Resources';
import { z } from 'zod';
import { countRequiredSkills, countRoleEligibility } from '~/utility/functions';

const SkillRequiredSchema = z.object({
  id: z.number(),
  name: z.string(),
  hasSkill: z.boolean(),
});

export type SkillRequired = z.infer<typeof SkillRequiredSchema>;

const RoleEligibilitySchema = z.object({
  id: z.number(),
  name: z.string(),
  skillsRequired: z.array(SkillRequiredSchema),
});

export type RoleEligibility = z.infer<typeof RoleEligibilitySchema>;

interface LoaderData {
  resource: Resource;
  roleEligibility: RoleEligibility[];
}

const RoleEligibilityPage = () => {
  const { resource, roleEligibility } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      <ResourceTitle isLoading={isLoading} resourceName={resource.name} />
      <ResourceContainer>
        <SecondaryNavigation />
        <RoleEligibilityStatus isLoading={isLoading} resourceName={resource.name} roleEligibilityCount={countRoleEligibility(roleEligibility)} />
        <RoleList>
          {roleEligibility.map((role) => {
            const totalRequiredSkillsCount = role.skillsRequired.length;
            const requiredSkillsCount = countRequiredSkills(role.skillsRequired);
            return (
              <RoleListItem
                key={role.id}
                isLoading={isLoading}
                requiredSkillsCount={requiredSkillsCount}
                roleName={role.name}
                totalRequiredSkillsCount={totalRequiredSkillsCount}
              />
            );
          })}
        </RoleList>
      </ResourceContainer>
    </>
  );
};

export default RoleEligibilityPage;
