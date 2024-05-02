import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AcquiredSkillsFilter from '~/components/AcquiredSkillsFilter';

test('renders correctly with label', () => {
  const { getByLabelText } = render(<AcquiredSkillsFilter isChecked={false} handleChange={() => {}} />);

  const label = getByLabelText(/Only show acquired skills/i);
  expect(label).toBeInTheDocument();
});

test('calls handleChange on checkbox change', () => {
  const mockHandleChange = jest.fn();
  const { getByRole } = render(<AcquiredSkillsFilter isChecked={false} handleChange={mockHandleChange} />);
  const checkbox = getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(mockHandleChange).toHaveBeenCalled();
});
