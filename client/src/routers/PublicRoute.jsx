import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Here what we do is we check if the user is authenticated.
// If the user is authenticated and he goes to login aur register page, user will be automatically be redirected to the dashboard

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect exact to="/dashboard"/>
      ) : (
          <Component {...props} />
        )
    )} />
  );

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  })

export default connect(mapStateToProps)(PublicRoute);