import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {login, startLogout} from './actions/auth'
import {history}from './routers/AppRouter'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoadingPage from './pages/LoadingPage';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { startAddTests , addAnswers} from './actions/test';
import 'popper.js'
import 'jquery';
import 'animate.css'
import './styles/styles.scss';

const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};
const getFromLocalStorage = (state) => {
  try {
    const serializedState = JSON.parse(localStorage.getItem('answers'));
    store.dispatch(addAnswers(serializedState));
  } catch (e) {
    console.log(e)
  }
}
// ReactDOM.render(<LoadingPage/>, document.getElementById('root'));
const token = sessionStorage.getItem('FBIdToken');
if (token) {
  const decodedToken = jwtDecode(token);
  console.log('decoded',decodedToken);
  if (decodedToken.exp * 10000 < Date.now()) {
    store.dispatch(startLogout());
    renderApp();
    history.push('/');
  }
  else {
    store.dispatch(login());
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(startAddTests()).then(() => {
      getFromLocalStorage();
      renderApp();
    });
    if (history.location.pathname === '/') {
      history.push('/dashboardtest');
    }
}
  }else {
  renderApp();
}
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
