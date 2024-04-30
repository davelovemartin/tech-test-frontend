import React from 'react';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import RoleEligibilityStatus from '~/components/RoleEligibilityStatus';
import SecondaryNavigation from '~/components/SecondaryNavigation';

const RoleEligibilityPage = () => {
  return (
    <>
      <ResourceTitle resourceName="dave lovemartin" />
      <ResourceContainer>
        <SecondaryNavigation />
        <RoleEligibilityStatus resourceName="Dave Lovemartin" roleEligibilityCount={2} />
        <ul>
          <li>
            <div className="role">
              <p>role</p>
              <p>x out of x required skills</p>
            </div>
          </li>
        </ul>
      </ResourceContainer>
    </>
  );
};

export default RoleEligibilityPage;
