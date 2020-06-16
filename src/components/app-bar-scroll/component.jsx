import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import BackButton from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LocationOn from '@material-ui/icons/LocationOn';
import Store from '@material-ui/icons/Store';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HistoryIcon from '@material-ui/icons/History';
import MarketVector from '../../vector/marketVector.svg';
import DownVector from '../../vector/downVector.svg';

class Component extends React.Component {
  state = {
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar'))
  };

  goBack = () => {
    if (this.props.location.search) {
      const query = queryString.parse(this.props.location.search);
      if (query.from) {
        this.props.history.push(query.from);
        return;
      }
    }

    switch (this.props.match.path) {
      // case '/cart':
      //   this.props.history.push('/');
      //   break;

      case '/product/:id':
        this.props.history.goBack();
        break;

      case '/order-history':
        this.props.history.goBack('/orders');
        break;

      case '/category/:id':
        this.props.history.push('/');
        break;

      case '/order/:id/':
        this.props.history.push('/orders');
        break;

      case '/cart-shipment':
        this.props.history.push('/cart');
        break;

      case '/cart':
        this.props.history.push('/');
        break;

      default:
        this.props.history.goBack();
        break;
    }
  };

  render() {
    const { classes, history } = this.props;
    return (
      <AppBar elevation={1} position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <img style={{ marginTop: 5 }} src={MarketVector} />
            </Grid>
            <Grid style={{ paddingLeft: 14 }} item xs={7}>
              <Typography
                style={{
                  marginTop: 10,
                  paddingRight: 0,
                  color: 'black'
                }}
                variant="subtitle2"
                gutterBottom
              >
                <b>{this.state.selectedPasar.display_name}</b>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <img
                onClick={() => this.props.history.push('/market')}
                style={{ marginTop: 10 }}
                src={DownVector}
              />
            </Grid>
            <Grid align="right" item xs={3}>
              <SearchIcon
                onClick={() => this.props.history.push('/product-search')}
                style={{ color: '#707585', marginTop: 5 }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

Component.propTypes = {
  title: PropTypes.element.isRequired,
  backTo: PropTypes.string
};

Component.defaultProps = {
  title: 'Belanja'
};

export default withRouter(withStyles(styles)(Component));
