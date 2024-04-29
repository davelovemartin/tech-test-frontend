import React from 'react';
import { render } from '@testing-library/react';
import Container from '../../components/Container';

test('it renders children', () => {
  const myTextString = 'asdf';
  const { getByText } = render(
    <Container>
      <p>{myTextString}</p>
    </Container>,
  );
  expect(getByText(myTextString)).toBeInTheDocument();
});
