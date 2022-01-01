import { PublicRoutes } from 'pages/router';
import { withProviders } from './providers';

export const App = withProviders(() => <PublicRoutes />);
