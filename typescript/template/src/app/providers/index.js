import { compose } from 'shared/lib/fp';
import { withRouter } from './with-router';

export const withProviders = compose(withRouter);
