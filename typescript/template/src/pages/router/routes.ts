import { ComponentType } from 'react';
import { paths } from './paths';
import { Counter } from '../counter';

interface IRoute {
  path: string;
  Component: ComponentType;
}

export const publicRoutes: IRoute[] = [
  {
    path: paths.COUNTER,
    Component: Counter,
  },
];
