import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Form from './Form';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <nav className="navbar">
          <Link to="/">Home</Link>{" "}
          <Link to="/pizza">Pizza</Link>
      </nav>
      <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/pizza" component={Form} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
