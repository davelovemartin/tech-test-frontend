import React from 'react';
import { redirectToHomePage } from '~/utility/functions';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '4em' }}>Oops 404!</h1>
      <span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
        Homepage
      </span>
    </div>
  );
};

export default NotFoundPage;
