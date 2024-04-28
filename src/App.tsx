import React from 'react';
import RootComponent from './RootComponent';
import Container from './components/Container';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <RootComponent />
    </Container>
  );
};

export default App;
