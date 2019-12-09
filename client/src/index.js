import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {logout, login} from './actions/auth'
import {history}from './routers/AppRouter'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { startAddTests } from './actions/test';
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

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
const token = sessionStorage.getItem('FBIdToken');
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
  else {
    store.dispatch(login());
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(startAddTests()).then(() => {
      renderApp();
    });
    if (history.location.pathname === '/') {
      history.push('/dashboard');
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
