import React from 'react';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withRouter } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import currencyFormatter from '../../utilities/currency-formatter';
import Grid from '@material-ui/core/Grid';
import CartBag from '../../vector/bagWhite.svg';

class Component extends React.Component {
  state = {
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar'))
  };
  render() {
    const { classes } = this.props;
    const item = this.props.cartItems;
    const { subTotalPrice } = this.props;
    const homeStyle = () => {
      // return { marginBottom: this.props.marginBottom };
      if (window.location.pathname === '/') {
        return { marginBottom: 41 };
      }
    };

    const fabStyle = () => {
      // return { marginBottom: this.props.marginBottom };
      if (window.location.pathname === '/') {
        return {
          width: '100%',
          maxWidth: 445,
          position: 'fixed',
          bottom: 30,
          backgroundColor: 'white',
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 0
        };
      } else {
        return {
          width: '100%',
          maxWidth: 445,
          position: 'fixed',
          bottom: 0,
          height: 50,
          backgroundColor: 'white',
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 0
        };
      }
    };

    return (
      <React.Fragment>
        {item.length > 0 && (
          <Paper style={fabStyle()}>
            <Paper
              className={classes.fab}
              onClick={() => {
                this.props.history.push(this.props.to);
              }}
              style={homeStyle()}
            >
              <Grid
                container
                spacing={0}
                style={{
                  paddingLeft: 20,
                  marginBottom: 5,
                  marginTop: 5,
                  paddingTop: 5,
                  paddingBottom: 5
                }}
              >
                <Grid item xs={10}>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    style={{
                      fontSize: 10,
                      marginBottom: -5,
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}
                  >
                    {item.length} Item |{' '}
                    {currencyFormatter.format(subTotalPrice)} (estimasi)
                  </Typography>
                  <Typography
                    variant="caption"
                    style={{ fontSize: 8, fontSize: 12 }}
                  >
                    {this.state.selectedPasar.display_name}
                  </Typography>
                </Grid>

                <Grid item xs={2} style={{ paddingLeft: 10, paddingTop: 5 }}>
                  <img src={CartBag} style={{ fontSize: 20 }} />
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Component);
