import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../pages/DashboardPage';
import CognitivePage from '../pages/CognitivePage';
import CareerValuesPage from '../pages/CareerValuesPage';
import CenterOfOperationPage from '../pages/CenterOfOperationPage';
import SubjectInterestPage from '../pages/SubjectInterestPage';
import NotFoundPage from '../pages/NotFoundPage';
import TestInfo from '../components/TestInfo'
import PublicRoute from './PublicRoute';
import Login from "../components/Login";
import PrivateRoute from './PrivateRoute';
import TestPage from '../pages/TestPage';
import Register from '../components/Register';
import Landing from '../components/Landing';
import SideBar from '../components/SideBar';
import Dashboard from '../components/Dashboard';
import ResultChart from '../components/result/ResultChart';
import TraitListItems from '../components/personalityTraits/TraitListItem';
import PersonalityTraitsPage from '../pages/PersonalityTraitsPage';
import CareerLibraryPage from '../pages/CareerLibraryPage';
import ResultPage from '../pages/ResultPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div style={{height: "100vh", overflow: "hidden", background: "#f3f7f7"}}>
      <Switch>
        <PublicRoute path='/' component={Landing} exact={true} />
        <PrivateRoute path='/cognitiveIntelligence' component={CognitivePage} exact={true} />
        <PrivateRoute path='/careerValues' component={CareerValuesPage} exact={true} />
        <PrivateRoute path='/centerOfOperation' component={CenterOfOperationPage} exact={true} />
        <PrivateRoute path='/subjectInterest' component={SubjectInterestPage} exact={true} />
        <PrivateRoute path='/personalityTraits' component={PersonalityTraitsPage} exact={true} />
        <PrivateRoute path='/careerLibrary' component={CareerLibraryPage} exact={true} />
        <PrivateRoute path='/result' component={ResultPage} exact={true} />
        <PrivateRoute path='/chart' component={ResultChart} exact={true} />
        <PublicRoute path='/login' component={Login}  />
        <PublicRoute path='/signup' component={Register} />
        <PrivateRoute path="/testInfo/:name" component={TestInfo} />
        <PrivateRoute path="/SideBar" component={SideBar} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true}/>
        <PrivateRoute path="/dashboardtest" component={Dashboard} exact={true}/>
        <PrivateRoute path="/test/:name" component={TestPage} />
        <PrivateRoute path='/trait' component={TraitListItems} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;