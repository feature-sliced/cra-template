import { FC } from 'react';
import { PublicRoutes } from 'pages/router';
import { withProviders } from './providers';

export const App: FC = withProviders(() => <PublicRoutes />);
