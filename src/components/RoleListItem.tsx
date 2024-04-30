import React from 'react';

interface RoleListItemProps {
  roleName: string;
  requiredSkillsCount: number;
  totalRequiredSkillsCount: number;
}

const RoleListItem = (props: RoleListItemProps) => {
  const { requiredSkillsCount, roleName, totalRequiredSkillsCount } = props;

  const isComplete = requiredSkillsCount === totalRequiredSkillsCount;

  const roleEligibilityStatus = `${requiredSkillsCount} of ${totalRequiredSkillsCount} Required Skills`;

  return (
    <li className={`role-list-item ${isComplete && 'role-list-item--complete'}`}>
      <p>{roleName}</p>
      <p>{roleEligibilityStatus}</p>
    </li>
  );
};

export default RoleListItem;
