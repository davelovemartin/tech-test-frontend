import React, { useEffect, useState } from 'react';
import ResourceNavigation from './ResourceNavigation';
import axios from 'axios';
import { z } from 'zod';
import { API_ROUTES } from '~/resources/api-constants';
import ResourceNavigationLoader from './ResourceNavigationLoader';
import { sortResources } from '~/utility/functions';

const ResourceSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type Resource = z.infer<typeof ResourceSchema>;

const Resources = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState<Resource[] | undefined>();
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(API_ROUTES.RESOURCES)
      .then((resources) => {
        setLoading(false);
        setResources(resources.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {loading && <ResourceNavigationLoader />}
      {error && <p>{`Error fetching resources: ${error}`}</p>}
      {resources && !loading && !error && <ResourceNavigation resources={sortResources(resources)} />}
    </>
  );
};

export default Resources;
