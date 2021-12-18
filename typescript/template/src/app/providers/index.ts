import compose from 'compose-function';
import withRouter from './with-router';

/**
 * @hoc Инициализирующая логика приложения
 * @remark Содержит:
 * - логику инициализации роутера (withRouter)
 */
export const withProviders = compose(withRouter);
