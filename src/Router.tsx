import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RoleEligibilityPage from './pages/RoleEligibilityPage';
import SkillsPage from './pages/SkillsPage';
import { ROUTES } from './resources/routes-constants';
import './styles/main.scss';
import Layout from './components/Layout';
import { resourceLoader, skillsLoader } from './utility/loaders';

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: ROUTES.HOMEPAGE_ROUTE,
          element: <HomePage />,
        },
        {
          path: ROUTES.ROLE_ELIGIBILITY_ROUTE_DYNAMIC,
          element: <RoleEligibilityPage />,
          loader: resourceLoader,
        },
        {
          path: ROUTES.SKILLS_ROUTE_DYNAMIC,
          element: <SkillsPage />,
          loader: skillsLoader,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
