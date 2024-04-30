import React from 'react';
import AcquiredSkillsFilter from '~/components/AcquiredSkillsFilter';
import ResourceContainer from '~/components/ResourceContainer';
import ResourceTitle from '~/components/ResourceTitle';
import SecondaryNavigation from '~/components/SecondaryNavigation';

const SkillsPage = () => {
  return (
    <>
      <ResourceTitle resourceName="dave lovemartin" />
      <ResourceContainer>
        <SecondaryNavigation />
        <AcquiredSkillsFilter handleChange={() => {}} />
        <ul>
          <li>
            <div>
              <div className="skill">
                <p>skill</p>
                <p>
                  Roles:{' '}
                  <ul>
                    <li>role</li>
                  </ul>
                </p>
              </div>
              <div className="skill-action">add</div>
            </div>
          </li>
        </ul>
      </ResourceContainer>
    </>
  );
};

export default SkillsPage;
