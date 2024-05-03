import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface SkillListItemProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isAcquired: boolean;
  isFailed: boolean;
  isLoading: boolean;
  skillName: string;
  rolesApplicableToSkill: string[];
}

const SkillListItem = (props: SkillListItemProps) => {
  const { handleClick, isAcquired, isFailed, isLoading, rolesApplicableToSkill, skillName } = props;
  function getSkillListItemCallToAction() {
    if (isLoading) return <LoadingSpinner isPressed={isAcquired} isError={isFailed} />;
    if (isFailed) return 'Retry';
    return isAcquired ? 'Remove' : 'Add';
  }
  return (
    <li className={`skill-list-item${isFailed ? ' skill-list-item--error' : ''}`}>
      <button aria-pressed={isAcquired} onClick={handleClick}>
        <div>
          <p>{skillName}</p>
          <div>
            Roles :&nbsp;
            <ul role="list">
              {rolesApplicableToSkill.map((role: string) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>{getSkillListItemCallToAction()}</div>
      </button>
    </li>
  );
};

export default SkillListItem;
