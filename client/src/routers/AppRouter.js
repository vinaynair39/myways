import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import Test from '../components/Test'
import PublicRoute from './PublicRoute';
import TestPage from '../pages/TestPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/Dashboard" component={DashboardPage} exact={true} />
        <PublicRoute path="/test" component={TestPage} exact={true} />
        <PublicRoute path="/test/:name" component={Test} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;