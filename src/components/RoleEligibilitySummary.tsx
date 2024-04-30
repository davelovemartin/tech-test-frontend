import React from 'react';

interface RoleEligibilitySummaryProps {
  resourceName: string;
  roleEligibilityCount: number;
}

const RoleEligibilitySummary = (props: RoleEligibilitySummaryProps) => {
  const { resourceName, roleEligibilityCount } = props;
  return (
    <div className="role-eligibility-summary">
      <p>{`${resourceName} is eligible for ${roleEligibilityCount} role${roleEligibilityCount !== 1 ? 's' : ''}`}</p>
    </div>
  );
};

export default RoleEligibilitySummary;
