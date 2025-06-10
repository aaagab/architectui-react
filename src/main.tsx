import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.tsx'

// for intellisense
import { } from 'react-router-dom';
import { } from 'react-loaders';
import { } from 'redux';

import { BrowserRouter } from "react-router-dom";
import "./assets/base.scss";
import store from "./config/configureStore";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter
        basename={import.meta.env.BASE_URL}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
