import { routeNames } from 'shared/router';
import { ComponentType } from 'react';
import { CounterPage } from './counter-page';

interface IRoute {
  path: string;
  Component: ComponentType;
}

export const publicRoutes: IRoute[] = [
  {
    path: routeNames.COUNTER,
    Component: CounterPage,
  },
];
