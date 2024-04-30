import React from 'react';
import { render } from '@testing-library/react';
import RoleEligibilitySummary from '../../components/RoleEligibilitySummary';

test('displays the resource name and role if there is one eligible role', () => {
  const { getByText } = render(<RoleEligibilitySummary resourceName="Alex Brown" roleEligibilityCount={1} />);
  expect(getByText('Alex Brown is eligible for 1 role')).toBeInTheDocument();
});

test('displays the resource name and roles if there is zero eligible role', () => {
  const { getByText } = render(<RoleEligibilitySummary resourceName="Alex Brown" roleEligibilityCount={0} />);
  expect(getByText('Alex Brown is eligible for 0 roles')).toBeInTheDocument();
});
