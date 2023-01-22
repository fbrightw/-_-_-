import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/home";
import Analytics from "./components/pages/analytics";
import Actions from "./components/pages/actions";
import AppNavbar from "./components/navbar/AppNavbar";
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
