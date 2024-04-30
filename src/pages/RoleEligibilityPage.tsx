import React from 'react';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import SecondaryNavigation from '~/components/SecondaryNavigation';

const RoleEligibilityPage = () => {
  return (
    <>
      <ResourceTitle resourceName="dave lovemartin" />
      <ResourceContainer>
        <SecondaryNavigation />
        <div className="acquired-skills-filter">
          <p>role eligibility status</p>
        </div>
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
