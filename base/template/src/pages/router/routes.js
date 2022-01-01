import { paths } from './paths';
import { CounterPage } from '../counter';

export const publicRoutes = [
  {
    path: paths.COUNTER,
    element: <CounterPage />,
  },
];
