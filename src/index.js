import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Auth0Provider } from "@auth0/auth0-react";
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pewdcrrc.us.auth0.com"
      clientId="I0HbYjjP8C9Pg5LikkjWTryBhieV40F8"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
