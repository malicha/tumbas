import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import tutorialSteps from './data';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = () => ({
  root: {
    flexGrow: 1,
    borderRadius: 5
  },
  step: {
    maxWidth: 400,
    flexGrow: 1,
    paddingLeft: '45%'
  },
  img: {
    height: '100%',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 15,
    border: '5px solid white'
  },
  paper: {
    borderRadius: 15,
    maxWidth: '70%',
    padding: 5
  },
  typography: {
    color: '#153b50'
  }
});

class Component extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep, setActiveStep } = this.state;
    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div align="center">
              <Paper className={classes.paper}>
                <div key={step.imgPath}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
                <Typography className={classes.typography} variant="subtitle1">
                  <b>{step.title}</b>
                </Typography>
              </Paper>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          style={{ backgroundColor: '#153b50', color: 'red' }}
          steps={3}
          position="static"
          activeStep={activeStep}
          className={classes.step}
        />
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Component);
