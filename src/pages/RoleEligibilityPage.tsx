import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import RoleEligibilityStatus from '~/components/RoleEligibilitySummary';
import RoleList from '~/components/RoleList';
import RoleListItem from '~/components/RoleListItem';
import SecondaryNavigation from '~/components/SecondaryNavigation';
import type { Resource } from '../components/Resources';
import { z } from 'zod';
import { countRequiredSkills, countRoleEligibility } from '~/utility/functions';

const SkillAcquiredSchema = z.object({
  id: z.number(),
  name: z.string(),
  hasSkill: z.boolean(),
});

export type SkillAcquired = z.infer<typeof SkillAcquiredSchema>;

const RoleEligibilitySchema = z.object({
  id: z.number(),
  name: z.string(),
  skillsRequired: z.array(SkillAcquiredSchema),
});

export type RoleEligibility = z.infer<typeof RoleEligibilitySchema>;

interface LoaderData {
  resource: Resource;
  roleEligibility: RoleEligibility[];
}

const RoleEligibilityPage = () => {
  const { resource, roleEligibility } = useLoaderData() as LoaderData;

  return (
    <>
      <ResourceTitle resourceName={resource.name} />
      <ResourceContainer>
        <SecondaryNavigation />
        <RoleEligibilityStatus resourceName={resource.name} roleEligibilityCount={countRoleEligibility(roleEligibility)} />
        <RoleList>
          {roleEligibility.map((role) => {
            const totalRequiredSkillsCount = role.skillsRequired.length;
            const requiredSkillsCount = countRequiredSkills(role.skillsRequired);
            return (
              <RoleListItem key={role.id} requiredSkillsCount={requiredSkillsCount} roleName={role.name} totalRequiredSkillsCount={totalRequiredSkillsCount} />
            );
          })}
        </RoleList>
      </ResourceContainer>
    </>
  );
};

export default RoleEligibilityPage;
