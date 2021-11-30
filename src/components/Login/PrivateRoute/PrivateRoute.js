import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";


function PrivateRoute({ children, ...rest }) {
    let {user, isLoading} = useAuth();
    if(isLoading){return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="lds-hourglass"></div>
      </div>
    )}
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;