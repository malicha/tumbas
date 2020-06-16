import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  palette: {
    primary: {
      main: '#42B549'
    },
    background: {
      default: 'white'
    }
  }
});

const firebaseConfig = {
  apiKey: 'AIzaSyD8JVBvGb8OW_vLiwZj5eWKmKpBlu6XNdg',
  authDomain: 'tumbasin-bandung-prod.firebaseapp.com',
  databaseURL: 'https://tumbasin-bandung-prod.firebaseio.com',
  projectId: 'tumbasin-bandung-prod',
  storageBucket: 'tumbasin-bandung-prod.appspot.com',
  messagingSenderId: '99899507988',
  appId: '1:99899507988:web:2b5592616932d251746e01',
  measurementId: 'G-3M7VS5DYP3'
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
