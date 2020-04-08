import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import routes from "./routes";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <Switch>
      {routes.map((route, index) => {
        return (<Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          component={route.component} 
          history={history}
        />)
      })}
      </Switch>
    </Router>

  );
}

export default App;