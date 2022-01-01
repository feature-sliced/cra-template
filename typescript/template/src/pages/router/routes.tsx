import { RouteObject } from 'react-router-dom';
import { paths } from './paths';
import { CounterPage } from '../counter';

export const publicRoutes: RouteObject[] = [
  {
    path: paths.COUNTER,
    element: <CounterPage />,
  },
];
