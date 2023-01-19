import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import Analytics from "./pages/analytics";
import Actions from "./pages/actions";
import AppNavbar from "./navbar/AppNavbar";
import {store} from "./slices/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <HashRouter>
              <AppNavbar/>
              <Routes>
                  <Route
                      path='/home'
                      element={<HomePage/>}
                  />
                  <Route
                      path='/analytics'
                      element={<Analytics/>}

                  />
                  <Route
                      path="/actions"
                      element={<Actions/>}
                  />
              </Routes>
          </HashRouter>
      </Provider>
  </React.StrictMode>
);
