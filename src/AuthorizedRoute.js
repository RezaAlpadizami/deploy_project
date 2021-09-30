import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useAuthorizedContext } from "./AuthorizedContext";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AuthorizedRoute = (props) => {
  const { isLoggedIn, setAuthorizedValue } = useAuthorizedContext();
  const history = useHistory();

  const accessToken = cookies.get("accessToken");

  React.useEffect(() => {
    if (!accessToken) {
      setAuthorizedValue(false);
    }
  }, [accessToken, isLoggedIn]);

  React.useEffect(() => {
    if (!isLoggedIn) {
      history.push("/unitkerja-login");
    }
  }, [isLoggedIn, history]);

  return <Route {...props} />;
};

export default AuthorizedRoute;
