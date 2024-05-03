import React from 'react';
import { useNavigation } from 'react-router-dom';
import LoadingIndicator from '~/components/LoadingIndicator';

const HomePage = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <>
      {isLoading && <LoadingIndicator />}
      <h1>Welcome</h1>
      <p>Welcome to VF Resourcing. Select a resource to view role eligibility and skills for selected resources.</p>
    </>
  );
};

export default HomePage;
