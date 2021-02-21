import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ProviderRedux} from 'react-redux'
import {store} from './store/store'
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';

/* styles part */
import './index.css';

ReactDOM.render(
  <ProviderRedux store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </BrowserRouter>
  </ProviderRedux>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
