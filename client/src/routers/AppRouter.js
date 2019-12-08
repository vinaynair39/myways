import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../components/Login';
import LoginSignup from '../components/LoginSignup.js';
import Register from '../components/Register';
import Test from '../components/Test'
import PublicRoute from './PublicRoute';
import TestPage from '../pages/TestPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
      <PublicRoute path='/' component={LoginSignup} />
        <PublicRoute path='/login' component={LoginSignup} exact={true} />
        <PublicRoute path='/signup' component={LoginSignup} exact={true} />
        <PublicRoute path="/dashboard" component={DashboardPage} />
        <PublicRoute path="/test" component={TestPage} />
        <PublicRoute path="/test/:name" component={Test} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;