import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ResourceListItem from '../../components/ResourceListItem';
import { axe } from 'vitest-axe';
import { MemoryRouter } from 'react-router-dom';

const { container, getByRole, getByText, debug } = render(
  <MemoryRouter>
    <ResourceListItem url="/skills" isCurrent resourceName="test" />
  </MemoryRouter>,
);

test('it renders as a list item element', () => {
  const listItem = getByRole('listitem');
  expect(listItem).toBeInTheDocument();
});

test('it displays the link text', () => {
  waitFor(() => {
    const text = getByText(/test/i);
    expect(text).toBeInTheDocument();
  });
});

test('it points to the expected URL using react-router-dom', () => {
  waitFor(() => {
    const text = getByText(/\/skills/);
    expect(text).toBeInTheDocument();
  });
});

test('it passes accessibility checks', async () => {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
