import { PublicRoutes } from 'pages';
import { withProviders } from './providers';

const App = () => (
    <PublicRoutes />
);

export default withProviders(App);
