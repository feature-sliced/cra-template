import { CounterPage } from '../counter';
import { paths } from './paths';

export const publicRoutes = [
  {
    path: paths.COUNTER,
    element: <CounterPage />,
  },
];
