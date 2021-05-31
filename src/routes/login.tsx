import React from "react";
import { useHistory } from "react-router";
import { POST_LOGIN_REDIRECT_KEY, TOKEN_KEY } from "../consts";

export function Login() {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        localStorage.setItem(TOKEN_KEY, "whatever");
        const postLoginRedirect = localStorage.getItem(POST_LOGIN_REDIRECT_KEY);
        if (postLoginRedirect) {
          localStorage.removeItem(POST_LOGIN_REDIRECT_KEY);
          history.replace(postLoginRedirect);
        }
      }}
    >
      Log me in
    </button>
  );
}
