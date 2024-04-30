import React from 'react';

interface RoleEligibilityStatusProps {
  resourceName: string;
  roleEligibilityCount: number;
}

const RoleEligibilityStatus = (props: RoleEligibilityStatusProps) => {
  const { resourceName, roleEligibilityCount } = props;
  return (
    <div className="role-eligibility-status">
      <p>{`${resourceName} is eligible for ${roleEligibilityCount} role${roleEligibilityCount !== 1 ? 's' : ''}`}</p>
    </div>
  );
};

export default RoleEligibilityStatus;
