import React, { lazy, Suspense } from 'react';
import 'firebase/auth';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { setAuthIsSignedIn, setAuthLoading } from '../../store/actions/auth';
import Slider from '../../components/slider';
import Popup from '../../components/privacy-policy-popup';
import FirebaseLogin from '../../components/firebase-login';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import BackButton from '@material-ui/icons/ArrowBack';
import queryString from 'query-string';
import AppBar from '../../components/app-bar';
import { Redirect } from 'react-router-dom';

const getUrl = queryString.parse(window.location.search);
// import Loading from './components/loading';
const SplashScreen = lazy(() => import('../splash-screen'));

class Component extends React.Component {
  // Configure FirebaseUI.

  render() {
    const { classes, history, user } = this.props;

    return (
      <Container maxWidth="xs" className={classes.container}>
        <CssBaseline />

        {this.props.isLoading ? (
          <Grid
            item
            style={{ textAlign: 'center', backgroundColor: '#153b50' }}
          >
            <CircularProgress style={{ color: '#F15B5D' }} />
          </Grid>
        ) : (
          <Grid item style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <FirebaseLogin />
            <Popup />
          </Grid>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthIsSignedIn: () => dispatch(setAuthIsSignedIn()),
    setAuthLoading: () => dispatch(setAuthLoading())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
