import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Loader } from "shared/components";

const TasksPage = lazy(() => import("./tasks"));
const TaskPage = lazy(() => import("./task"));

/**
 * Роутинг приложения
 * @page Список заданий
 * @page Карточка задания
 */
const Routing = () => (
    <BrowserRouter>
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/:id" component={TaskPage} />
                <Route exact path="/" component={TasksPage} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Routing;
