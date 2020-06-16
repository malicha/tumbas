export function setAuthIsSignedIn() {
  return dispatch => {
    dispatch({
      type: 'AUTH/SET_IS_SIGNED_IN'
    });
  };
}

export function setAuthLoading() {
  return dispatch => {
    dispatch({
      type: 'AUTH/SET_LOADING'
    });
  };
}

export function setUserIsLogin(user) {
  return dispatch => {
    dispatch({
      type: 'AUTH/SET_USER_IS_LOGIN',
      user: user
    });
  };
}
