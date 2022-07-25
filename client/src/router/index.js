import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Public
import privateRoutes from "./private";
import PrivateRoute from "./private/route";

// auth
import authRoutes from "./auth";
import AuthRoute from "./auth/route";
import { useCookies } from "react-cookie";

export default function AppRouter() {
  const [cookies, setCookie] = useCookies();
  const isAuthenticated = cookies.accessToken !== undefined;
  
 
  return (
    <Router>
      <Switch>
        {/* Auth routes */}
        {authRoutes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact
            render={() => (
              <AuthRoute
                title={item.title}
                component={item.component}
                route={item.path}
              />
            )}
          />
        ))}

        {/* Private routes */}

        {isAuthenticated? privateRoutes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact
            render={() => (
              <PrivateRoute
                title={item.title}
                component={item.component}
                route={item.path}
              />
            )}
          />
        )):null }
      </Switch>
    </Router>
  );
}
