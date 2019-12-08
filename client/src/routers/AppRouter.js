import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginSignup from '../components/LoginSignup.js';
import Test from '../components/Test'
import PublicRoute from './PublicRoute';
import Test from '../components/Test'
import PrivateRoute from './PrivateRoute';
import TestPage from '../pages/TestPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginSignup} exact={true} />
        <PublicRoute path='/signup' component={LoginSignup} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/test" component={TestPage} />
        <PrivateRoute path="/test/:name" component={Test} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;