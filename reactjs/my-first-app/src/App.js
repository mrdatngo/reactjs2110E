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

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register-func">Function Component</Link>
        <br />
        <Link to="/register-class">Class Component</Link>
        <br />
        <a href="/register-func">Function Component</a>
      </nav>
      <Routes>
        {/* <Route path="/register" element={"Test"}> */}
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
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
