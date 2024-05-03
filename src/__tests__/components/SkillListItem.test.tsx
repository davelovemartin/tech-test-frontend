import React from 'react';
import { render } from '@testing-library/react';
import SkillListItem from '~/components/SkillListItem';

const props = {
  handleClick: () => {},
  skillName: 'JavaScript',
  rolesApplicableToSkill: ['Developer', 'Tester'],
  isFailed: false,
  isLoading: false,
};

test('SkillListItem sets aria-pressed based on isAcquired prop', () => {
  const { getByRole } = render(<SkillListItem {...props} isAcquired={true} />);
  const button = getByRole('button');
  expect(button).toHaveAttribute('aria-pressed', 'true');
});
