import React from "react";
import {isLoggedIn} from "../services/authentication.service";
import {Redirect, Route,} from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
