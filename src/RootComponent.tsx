import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RoleEligibilityPage from './pages/RoleEligibilityPage';
import SkillsPage from './pages/SkillsPage';
import { ROUTES } from './resources/routes-constants';
import './styles/main.scss';

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path={ROUTES.ROLE_ELIGIBILITY_ROUTE} element={<RoleEligibilityPage />} />
        <Route path={ROUTES.SKILLS_ROUTE} element={<SkillsPage />} />
      </Routes>
    </Router>
  );
};

export default RootComponent;
