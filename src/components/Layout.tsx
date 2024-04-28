import React from 'react';
import Container from './Container';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <div id="main" role="main">
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
