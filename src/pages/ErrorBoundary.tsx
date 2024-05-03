import React from 'react';
import { redirectToHomePage } from '~/utility/functions';

const ErrorBoundary = () => {
  return (
    <>
      <h1>Whoops!</h1>
      <p>There was an error.</p>
      <span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
        Homepage
      </span>
    </>
  );
};

export default ErrorBoundary;
