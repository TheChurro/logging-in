import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import MyUchicago from "./components/MyUchicago";
import FailedCanvas from "./components/FailedCanvas";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={MyUchicago}/>
      <Route exact path="/bad-login" component={FailedCanvas}/>
    </Router>
  );
}

export default App;
