import React from 'react';
import { render, waitFor } from '@testing-library/react';
import SecondaryNavigationListItem from '../../components/SecondaryNavigationListItem';
import { axe } from 'vitest-axe';
import { MemoryRouter } from 'react-router-dom';

const { container, getByRole, getByText } = render(
  <MemoryRouter>
    <SecondaryNavigationListItem url="/skills" isCurrent linkName="asdfghjkl" />
  </MemoryRouter>,
);

test('renders as a list item element', () => {
  const listItem = getByRole('listitem');
  expect(listItem).toBeInTheDocument();
});

test('displays the link text', async () => {
  waitFor(() => {
    const text = getByText(/asdfghjkl/i);
    expect(text).toBeInTheDocument();
  });
});

test('it points to the expected URL using react-router-dom', async () => {
  waitFor(() => {
    const text = getByText(/\/skills/);
    expect(text).toBeInTheDocument();
  });
});

test('it passes accessibility checks', async () => {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
