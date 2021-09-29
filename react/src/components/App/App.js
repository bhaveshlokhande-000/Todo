import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import { routes } from "../../Routers/Routes";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route component={Header} />
        <Switch>
          {routes.map((r, i) => (
            <ProtectedRoute
              component={r.component}
              key={i}
              exact
              path={r.path}
            />
          ))}
          <Route path="/" exact component={Login} />
          <Route component={() => <p className="error">page not found</p>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
