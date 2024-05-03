import { useMatch, useNavigate } from 'react-router-dom';
import { ROUTES } from '../resources/routes-constants';
import type { RoleEligibility, SkillRequired } from '../pages/RoleEligibilityPage';
import type { Skill, SkillAcquired } from '../pages/SkillsPage';
import type { Resource } from '~/components/Resources';

export const appendIdToUrl = (resourceId: string, url: string) => {
  return url + `/${resourceId}`;
};

export const countRequiredSkills = (skills: SkillRequired[]) => {
  return skills.filter((skill) => skill.hasSkill).length;
};

export const countRoleEligibility = (roles: RoleEligibility[]) => {
  const roleArray = roles.map((role) => {
    const totalRequiredSkillsCount = role.skillsRequired.length;
    const requiredSkillsCount = countRequiredSkills(role.skillsRequired);
    return totalRequiredSkillsCount === requiredSkillsCount;
  });
  return roleArray.filter((role) => role).length;
};

export const sortSkillsByName = (skills: Skill[]) => {
  return skills.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};

export const isRouteActive = (route: string) => {
  const match = useMatch(route);
  return match?.pathname === route;
};

export const isSkillAcquired = (id: number, skillsAcquired: SkillAcquired[]) => {
  return !!skillsAcquired.find((item) => item.id === id);
};

export const redirectToHomePage = () => {
  const navigate = useNavigate();
  navigate(ROUTES.HOMEPAGE_ROUTE);
};

export const sortResources = (resources: Resource[]) => {
  return resources.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};
