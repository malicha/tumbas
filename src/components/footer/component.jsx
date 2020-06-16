import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function Component(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        item
        xs={12}
        className={classes.root}
        // elevation={1}
        style={{ backgroundColor: '#0f312d' }}
      >
        <Typography
          variant='h5'
          component='h3'
          style={{
            color: 'white',
            textAlign: 'center',
            marginBottom: 5,
            fontWeight: 'bold'
          }}
        >
          SE-PASAR
        </Typography>
        <h1 className='tagline'>Segalanya jadi mudah</h1>
        <Typography
          component='p'
          style={{
            color: 'white',
            textAlign: 'center',
            marginBottom: 5,
            fontSize: '20px'
          }}
        >
          PT. Tumbas Sinergi Indonesia
        </Typography>
        <Typography
          component='p'
          style={{ color: 'white', textAlign: 'center', marginBottom: 60 }}
        >
          &#169; Copyright 2017
        </Typography>
      </Grid>
    </div>
  );
}

Component.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Component);
