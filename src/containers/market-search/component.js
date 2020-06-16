import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';

class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <AppBar className={classes.appbar} position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBack />
            </IconButton>
            <div>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography
                    style={{ color: 'white', fontSize: 11 }}
                    variant="caption"
                    gutterBottom
                  >
                    Your location
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{ color: 'white' }}
                    variant="caption"
                    gutterBottom
                  >
                    Jalan Majapahit
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    );
  }
}
export default Component;
