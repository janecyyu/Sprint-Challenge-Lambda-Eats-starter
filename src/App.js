import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import FormikApp from './Form';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <nav className="navbar">
          <Link to="/">Home</Link>{" "}
          <Link to="/pizza">Pizza</Link>
      </nav>
      <Switch>
      <Route exact path="/"/>
      <Route path="/pizza" component={FormikApp} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
