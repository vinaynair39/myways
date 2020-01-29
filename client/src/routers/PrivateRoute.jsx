import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Here what we do is we check if the user is authenticated. If not we redirect them to login page
export const PrivateRoute = ({
  login,
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return(
      <Route {...rest} component={(props) => (
      (isAuthenticated === true) ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/login" exact={true}/>
        )
      )} />
  )
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps)(PrivateRoute);