import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '../../components/app-bar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import currencyFormatter from '../../utilities/currency-formatter';
import BottomSheet from '../../components/bottom-sheet';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import TopSeller from '../../components/top-seller';
import Loading from '../../components/loading';
import { Divider } from '@material-ui/core';
import KosongVector from '../../vector/kosongVector.svg';

class Component extends React.Component {
  state = {
    topSeller: [],
    isLoading: true
  };

  async componentDidMount() {
    const cartItems = localStorage.getItem('cart_items');

    if (cartItems) {
      this.props.restoreItems(JSON.parse(cartItems));
    }
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { classes, history, cartItems, subTotalPrice } = this.props;
    if (cartItems < 1) {
      this.props.history.push('/');
    }
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Container
            elevation={0}
            component="main"
            maxWidth="xs"
            className={classes.container}
          >
            <CssBaseline />
            <AppBar title="Keranjang Belanja" goBack={true} />
            <Paper elevation={0} className={classes.body}>
              {subTotalPrice < 1 && (
                <div>
                  <div align="center" className={classes.empty}>
                    <img src={KosongVector} />
                  </div>

                  <Box
                    display="flex"
                    justifyContent="center"
                    m={1}
                    p={1}
                    bgcolor="background.paper"
                  >
                    <Typography align="center" variant="subtitle1" gutterBottom>
                      <strong>Keranjangmu masih kosong nih :(</strong>
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="center"
                    m={1}
                    p={1}
                    bgcolor="background.paper"
                  >
                    <Typography
                      align="center"
                      className={classes.caption}
                      variant="caption"
                      gutterBottom
                    >
                      <p>Cari produk kebutuhanmu hari ini,</p>
                      <p>yuk belanja sekarang!</p>
                    </Typography>
                    <div className={classes.stickToBottom}>
                      <Paper className={classes.paperbtn}>
                        <Button
                          style={{
                            backgroundColor: '#56C25C',
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'none'
                          }}
                          variant="contained"
                          fullWidth={true}
                          onClick={() => this.props.history.push('/')}
                        >
                          Belanja Sekarang
                        </Button>
                      </Paper>
                    </div>
                  </Box>
                </div>
              )}
              {cartItems.length > 0 && (
                <div>
                  <Grid container spacing={0} style={{ paddingTop: '2%' }}>
                    <Grid item xs={6}>
                      <Typography
                        style={{ marginLeft: 7 }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>Total produk: {cartItems.length}</b>
                      </Typography>
                    </Grid>
                    <Grid align="right" item xs={6}>
                      <Button
                        onClick={() => history.push('/')}
                        disableRipple={true}
                        style={{
                          backgroundColor: '#FFFFFF',
                          color: '#42B549',
                          textTransform: 'none',
                          padding: 0,
                          fontSize: 12,
                          marginRight: 7
                        }}
                      >
                        <b>Tambah lagi</b>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )}

              {cartItems &&
                cartItems.map(item => {
                  const uom = item.meta_data.filter(
                    p => p.key === '_woo_uom_input'
                  );
                  return (
                    <div>
                      <Box key={item.id} className={classes.paper}>
                        <Grid container spacing={0}>
                          <Grid item xs={3}>
                            <img
                              alt="Sayur"
                              className={classes.img}
                              src={
                                item.images[0]
                                  ? item.images[0].src
                                  : 'https://via.placeholder.com/150'
                              }
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>{item.name || '-'}</b>
                            </Typography>
                            <Typography
                              style={{ marginTop: 25 }}
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>
                                {currencyFormatter.format(item.currentPrice)}
                              </b>
                              <b style={{ color: 'grey', fontSize: 10 }}>
                                {' '}
                                /{uom[0].value || '-'}
                              </b>
                            </Typography>
                          </Grid>

                          <Grid
                            style={{ display: 'flex', alignItems: 'flex-end' }}
                            item
                            xs={3}
                          >
                            <ButtonGroup
                              size="small"
                              aria-label="Small outlined button group"
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '-webkit-fill-available',
                                marginRight: 1
                              }}
                            >
                              <Button
                                onClick={() => {
                                  this.props.distractItem(item);
                                }}
                                style={{
                                  color: '#C4C4C4',
                                  borderRadius: 4,
                                  border: '1px solid #C4C4C4',
                                  maxWidth: 25,
                                  minWidth: 25,
                                  maxHeight: 25,
                                  minHeight: 25,
                                  padding: 1
                                }}
                              >
                                -
                              </Button>
                              <Button
                                style={{
                                  border: '0',
                                  fontWeight: 'bold',
                                  fontSize: 12,
                                  maxWidth: 25,
                                  minWidth: 25,
                                  maxHeight: 25,
                                  minHeight: 25,
                                  padding: 1
                                }}
                              >
                                {item.qty}
                              </Button>
                              <Button
                                onClick={() => {
                                  this.props.addItem(item);
                                }}
                                style={{
                                  color: '#ffffff',
                                  backgroundColor: '#42B549',
                                  borderRadius: 4,
                                  border: '1px solid #42B549',
                                  maxWidth: 25,
                                  minWidth: 25,
                                  maxHeight: 25,
                                  minHeight: 25,
                                  padding: 1
                                }}
                              >
                                +
                              </Button>
                            </ButtonGroup>
                          </Grid>
                        </Grid>
                      </Box>
                      <Divider />
                    </div>
                  );
                })}
            </Paper>
          </Container>
        )}
        {subTotalPrice > 0 && (
          <BottomSheet
            name="Lanjutkan Transaksi"
            link={() => history.push('/cart-shipment')}
            price={subTotalPrice}
          />
        )}
      </React.Fragment>
    );
  }
}
export default Component;
