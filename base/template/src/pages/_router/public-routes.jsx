import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes';

export const PublicRoutes = () => {
  const routes = useRoutes(publicRoutes);

  return routes;
};
