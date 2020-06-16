import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => (
  console.log('rest =', rest),
  (
    <Route
      render={props => {
        console.log(props);
        return rest.user ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/login?ref=${props.location.pathname}`} />
        );
      }}
      {...rest}
    />
  )
);

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
