import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/Poll';
import Receipt from '@material-ui/icons/Receipt';
import HelpIcon from '@material-ui/icons/LiveHelp';
import { withRouter } from 'react-router-dom';
import { Person } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import home from '../../vector/home.svg';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
  root: {
    width: '100%'
  },
  stickToBottom: {
    width: '100%',
    maxWidth: 446,
    position: 'fixed',
    bottom: 0,
    border: '0px solid #e0e0e0',
    boxShadow: '0px 0px 2px #9e9e9e'
  },
  root: {
    color: '#a3a3a3',
    fill: '#a3a3a3',
    '&$selected': {
      color: '#56C25C',
      fill: '#56C25C'
    }
  },
  selected: {}
};

class BottomNavigationApp extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    let value = 0;
    switch (this.props.location.pathname) {
      case '/':
        value = 0;
        break;
      case '/orders':
        value = 1;
        break;
      case '/help':
        value = 2;
        break;
      case '/profile':
        value = 3;
        break;
      default:
        value = 0;
    }
    this.setState({ value: value });
  }

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0:
        this.props.history.push('/');
        return;
      case 1:
        this.props.history.push('/orders');
        return;
      case 2:
        this.props.history.push('/help');
        return;
      case 3:
        this.props.history.push('/profile');
        return;
      default:
        return;
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const actionClasses = this.props.classes;

    return (
      <Box
        boxShadow={1}
        display="flex"
        justifyContent="center"
        bgcolor="background.paper"
      >
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.stickToBottom}
        >
          <BottomNavigationAction
            classes={actionClasses}
            label={<b style={{ fontSize: 11 }}>Belanja</b>}
            icon={
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  classes={actionClasses}
                  d="M20 7.786L18.143 1.07A1.376 1.376 0 0016.786 0H3.214C2.571 0 2 .429 1.857 1.071L0 7.786v.785c0 .429.286.715.714.715h1.429v10c0 .428.286.714.714.714h14.286c.428 0 .714-.286.714-.714v-10h1.429c.428 0 .714-.286.714-.715V7.93v-.143zm-4.286 5.428c0 .215-.143.357-.357.357H4.643c-.214 0-.357-.142-.357-.357V9.286h11.428v3.928z"
                />
              </svg>
            }
          />
          <BottomNavigationAction
            classes={actionClasses}
            label={<b style={{ fontSize: 11 }}>Transaksi</b>}
            icon={
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  classes={actionClasses}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 15H3V13H15V15ZM15 11H3V9H15V11ZM15 7H3V5H15V7ZM0 20L1.5 18.5L3 20L4.5 18.5L6 20L7.5 18.5L9 20L10.5 18.5L12 20L13.5 18.5L15 20L16.5 18.5L18 20V0L16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0L1.5 1.5L0 0V20Z"
                />
              </svg>
            }
          />
          <BottomNavigationAction
            classes={actionClasses}
            label={<b style={{ fontSize: 11 }}>Bantuan</b>}
            icon={
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  classes={actionClasses}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H6L9 21L12 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM10 16H8V14H10V16ZM12.07 8.25L11.17 9.17C10.45 9.9 10 10.5 10 12H8V11.5C8 10.4 8.45 9.4 9.17 8.67L10.41 7.41C10.78 7.05 11 6.55 11 6C11 4.9 10.1 4 9 4C7.9 4 7 4.9 7 6H5C5 3.79 6.79 2 9 2C11.21 2 13 3.79 13 6C13 6.88 12.64 7.68 12.07 8.25Z"
                />
              </svg>
            }
          />
          <BottomNavigationAction
            classes={actionClasses}
            label={<b style={{ fontSize: 11 }}>Profile</b>}
            icon={
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  classes={actionClasses}
                  d="M8.52 10.56C11.171 10.56 13.32 8.41093 13.32 5.75996C13.32 3.10899 11.171 0.959961 8.52 0.959961C5.86903 0.959961 3.72 3.10899 3.72 5.75996C3.72 8.41093 5.86903 10.56 8.52 10.56Z"
                />
                <path
                  classes={actionClasses}
                  d="M8.52 11.52C6.48313 11.52 4.5297 12.3292 3.08942 13.7694C1.64914 15.2097 0.839996 17.1632 0.839996 19.2V19.68C0.839996 19.8073 0.890568 19.9294 0.980585 20.0194C1.0706 20.1094 1.19269 20.16 1.32 20.16H15.72C15.8473 20.16 15.9694 20.1094 16.0594 20.0194C16.1494 19.9294 16.2 19.8073 16.2 19.68V19.2C16.2 17.1632 15.3909 15.2097 13.9506 13.7694C12.5103 12.3292 10.5569 11.52 8.52 11.52Z"
                />
              </svg>
            }
          />
        </BottomNavigation>
      </Box>
    );
  }
}

BottomNavigationApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(BottomNavigationApp));
