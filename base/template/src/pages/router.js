import { routeNames } from 'shared/router';
import { CounterPage } from './counter-page';

export const publicRoutes = [
  {
    path: routeNames.COUNTER,
    Component: CounterPage,
  },
];
