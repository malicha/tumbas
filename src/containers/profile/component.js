import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import firebase from 'firebase';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { setUserIsLogin } from '../../store/actions/auth';
import { connect } from 'react-redux';
import facebook from '../../vector/facebook.svg';
import arrowRight from '../../vector/arrowRight.svg';
import Button from '@material-ui/core/Button';
import profilBG from '../../vector/profilBG.svg';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import Instagram from '../../vector/insta.svg';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#153b50' },
    secondary: { main: '#11cb5f' },
    paddingTop: 0
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  '.MuiList-padding-387': {
    paddingTop: 0
  }
});
class Component extends React.Component {
  state = {
    data: {},
    user: {}
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('users'));
    const data = firebase.auth().currentUser;
    this.setState({ user, data });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.setUserIsLogin(null);
        // window.location.href = `/login?ref=/${window.location.pathname}`;
        localStorage.removeItem('users');
      });
  };
  render() {
    const { classes, history } = this.props;
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />

          <AppBar
            elevation={0}
            position="static"
            className={classes.appbar}
            divider
          >
            <Toolbar>
              <Grid item xs={12} className={classes.profilApp}>
                <Typography className={classes.textProfil}>
                  <b>Profil</b>
                </Typography>
                <Button
                  disableRipple={true}
                  style={{
                    color: '#42B549',
                    background: '#FFFFFF',
                    textTransform: 'none',
                    fontSize: 16
                  }}
                >
                  {/* <b>Edit</b> */}
                </Button>
              </Grid>
            </Toolbar>
          </AppBar>

          <Paper
            elevation={0}
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className={classes.root}
          >
            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Avatar
                  alt="Remy Sharp"
                  // src={this.state.data.photoUrl}
                  src={
                    this.state.data.photoURL
                      ? this.state.data.photoURL
                      : profilBG
                  }
                  className={classes.bigAvatar}
                />
              </Grid>
              <Grid
                item
                xs={9}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '9%'
                }}
              >
                <Typography
                  className={classes.nama}
                  variant="subtitle2"
                  display="block"
                  gutterBottom
                  align="left"
                >
                  <b>
                    {this.state.data.displayName
                      ? this.state.data.displayName
                      : 'User'}
                  </b>
                  <p style={{ fontSize: 10, color: '#4E5356' }}>
                    {this.state.data.email
                      ? this.state.data.email
                      : 'User@email.com'}
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={0}
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className={classes.roots}
          >
            <Grid container spacing={0}>
              <Grid style={{ marginBottom: 5 }} align="left" item xs={12}>
                <Typography
                  variant="subtitle2"
                  display="block"
                  gutterBottom
                  align="left"
                >
                  <b>Ikuti Kami</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mesermang.id/"
                  style={{ color: '#F15B5D', textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    fullWidth={true}
                    style={{
                      background:
                        'linear-gradient(263.26deg, #DA01C7 0.12%, #E8016C 21.42%, #F70125 41.17%, #FF7201 69.22%, #FFD101 96.76%)',
                      color: 'white',
                      textTransform: 'none',
                      minHeight: 50,
                      maxHeight: 50
                    }}
                  >
                    <img
                      style={{ position: 'absolute', left: 15 }}
                      src={Instagram}
                    />
                    <b style={{ marginLeft: 30 }}>Follow Us On Instagram</b>
                  </Button>
                </a>
              </Grid>

              <Grid item xs={12} style={{ marginTop: '4%' }}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/mesermang.id/"
                  style={{ color: '#F15B5D', textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    fullWidth={true}
                    style={{
                      backgroundColor: '#3660B9',
                      color: 'white',
                      textTransform: 'none',
                      minHeight: 50,
                      maxHeight: 50
                    }}
                  >
                    <img
                      style={{ position: 'absolute', left: 21 }}
                      src={facebook}
                    />
                    <b style={{ marginLeft: 30 }}>Follow Us On Facebook</b>
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={0}
            style={{
              backgroundColor: '#FFFFFF',
              marginTop: '3%',
              boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.05)'
            }}
            // className={classes.roots}
          >
            <List component="nav">
              <ListItem
                button
                onClick={() => history.push('/term-of-use')}
                style={{ padding: '1%' }}
              >
                <ListItemText
                  style={{ color: '#707585', paddingLeft: '3%' }}
                  primary="Syarat Penggunaan"
                />
                <img
                  style={{ position: 'absolute', right: 20 }}
                  src={arrowRight}
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem
                button
                onClick={() => history.push('/privacy-policy')}
                style={{ padding: '1%' }}
              >
                <ListItemText
                  style={{ color: '#707585', paddingLeft: '3%' }}
                  primary="Kebijakan Privasi"
                />
                <img
                  style={{ position: 'absolute', right: 20 }}
                  src={arrowRight}
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem
                button
                onClick={() => history.push('/about-us')}
                style={{ padding: '1%' }}
              >
                <ListItemText
                  style={{ color: '#707585', paddingLeft: '3%' }}
                  primary="Tentang Kami"
                />
                <img
                  style={{ position: 'absolute', right: 20 }}
                  src={arrowRight}
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem button onClick={this.signOut} style={{ padding: '1%' }}>
                <ListItemText
                  style={{
                    color: '#F15B5D',
                    fontWeight: 'bold',
                    paddingLeft: '3%'
                  }}
                  primary="Keluar"
                />
              </ListItem>
            </List>
          </Paper>

          <Grid item xs={12} className={classes.versi}>
            <Typography className={classes.textVersi}>
              Mesermang v.1.0.0
            </Typography>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

// const logout = () => {
//   firebase.auth().signOut();
//   return <Redirect path="/" />;
// };

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserIsLogin: user => dispatch(setUserIsLogin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
