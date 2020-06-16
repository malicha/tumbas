import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import splash from '../../vector/splash.svg';
import logo from '../../vector/logomesermang.png';

const styles = theme => ({
  container: {
    backgroundColor: 'white',
    backgroundImage: `url(${splash})`,
    height: '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  progress: {
    color: '#3ACA96'
  },
  image: {
    width: 130,
    marginBottom: '30%'
  }
});
class SplashScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.container}>
        <CssBaseline />

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <img alt="tumbasin" src={logo} className={classes.image} />
          </Grid>
          <Grid item xs={12}>
            <CircularProgress className={classes.progress} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(SplashScreen);
