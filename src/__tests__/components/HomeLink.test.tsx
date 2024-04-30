import React from 'react';
import { render, waitFor } from '@testing-library/react';
import HomeLink from '../../components/HomeLink';
import { axe } from 'vitest-axe';
import { MemoryRouter } from 'react-router-dom';

test('it passes accessibility checks', async () => {
  const { container } = render(
    <MemoryRouter>
      <HomeLink />
    </MemoryRouter>,
  );

  waitFor(async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
