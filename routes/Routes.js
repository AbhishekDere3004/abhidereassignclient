import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};

export default Routes;
