import React from 'react';
import { render } from '@testing-library/react';
import ResourceAvatar from '../../components/ResourceAvatar';

test('displays initials of the resource name', () => {
  const { getByText } = render(<ResourceAvatar resourceName="alex brown" />);
  expect(getByText('ab')).toBeInTheDocument();
});
