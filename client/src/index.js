import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import App from './App'
import {login, startLogout, setUser} from './actions/auth'
import {history}from './routers/AppRouter'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { startAddTests , addAnswers,} from './actions/test';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'popper.js'
import 'jquery';
import 'animate.css'
import './styles/styles.scss';
import Loader from './components/Loader/Loader';

const store = configureStore();

// where we defined all our routes and its associated components. we wrapped it inside the Provider to have access to redux
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

// gets the stored ans from the local storage
const getFromLocalStorage = (state) => {
  try {
    const serializedState = JSON.parse(localStorage.getItem('answers'));
    !!serializedState && store.dispatch(addAnswers(serializedState));
  } catch (e) {
    console.log(e)
  }
}

// if the user accidently refreshes the page then inorder to retrieve the user data back from local storage , we use this func.
const getUserFromLocalStorage = () => {
  try {
    const serializedState = JSON.parse(sessionStorage.getItem('user'));
    return serializedState;
  } catch (e) {
    console.log(e)
  }
}

ReactDOM.render(<Loader/>, document.getElementById('root'));

const token = localStorage.getItem('token');
//checks if the token is there. if it is there then check its expiery and if its expired then logout
if (token) {
  const decodedToken = jwtDecode(token);
  console.log('decoded',decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(startLogout());
    renderApp();
    history.push('/');
  }
  else {
    store.dispatch(login());  // if the token is there then we again repeat the same steps that we do after login or register
    store.dispatch(setUser(getUserFromLocalStorage()));
    axios.defaults.headers.common['x-access-token'] = token;
    store.dispatch(startAddTests()).then(() => {
      getFromLocalStorage();
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
