import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import TestInfo from '../components/TestInfo'
import PublicRoute from './PublicRoute';
import Login from "../components/Login";
import PrivateRoute from './PrivateRoute';
import TestPage from '../pages/TestPage';
import Register from '../components/Register';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import testDashboard from '../components/testDashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div style={{height: "100vh", overflow: "hidden", background: "#f3f7f7"}}>
      <Navbar />
      <Switch>
        <PublicRoute path='/' component={Landing} exact={true} />
        <PublicRoute path='/login' component={Login} exact={true} />
        <PublicRoute path='/signup' component={Register} exact={true} />
        {/* <PublicRoute path="/dashboard" component={DashboardPage} /> */}
        <PublicRoute path="/testInfo/:name" component={TestInfo} />
        <PublicRoute path="/dashboardtest" component={Dashboard} exact={true}/>
        <PublicRoute path="/test/:name" component={TestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;