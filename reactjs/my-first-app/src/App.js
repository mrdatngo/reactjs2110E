import React, { useState } from 'react';
import './App.css';
import { MyClassComponent } from './study/func-class-component/MyClassComponent';
import { MyFuncComponent } from './study/func-class-component/MyFuncComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { LoginPage } from './views/pages/login/Login';
import { HomePage } from './views/pages/home/Home';
import { Page404 } from './views/pages/page404/Page404';
import { DefaultLayout } from './views/layouts/DefaultLayout';

import routers from './routers'
import PrivateRoute from './routers/PrivateRoute';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/page404" element={<Page404 />} />
        <Route path="*" element={<PrivateRoute />}>
          <Route path="*" element={<DefaultLayout routers={routers} />}></Route>
        </Route>
      </Routes>

      {/* for study */}
      {/* <nav>
        <Link to="/register-func">Function Component</Link>
        <br />
        <Link to="/register-class">Class Component</Link>
        <br />
        <a href="/register-func">Function Component</a>
      </nav>
      <Routes>
        <Route path="/register-func" element={
          <div>
            <p>Func Component:</p>
            <MyFuncComponent bgColor={"red"} />
          </div>
        } />
        <Route path="/register-class"
          element={
            <div>
              <p>Class Component:</p>
              <MyClassComponent bgColor={"blue"} />
            </div>
          }
        >
        </Route>
      </Routes> */}
    </Router>
  );
}

export default App;
