import "./init"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'



import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom";
import "./assets/base.scss";
import Main from "./DemoPages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
const rootElement = document.getElementById("root");


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <HashRouter>
//         <App />
//       </HashRouter>
//     </Provider>
//   </StrictMode>,
// )

const renderApp = (Component) => (
  <Provider store={store}>
    <HashRouter>
      <Component />
    </HashRouter>
  </Provider>
);

if (rootElement !== null) {

  const root = createRoot(rootElement).render(renderApp(Main));

  if (import.meta.hot) {
    import.meta.hot?.accept("./DemoPages/Main", () => {
      const NextApp = require("./DemoPages/Main").default;
      root.render(renderApp(NextApp));
    });

  }
}
serviceWorker.unregister();