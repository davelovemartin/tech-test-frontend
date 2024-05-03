import React, { useEffect, useState } from 'react';
import AcquiredSkillsFilter from '~/components/AcquiredSkillsFilter';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import SecondaryNavigation from '~/components/SecondaryNavigation';
import SkillList from '~/components/SkillList';
import SkillListItem from '~/components/SkillListItem';
import axios from 'axios';
import { z } from 'zod';
import { useLoaderData, useNavigation, useRevalidator, useSearchParams } from 'react-router-dom';
import type { Resource } from '~/components/Resources';
import { isSkillAcquired, sortSkillsByName } from '~/utility/functions';
import { API_ROUTES } from '~/resources/api-constants';

const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
  requiredForRoles: z.array(RoleSchema),
});

export type Skill = z.infer<typeof SkillSchema>;

export type SkillAcquired = Omit<Skill, 'requiredForRoles'>;

interface LoaderData {
  resource: Resource;
  skills: Skill[];
  resourceSkillsAcquired: SkillAcquired[];
}

const SkillsPage = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSkillLoading, setIsSkillLoading] = useState<Set<number>>(new Set());
  const [isSkillFailed, setIsSkillFailed] = useState<Set<number>>(new Set());
  const { resource, skills, resourceSkillsAcquired } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();
  const revalidator = useRevalidator();

  const filter = searchParams.get('filter');
  useEffect(() => {
    if (filter === 'true') {
      setIsFiltered(true);
    }
  }, [filter]);

  const isPageDataLoading = navigation.state === 'loading';

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFiltered(!!e.currentTarget.checked);
    setSearchParams({ filter: e.currentTarget.checked.toString() });
  };

  const sortedSkills = sortSkillsByName(skills);

  const setFailedStatus = (id: number, status: boolean) => {
    const newSet = new Set(isSkillFailed);
    if (status === true) newSet.add(id);
    if (status === false) newSet.delete(id);
    setIsSkillFailed(newSet);
  };

  const setLoadingStatus = (id: number, status: boolean) => {
    const newSet = new Set(isSkillLoading);
    if (status === true) newSet.add(id);
    if (status === false) newSet.delete(id);
    setIsSkillLoading(newSet);
  };

  const updateSkill = async (skill: Skill, mode: 'add' | 'remove') => {
    setLoadingStatus(skill.id, true);
    try {
      if (mode === 'add') {
        await axios.post(API_ROUTES.RESOURCES + `/${resource.id}/create-skill`, {
          id: skill.id,
        });
      } else {
        await axios.delete(API_ROUTES.RESOURCES + `/${resource.id}/skill/${skill.id}`);
      }
      await revalidator.revalidate();
      setFailedStatus(skill.id, false);
      setLoadingStatus(skill.id, false);
    } catch (error) {
      console.error(error);
      setLoadingStatus(skill.id, false);
      setFailedStatus(skill.id, true);
    }
  };

  return (
    <>
      <ResourceTitle isLoading={isPageDataLoading} resourceName={resource.name} />
      <ResourceContainer>
        <SecondaryNavigation />
        <AcquiredSkillsFilter isChecked={isFiltered} handleChange={handleFilterChange} />
        <SkillList>
          {sortedSkills.map((skill) => {
            const isAcquired = isSkillAcquired(skill.id, resourceSkillsAcquired);

            const handleSkillClick = (e: React.MouseEvent) => {
              e.preventDefault;
              isAcquired ? updateSkill(skill, 'remove') : updateSkill(skill, 'add');
            };

            if (!isFiltered || isAcquired)
              return (
                <SkillListItem
                  key={skill.id}
                  handleClick={handleSkillClick}
                  isAcquired={isAcquired}
                  isFailed={isSkillFailed.has(skill.id)}
                  isLoading={isSkillLoading.has(skill.id)}
                  skillName={skill.name}
                  rolesApplicableToSkill={skill.requiredForRoles.map((role) => role.name)}
                />
              );
          })}
        </SkillList>
      </ResourceContainer>
    </>
  );
};

export default SkillsPage;
