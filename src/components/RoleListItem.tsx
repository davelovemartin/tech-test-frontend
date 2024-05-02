import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface RoleListItemProps {
  isLoading?: boolean;
  roleName: string;
  requiredSkillsCount: number;
  totalRequiredSkillsCount: number;
}

const RoleListItem = (props: RoleListItemProps) => {
  const { isLoading, requiredSkillsCount, roleName, totalRequiredSkillsCount } = props;

  const isComplete = requiredSkillsCount === totalRequiredSkillsCount;

  const roleEligibilityStatus = `${requiredSkillsCount} of ${totalRequiredSkillsCount} Required Skills`;

  return (
    <li className={`role-list-item ${isComplete && 'role-list-item--complete'}`}>
      <p>{isLoading ? <Skeleton /> : roleName}</p>
      <p>{isLoading ? <Skeleton /> : roleEligibilityStatus}</p>
    </li>
  );
};

export default RoleListItem;
