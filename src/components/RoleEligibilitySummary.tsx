import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface RoleEligibilitySummaryProps {
  isLoading?: boolean;
  resourceName: string;
  roleEligibilityCount: number;
}

const RoleEligibilitySummary = (props: RoleEligibilitySummaryProps) => {
  const { isLoading, resourceName, roleEligibilityCount } = props;
  const roleEligibilitySummaryString = `${resourceName} is eligible for ${roleEligibilityCount} role${roleEligibilityCount !== 1 ? 's' : ''}`;
  return (
    <div className="role-eligibility-summary">
      <p>{isLoading ? <Skeleton /> : roleEligibilitySummaryString}</p>
    </div>
  );
};

export default RoleEligibilitySummary;
