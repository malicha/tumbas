import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import currencyFormatter from '../../utilities/currency-formatter';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import vectorInfo from '../../vector/Vectorinfo.svg';
import vectorPasar from '../../vector/Vectorpasar.svg';
import Typography from '@material-ui/core/Typography';

class Component extends React.Component {
  state = {
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar'))
  };

  render() {
    const { classes, price } = this.props;
    return (
      <Box
        className={classes.box}
        display="flex"
        justifyContent="center"
        bgcolor="white"
      >
        <div className={classes.stickToBottom}>
          <Paper className={classes.paperbtn}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                Total Pembayaran
              </Grid>
              <Grid align="right" item xs={6}>
                {currencyFormatter.format(price)}
              </Grid>
              {window.location.pathname === '/cart' && (
                <Grid item xs={12}>
                  <Typography
                    style={{ color: 'grey' }}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <img src={vectorInfo} />
                    {'  '}belum termasuk biaya antar
                  </Typography>
                  <Divider
                    style={{ marginBottom: 5, marginTop: 5, width: '100%' }}
                  />
                  <Typography variant="caption" display="block" gutterBottom>
                    Kamu Belanja Di: <img src={vectorPasar} />{' '}
                    <b>{this.state.selectedPasar.display_name}</b>
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12}>
                <Button
                  style={{
                    backgroundColor: '#56C25C',
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 'bold'
                  }}
                  variant="contained"
                  fullWidth={true}
                  onClick={this.props.link}
                >
                  <ShoppingCartIcon style={{ fontSize: 16, marginRight: 10 }} />
                  {this.props.name}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Box>
    );
  }
}
export default Component;
