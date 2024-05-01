import React, { useEffect, useState } from 'react';
import ResourceNavigation from './ResourceNavigation';
import axios from 'axios';
import { z } from 'zod';
import { API_ROUTES } from '~/resources/api-constants';

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
      {loading && <p>loading...</p>}
      {error && <p>{`Error fetching resources: ${error}`}</p>}
      {resources && !loading && !error && <ResourceNavigation resources={resources} />}
    </>
  );
};

export default Resources;
