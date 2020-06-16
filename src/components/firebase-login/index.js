import React, { useState, lazy } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setUserIsLogin } from '../../store/actions/auth';
import queryString from 'query-string';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { deepOrange } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popup from '../privacy-policy-popup';
import Grid from '@material-ui/core/Grid';
import PasswordField from 'material-ui-password-field';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import daftar from '../../vector/daftar.svg';
import masuk from '../../vector/masuk.svg';
import masukEmail from '../../vector/masukEmail.svg';
import iconPassword from '../../vector/password.svg';
import google from '../../vector/google.svg';
import iconEmail from '../../vector/email.svg';
import pass from '../../vector/pass.svg';
import emaillain from '../../vector/emaillain.svg';
import AppBar from '../app-bar';

import './firebase-ui.css';
import './imports.css';
import './mdl.css';
const SplashScreen = lazy(() => import('../../containers/splash-screen'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F15B5D'
    }
  }
});

const useStyles = makeStyles(theme => ({
  textField: {
    '.MuiInput-underline-447:after': {
      borderBottomColor: '2px solid #25AA24'
    },
    '.MuiInput-underline-447:before': {
      borderBottomColor: '2px solid #25AA24'
    },
    width: '100%'
  },
  gridGoogle: {
    marginBottom: 80,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 30
    }
  }
}));

function FirebaseLogin(props, target, event) {
  if (props.user) {
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        props.setUserLogin(result.user);
        props.history.push(getUrl.ref);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [withEmail, setWithEmail] = useState(false);
  const [login, setLogin] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const getUrl = queryString.parse(window.location.search);
  const provider = new firebase.auth.GoogleAuthProvider();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginWithGoogle = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const loginWithEmail = () => {
    if (email === '') {
      alert('Mohon isi email');
      return;
    }
    if (password === '') {
      alert('Mohon isi password');
      return;
    }
    setWithEmail(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(result) {
        props.setUserLogin(result.user);
        window.location.href = getUrl.ref;
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        setWithEmail(false);
        alert(
          'Ups terjadi kesalahan, periksa kembali password, bila belum terdaftar silahkan sign up'
        );

        // ...
      });
  };

  const signupWithEmail = () => {
    setWithEmail(true);
    if (email === '') {
      alert('Mohon isi email');
      return;
    }
    if (password === '') {
      alert('Mohon isi password');
      return;
    }
    setWithEmail(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(result) {
        props.setUserLogin(result.user);

        window.location.href = getUrl.ref;
      })
      .catch(function(error) {
        // Handle Errors here.
        alert('Akun sudah terdaftar, silahkan login');
        console.log(error);
        setWithEmail(false);
        // ...
      });
  };

  const resetPassword = () => {
    const emailAddress = email;
    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(function() {
        alert('Silahkan cek inbox email anda');
        window.location.reload();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      {forgotPass === true ? (
        <AppBar goBackProfile={true} title="Atur Ulang Password" />
      ) : (
        <React.Fragment>
          {click === false ? (
            <AppBar goBackProfile={true} title="Masuk Akun" />
          ) : (
            <React.Fragment>
              {login === true ? (
                <AppBar goBackProfile={true} title="Masuk Lewat Email" />
              ) : (
                <AppBar goBackProfile={true} title="Daftar Lewat Email" />
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      )}

      <div style={{ marginBottom: 20 }}>
        {forgotPass === true ? (
          <div style={{ padding: 20 }}>
            <div style={{ marginTop: 50 }} align="center">
              <img src={iconPassword} style={{ marginBottom: 20 }} />
              <Typography variant="body2" style={{ marginBottom: 20 }}>
                <b>Atur Ulang Password</b>
              </Typography>
            </div>

            <TextField
              value={email || ''}
              onChange={e => setEmail(e.target.value)}
              label="Email"
              className={classes.textField}
              type="email"
              autoComplete="email"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      style={{
                        color: 'white',
                        padding: 0,
                        margin: 0
                      }}
                    >
                      <img src={iconEmail} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              placeholder="Masukan Email"
              color="white"
            />
            <Typography style={{ fontSize: 13, marginTop: 22 }}>
              Kami akan mengirimkan email untuk menyetel <br />
              ulang password anda.
            </Typography>
            <Grid style={{ marginTop: 30 }} container spacing={0}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#87CAFE',
                    boxShadow: '0px 5px 10px rgba(135, 202, 254, 0.5)',
                    color: 'white',
                    width: 200,
                    textTransform: 'none'
                  }}
                  className={classes.button}
                  onClick={resetPassword}
                >
                  <b>Reset Ulang</b>
                </Button>
              </Grid>
              <Grid item xs xs={12}>
                <Button
                  style={{
                    marginTop: '5%',
                    color: '#9FA3A6',
                    width: 200,
                    textTransform: 'none'
                  }}
                  className={classes.button}
                  onClick={() => setForgotPass(!forgotPass)}
                >
                  <b>Batalkan</b>
                </Button>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div>
            {!props.user ? (
              <div>
                <div id="firebaseui-auth-container" lang="en">
                  <div className="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner">
                    <div className="firebaseui-card-content">
                      <form
                        onSubmit={event => {
                          event.preventDefault();
                        }}
                      >
                        <ul className="firebaseui-idp-list">
                          {click === false ? (
                            <Grid container align="center">
                              <Grid
                                style={{ marginBottom: 30, marginTop: 50 }}
                                item
                                xs={12}
                              >
                                <img src={masuk} />
                              </Grid>
                              <Grid style={{ marginBottom: 30 }} item xs={12}>
                                <Typography variant="body2">
                                  <b>Masuk</b>
                                </Typography>
                                <Typography variant="caption" display="block">
                                  Nikmati kepuasan dan kenyamanan kualitas
                                  belanja kebutuhan sehari - hari dengan
                                  MeserMang!
                                </Typography>
                              </Grid>
                              <Grid style={{ marginBottom: 30 }} item xs={12}>
                                <button
                                  style={{
                                    backgroundColor: '#4285F4',
                                    margin: 0,
                                    padding: 3,
                                    borderRadius: 4
                                  }}
                                  className="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-google firebaseui-id-idp-button"
                                  data-provider-id="google.com"
                                  data-upgraded=",MaterialButton"
                                  onClick={loginWithGoogle}
                                >
                                  <span
                                    align="center"
                                    style={{
                                      backgroundColor: 'white',
                                      borderRadius: 4,
                                      width: '20%'
                                    }}
                                    className="firebaseui-idp-icon-wrapper"
                                  >
                                    <img
                                      className="firebaseui-idp-icon"
                                      alt=""
                                      src={google}
                                      style={{ width: 37, height: 35 }}
                                    />
                                  </span>
                                  <span
                                    style={{ color: 'white', fontSize: 13 }}
                                    className="firebaseui-idp-text firebaseui-idp-text-long"
                                  >
                                    <b>Masuk Dengan Google</b>
                                  </span>
                                  <span className="firebaseui-idp-text firebaseui-idp-text-short">
                                    Google
                                  </span>
                                </button>
                              </Grid>
                              <Grid item xs={12} className={classes.gridGoogle}>
                                <button
                                  style={{
                                    backgroundColor: '#56C25C',
                                    margin: 0,
                                    padding: 3,
                                    borderRadius: 4
                                  }}
                                  className="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-password firebaseui-id-idp-button"
                                  data-provider-id="password"
                                  data-upgraded=",MaterialButton"
                                  onClick={() => setClick(!click)}
                                >
                                  <span
                                    align="center"
                                    style={{
                                      backgroundColor: 'white',
                                      borderRadius: 4,
                                      width: '23%'
                                    }}
                                    className="firebaseui-idp-icon-wrapper"
                                  >
                                    <img
                                      className="firebaseui-idp-icon"
                                      alt=""
                                      src={emaillain}
                                      style={{
                                        width: 25,
                                        height: 35
                                      }}
                                    />
                                  </span>
                                  <span
                                    className="firebaseui-idp-text firebaseui-idp-text-long"
                                    style={{ fontSize: 13 }}
                                  >
                                    <b>Daftar Lewat Email</b>
                                  </span>
                                  <span className="firebaseui-idp-text firebaseui-idp-text-short">
                                    Email
                                  </span>
                                </button>
                              </Grid>
                            </Grid>
                          ) : (
                            <ThemeProvider theme={theme}>
                              <Box>
                                {login === true ? (
                                  <div>
                                    {withEmail === false ? (
                                      <div style={{ marginTop: 60 }}>
                                        <div align="center">
                                          <img
                                            src={masukEmail}
                                            style={{ marginBottom: 20 }}
                                          />
                                          <Typography
                                            variant="body2"
                                            style={{ marginBottom: 20 }}
                                          >
                                            <b>Masuk Lewat Email</b>
                                          </Typography>
                                        </div>

                                        <TextField
                                          value={email || ''}
                                          onChange={e =>
                                            setEmail(e.target.value)
                                          }
                                          label="Email:"
                                          className={classes.textField}
                                          type="email"
                                          name="email"
                                          autoComplete="email"
                                          margin="normal"
                                          InputLabelProps={{
                                            shrink: true
                                          }}
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <IconButton
                                                  style={{
                                                    color: 'white',
                                                    padding: 0,
                                                    margin: 0
                                                  }}
                                                >
                                                  <img src={iconEmail} />
                                                </IconButton>
                                              </InputAdornment>
                                            )
                                          }}
                                          placeholder="Masukan Email"
                                        />
                                        <TextField
                                          value={password || ''}
                                          onChange={e =>
                                            setPassword(e.target.value)
                                          }
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <IconButton
                                                  style={{
                                                    color: 'white',
                                                    padding: 0,
                                                    margin: 0
                                                  }}
                                                  onClick={() =>
                                                    setShowPassword(
                                                      !showPassword
                                                    )
                                                  }
                                                >
                                                  <img src={pass} />
                                                </IconButton>
                                              </InputAdornment>
                                            )
                                          }}
                                          label="Password:"
                                          className={classes.textField}
                                          type={
                                            showPassword ? 'text' : 'password'
                                          }
                                          autoComplete="current-password"
                                          margin="normal"
                                          InputLabelProps={{
                                            shrink: true
                                          }}
                                          placeholder="Masukan Password"
                                        />
                                        {login === true ? (
                                          <div>
                                            <Grid
                                              container
                                              spacing={0}
                                              style={{ padding: 0 }}
                                            >
                                              <Grid item xs={8}>
                                                <Typography
                                                  style={{
                                                    color: 'black',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                  }}
                                                  variant="caption"
                                                >
                                                  Belum terdaftar ?{' '}
                                                  <Button
                                                    onClick={() =>
                                                      setLogin(!login)
                                                    }
                                                    disableRipple={true}
                                                    style={{
                                                      color: '#56C25C',
                                                      background: 'transparent',
                                                      textTransform: 'none',
                                                      fontSize: 12,
                                                      padding: 0,
                                                      marginLeft: '-2%'
                                                    }}
                                                  >
                                                    <b> Daftar</b>
                                                  </Button>
                                                </Typography>
                                              </Grid>
                                              <Grid
                                                item
                                                xs={4}
                                                style={{
                                                  padding: 0,
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'flex-end'
                                                }}
                                              >
                                                <Button
                                                  onClick={() =>
                                                    setForgotPass(!forgotPass)
                                                  }
                                                  disableRipple={true}
                                                  style={{
                                                    color: '#9FA3A6',
                                                    background: 'transparent',
                                                    textTransform: 'none',
                                                    fontSize: 11,
                                                    padding: 0
                                                  }}
                                                >
                                                  <u> Lupa Password?</u>
                                                </Button>
                                              </Grid>
                                            </Grid>
                                          </div>
                                        ) : (
                                          <Typography
                                            style={{ color: 'black' }}
                                            variant="caption"
                                          >
                                            Sudah terdaftar ?{' '}
                                            <b
                                              style={{ color: '#56C25C' }}
                                              onClick={() => setLogin(!login)}
                                            >
                                              Login
                                            </b>
                                          </Typography>
                                        )}

                                        <div style={{ marginTop: 20 }}>
                                          <Grid
                                            align="center"
                                            container
                                            spacing={3}
                                          >
                                            <Grid item xs={12}>
                                              <Button
                                                style={{
                                                  backgroundColor: '#56C25C',
                                                  color: 'white',
                                                  boxShadow:
                                                    ' 0px 5px 10px rgba(66, 181, 73, 0.46)',
                                                  borderRadius: 4,
                                                  width: 200,
                                                  textTransform: 'none'
                                                }}
                                                className={classes.button}
                                                onClick={loginWithEmail}
                                              >
                                                <b>Masuk</b>
                                              </Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                              <Button
                                                style={{
                                                  color: '#9FA3A6',
                                                  width: 200,
                                                  textTransform: 'none'
                                                }}
                                                className={classes.button}
                                                onClick={() => setClick(!click)}
                                              >
                                                <b>Batalkan</b>
                                              </Button>
                                            </Grid>
                                          </Grid>
                                        </div>
                                      </div>
                                    ) : (
                                      <CircularProgress
                                        style={{ color: '#F15B5D' }}
                                        disableShrink
                                      />
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    {withEmail === false ? (
                                      <div style={{ marginTop: 60 }}>
                                        <div align="center">
                                          <img
                                            src={daftar}
                                            style={{ marginBottom: 20 }}
                                          />
                                          <Typography
                                            variant="body2"
                                            style={{ marginBottom: 20 }}
                                          >
                                            <b>Daftar</b>
                                          </Typography>
                                        </div>
                                        <TextField
                                          value={email || ''}
                                          onChange={e =>
                                            setEmail(e.target.value)
                                          }
                                          label="Email"
                                          className={classes.textField}
                                          type="email"
                                          autoComplete="email"
                                          margin="normal"
                                          InputLabelProps={{
                                            shrink: true
                                          }}
                                          placeholder="Masukan Email"
                                          color="white"
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <IconButton
                                                  style={{
                                                    color: 'white',
                                                    margin: 0,
                                                    padding: 0
                                                  }}
                                                >
                                                  <img src={iconEmail} />
                                                </IconButton>
                                              </InputAdornment>
                                            )
                                          }}
                                        />
                                        <TextField
                                          value={password || ''}
                                          onChange={e =>
                                            setPassword(e.target.value)
                                          }
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <IconButton
                                                  style={{
                                                    color: 'white',
                                                    margin: 0,
                                                    padding: 0
                                                  }}
                                                  onClick={() =>
                                                    setShowPassword(
                                                      !showPassword
                                                    )
                                                  }
                                                >
                                                  <img src={pass} />
                                                </IconButton>
                                              </InputAdornment>
                                            )
                                          }}
                                          label="Password"
                                          className={classes.textField}
                                          type={
                                            showPassword ? 'text' : 'password'
                                          }
                                          autoComplete="current-password"
                                          margin="normal"
                                          InputLabelProps={{
                                            shrink: true
                                          }}
                                          placeholder="Masukan Password"
                                        />
                                        {login === true ? (
                                          <Typography
                                            style={{ color: 'black' }}
                                            variant="caption"
                                          >
                                            Belum terdaftar ?{' '}
                                            <b
                                              style={{ color: '#F15B5D' }}
                                              onClick={() => setLogin(!login)}
                                            >
                                              SignUp
                                            </b>
                                            <Button
                                              onClick={() => setLogin(!login)}
                                              disableRipple={true}
                                              style={{
                                                color: '#56C25C',
                                                background: 'transparent',
                                                textTransform: 'none',
                                                fontSize: 12,
                                                padding: 0,
                                                marginLeft: '-2%'
                                              }}
                                            >
                                              <b> Daftar</b>
                                            </Button>
                                          </Typography>
                                        ) : (
                                          <Typography
                                            style={{
                                              color: 'black',
                                              alignItems: 'center',
                                              display: 'flex'
                                            }}
                                            variant="caption"
                                          >
                                            Sudah terdaftar ?{' '}
                                            <Button
                                              onClick={() => setLogin(!login)}
                                              disableRipple={true}
                                              style={{
                                                color: '#56C25C',
                                                background: 'transparent',
                                                textTransform: 'none',
                                                fontSize: 12,
                                                padding: 0,
                                                marginLeft: '-2%'
                                              }}
                                            >
                                              <b> Masuk</b>
                                            </Button>
                                          </Typography>
                                        )}

                                        <div style={{ marginTop: 20 }}>
                                          <Grid
                                            align="center"
                                            container
                                            spacing={3}
                                          >
                                            <Grid item xs={12}>
                                              <Button
                                                variant="contained"
                                                style={{
                                                  backgroundColor: '#56C25C',
                                                  borderRadius: 4,
                                                  boxShadow:
                                                    ' 0px 5px 10px rgba(66, 181, 73, 0.46)',
                                                  color: 'white',
                                                  width: 200,
                                                  textTransform: 'none'
                                                }}
                                                className={classes.button}
                                                onClick={signupWithEmail}
                                              >
                                                <b>Daftar</b>
                                              </Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                              <Button
                                                style={{
                                                  color: '#9FA3A6',
                                                  width: 200,
                                                  textTransform: 'none'
                                                }}
                                                className={classes.button}
                                                onClick={() => setClick(!click)}
                                              >
                                                <b>Batalkan</b>
                                              </Button>
                                            </Grid>
                                          </Grid>
                                        </div>
                                      </div>
                                    ) : (
                                      <CircularProgress
                                        style={{ color: 'white' }}
                                        disableShrink
                                      />
                                    )}
                                  </div>
                                )}
                              </Box>
                            </ThemeProvider>
                          )}
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div align="center">
                <CircularProgress style={{ color: 'white' }} disableShrink />
              </div>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

const maxStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserLogin: user => dispatch(setUserIsLogin(user))
  };
};

export default withRouter(
  connect(maxStateToProps, mapDispatchToProps)(FirebaseLogin)
);
