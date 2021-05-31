import React from "react";
import { useHistory } from "react-router";
import { TOKEN_KEY } from "../consts";

export function LogoutButton() {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        localStorage.removeItem(TOKEN_KEY);
        history.push("/login");
      }}
    >
      Log me out
    </button>
  );
}
