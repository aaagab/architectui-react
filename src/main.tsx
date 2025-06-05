import "./init"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'

// for intellisense
import { } from 'react-router-dom';
import { } from 'react-loaders';


import * as serviceWorker from "./serviceWorker";

import { HashRouter, BrowserRouter } from "react-router-dom";
import "./assets/base.scss";
import Main from "./DemoPages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
const rootElement = document.getElementById("root");
import NextApp from './DemoPages/Main';


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    {/* <HashRouter> */}
    <BrowserRouter>
      {/* <div>main.tsx</div> */}
      <App />
    </BrowserRouter>
    {/* </HashRouter> */}
  </Provider>
  // </StrictMode>
)

// const renderApp = (Component) => (
//   <Provider store={store}>
//     <HashRouter>
//       <Component />
//     </HashRouter>
//   </Provider>
// );

// if (rootElement !== null) {

//   const root = createRoot(rootElement).render(renderApp(Main));

//   if (import.meta.hot) {
//     import.meta.hot?.accept("./DemoPages/Main", () => {
//       // const NextApp = require("./DemoPages/Main").default;
//       root.render(renderApp(NextApp));
//     });

//   }
// }
serviceWorker.unregister();