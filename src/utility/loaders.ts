import { redirect } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { API_ROUTES } from '../resources/api-constants';
import { ROUTES } from '~/resources/routes-constants';
import { appendIdToUrl } from './functions';

export const resourceLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.resourceId) {
    throw redirect(ROUTES.HOMEPAGE_ROUTE);
  }
  const [resourceResponse, roleEligibilityResponse] = await Promise.all([
    fetch(appendIdToUrl(params.resourceId, API_ROUTES.RESOURCES)),
    fetch(appendIdToUrl(params.resourceId, API_ROUTES.RESOURCES) + '/role-eligibility'),
  ]);

  if (!resourceResponse.ok || !roleEligibilityResponse.ok) {
    throw new Error('Failed to fetch resource data');
  }

  const resource = await resourceResponse.json();
  const roleEligibility = await roleEligibilityResponse.json();

  return { resource, roleEligibility };
};

export const skillsLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.resourceId) {
    throw redirect(ROUTES.HOMEPAGE_ROUTE);
  }
  const [resourceResponse, skillsResponse] = await Promise.all([fetch(appendIdToUrl(params.resourceId, API_ROUTES.RESOURCES)), fetch(API_ROUTES.SKILLS)]);

  if (!resourceResponse.ok || !skillsResponse.ok) {
    throw new Error('Failed to fetch resource data');
  }

  const resource = await resourceResponse.json();
  const skills = await skillsResponse.json();

  return { resource, skills };
};
