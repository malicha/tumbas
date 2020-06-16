import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from 'axios';
import Pagination from './Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: 10,
    position: 'relative'
  },
  img: {
    height: '100%',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 7
  }
});

class Component extends React.Component {
  state = {
    activeStep: 0,
    sliders: []
  };

  getSliders = async () => {
    const res = await axios.get(
      'https://dashboard.tumbasin.id/wp-json/wp/v2/media?media_category[]=164'
    );
    return res.data;
  };

  async componentDidMount() {
    const sliders = await this.getSliders();
    this.setState({
      sliders
    });
  }

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

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {this.state.sliders.map((step, index) => (
            <div key={step.source_url}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.source_url}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Pagination
          dots={this.state.sliders.length}
          index={activeStep}
          onChangeIndex={this.handleChangeIndex}
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
