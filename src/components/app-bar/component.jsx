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
import appbar from '../../vector/appbar.svg';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LocationOn from '@material-ui/icons/LocationOn';
import Store from '@material-ui/icons/Store';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HistoryIcon from '@material-ui/icons/History';
import Divider from '@material-ui/core/Divider';

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

      case '/login?ref=/profile':
        this.props.history.push('/');
        break;

      case '/login?ref=/orders':
        this.props.history.push('/');
        break;

      default:
        this.props.history.goBack();
        break;
    }
  };

  render() {
    const { classes, history } = this.props;
    const searchStyle = () => {
      if (window.location.pathname === '/') {
        return { marginLeft: 0, marginTop: 20 };
      } else {
        return { marginLeft: 0, backgroundColor: '#F2F2F2' };
      }
    };
    const homeStyle = () => {
      if (window.location.pathname === '/') {
        return { height: 152 };
      }
    };
    const homeAppbar = () => {
      if (window.location.pathname === '/') {
        return {
          background: 'linear-gradient(to right, #e96443, #904e95)',
          backgroundImage: `url(${appbar})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        };
      } else {
        return { backgroundColor: 'white', color: 'black' };
      }
    };
    return (
      <Box
        id="box"
        className={classes.appbar2}
        style={homeStyle()}
        display="flex"
        justifyContent="center"
        bgcolor="white"
      >
        <AppBar
          elevation={0}
          style={homeAppbar()}
          position="static"
          className={classes.appbar}
        >
          <Toolbar variant="dense">
            {this.props.goBack && (
              <IconButton
                edge="start"
                className={classes.backButton}
                aria-label="Menu"
                onClick={this.goBack}
              >
                <BackButton />
              </IconButton>
            )}
            {this.props.goBackProfile && (
              <IconButton
                edge="start"
                className={classes.backButton}
                aria-label="Menu"
                onClick={() => this.props.history.push('/')}
              >
                <BackButton />
              </IconButton>
            )}

            {this.props.search ? (
              <div
                style={searchStyle()}
                className={classes.search}
                onClick={() => {
                  this.props.history.push('/product-search');
                }}
              >
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ color: '#707585' }} />
                </div>
                <InputBase
                  placeholder="Search…"
                  style={{ color: '#707585' }}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'Search' }}
                />
              </div>
            ) : (
              <Typography
                align="left"
                variant="subtitle1"
                className={classes.title}
              >
                <strong>{this.props.title}</strong>
              </Typography>
            )}
            {this.props.historyOrder && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="Menu"
                onClick={() => {
                  this.props.history.push('/order-history');
                }}
              >
                <HistoryIcon />
              </IconButton>
            )}
            {this.props.select && (
              <Typography
                onClick={() => {
                  this.props.history.push('/');
                }}
                style={{ color: '#56C25C' }}
                variant="caption"
                className={classes.select}
              >
                <strong>Pilih Produk</strong>
              </Typography>
            )}
            {this.props.edit && (
              <Typography
                onClick={() => {}}
                style={{ color: '#F15B5D' }}
                variant="subtitle2"
                className={classes.select}
              >
                <strong>Edit</strong>
              </Typography>
            )}
          </Toolbar>
          {this.props.divider && <Divider variant="fullWidth" />}

          {this.props.children && (
            <React.Fragment>{this.props.children}</React.Fragment>
          )}
          {this.props.market && (
            <Paper
              style={{
                padding: 10,
                margin: 18,
                borderRadius: 5,
                position: 'relative',
                bottom: 0
              }}
            >
              <Grid
                container
                spacing={0}
                style={{ paddingRight: 10, paddingLeft: 10 }}
              >
                <Grid item xs={12}>
                  <Typography
                    style={{
                      color: '#4E5356'
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    Kamu Belanja Di :
                  </Typography>
                </Grid>
                <Grid style={{ marginTop: 5 }} item xs={1}>
                  <Store style={{ fontSize: 30, color: '#87CAFE' }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    style={{
                      marginBottom: -4,
                      paddingRight: 0,
                      paddingLeft: 14
                    }}
                    variant="subtitle2"
                    gutterBottom
                  >
                    <b>{this.state.selectedPasar.display_name}</b>
                  </Typography>
                  <Typography
                    style={{ paddingLeft: 16, color: '#707585', fontSize: 10 }}
                    variant="caption"
                    gutterBottom
                  >
                    {/* {this.state.selectedPasar.address} */}
                    1,3 kilometer dari lokasi Anda
                  </Typography>
                </Grid>
                <Grid style={{ marginTop: 5 }} item xs={2}>
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      backgroundColor: '#F15B5D',
                      color: 'white'
                    }}
                    onClick={() => history.push('/market')}
                  >
                    Ganti
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          )}
          {this.props.searchHelp && (
            <Grid container spacing={0}>
              <Grid style={{ padding: 10 }} item xs={12}>
                <div
                  style={{ marginLeft: 0, backgroundColor: '#F2F2F2' }}
                  className={classes.search}
                >
                  <div className={classes.searchIcon}>
                    <SearchIcon style={{ color: '#707585' }} />
                  </div>
                  <InputBase
                    placeholder="Cari solusi jawaban"
                    style={{ color: '#707585', fontSize: 12, height: 40 }}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'Search' }}
                  />
                </div>
              </Grid>
            </Grid>
          )}
        </AppBar>
      </Box>
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
