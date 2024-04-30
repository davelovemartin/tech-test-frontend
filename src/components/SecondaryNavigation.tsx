import React from 'react';
import SecondaryNavigationList from './SecondaryNavigationList';
import SecondaryNavigationListItem from './SecondaryNavigationListItem';

const SecondaryNavigation = () => {
  return (
    <nav aria-label="secondary">
      <SecondaryNavigationList>
        <SecondaryNavigationListItem url="/role-eligibility" linkName="Role eligibility" />
        <SecondaryNavigationListItem isCurrent url="/skills" linkName="skills" />
      </SecondaryNavigationList>
    </nav>
  );
};

export default SecondaryNavigation;
