import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import { startAddTests } from './actions/test';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(startAddTests());

const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );


ReactDOM.render(jsx, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
