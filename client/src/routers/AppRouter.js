import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../components/Login';
import Register from '../components/Register';
import Test from '../components/Test'
import PublicRoute from './PublicRoute';
import TestPage from '../pages/TestPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={Login} exact={true} />
        <PublicRoute path='/signup' component={Register} exact={true} />
        <PublicRoute path="/dashboard" component={DashboardPage} />
        <PublicRoute path="/test" component={TestPage} />
        <PublicRoute path="/test/:name" component={Test} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;