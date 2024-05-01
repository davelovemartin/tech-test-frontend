import type { SkillAcquired, RoleEligibility } from '../pages/RoleEligibilityPage';
import type { Skill } from '../pages/SkillsPage';

export const appendIdToUrl = (resourceId: string, url: string) => {
  return url + `/${resourceId}`;
};

export const countRequiredSkills = (skills: SkillAcquired[]) => {
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
