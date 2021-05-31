import React, { PropsWithChildren } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { POST_LOGIN_REDIRECT_KEY, TOKEN_KEY } from "./consts";

export function Guard({ children }: PropsWithChildren<{}>) {
  const token = localStorage.getItem(TOKEN_KEY);
  const isLoginPage = useRouteMatch("/login");

  const pageRequiresAuth = !isLoginPage;
  const isLoggedIn = token !== null;

  return (
    <Route
      render={({ location }) => {
        // Accessing a protected page with an expired token or without being logged in
        if (pageRequiresAuth && !isLoggedIn) {
          localStorage.setItem(
            POST_LOGIN_REDIRECT_KEY,
            location.pathname + location.search
          );
          return <Redirect to="/login" />;
        }
        // Accessing login page while already logged in
        if (isLoggedIn && isLoginPage) {
          return <Redirect to="/" />;
        }
        return children;
      }}
    />
  );
}
