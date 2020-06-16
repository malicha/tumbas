import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import splash from '../../vector/splash.svg';
import logo from '../../vector/logo.svg';
import loadingOrder from '../../vector/wait.svg';
import Typography from '@material-ui/core/Typography';
import AppBar from '../../components/app-bar';

const styles = theme => ({
  container: {
    backgroundColor: 'white',
    height: '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progress: {
    color: '#56C25C'
  },
  image: {
    marginBottom: 32
  }
});
class SplashScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar title="Pesan" />
        <Container maxWidth="xs" className={classes.container}>
          <CssBaseline />

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <img alt="tumbasin" src={loadingOrder} />
            </Grid>
            <Grid style={{ marginBottom: 80 }} align="center" item xs={12}>
              <Typography variant="subtitle2" display="block" gutterBottom>
                <b>Tunggu Sebentar..</b>
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Order kamu lagi diproses nih.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CircularProgress className={classes.progress} />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SplashScreen);
