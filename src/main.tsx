import "./init";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.tsx'

// for intellisense
import { } from 'react-router-dom';
import { } from 'react-loaders';

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import "./assets/base.scss";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
)

serviceWorker.unregister();