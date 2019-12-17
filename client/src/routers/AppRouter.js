import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import ResultPage from '../pages/ResultPage';
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
import ResultChart from '../components/result/ResultChart';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div style={{height: "100vh", overflow: "hidden", background: "#f3f7f7"}}>
      <Navbar />
      <Switch>
        <PublicRoute path='/' component={Landing} exact={true} />
        <PrivateRoute path='/result' component={ResultPage} exact={true} />
        <PrivateRoute path='/chart' component={ResultChart} exact={true} />
        <PublicRoute path='/login' component={Login}  />
        <PublicRoute path='/signup' component={Register} />
        <PrivateRoute path="/testInfo/:name" component={TestInfo} />
        <PrivateRoute path="/dashboardtest" component={Dashboard} exact={true}/>
        <PrivateRoute path="/test/:name" component={TestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;