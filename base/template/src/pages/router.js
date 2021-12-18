import { routeNames } from 'shared/router';
import { Counter } from './counter';

export const publicRoutes = [
  {
    path: routeNames.COUNTER,
    Component: Counter,
  },
];
