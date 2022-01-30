import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes';

export const PublicRoutes: FC = () => {
  const routes = useRoutes(publicRoutes);

  return routes;
};
