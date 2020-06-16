import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../../components/app-bar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';
import currencyFormatter from '../../utilities/currency-formatter';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import firebase from 'firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import bag from '../../vector/bag.svg';
import arrow from '../../vector/arrow.svg';
import home from '../../vector/rumah.svg';
import info from '../../vector/info.svg';
import inet from '../../vector/inet.svg';
import server from '../../vector/server.svg';
import vectorPasar from '../../vector/Vectorpasar.svg';
import cod from '../../vector/cash.svg';
import atm from '../../vector/atm.svg';
import garis from '../../vector/garis.svg';
import moment from 'moment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import LoadingOrder from '../loading-order';
import { createOrder, getLastOrders } from '../../services/orders';
import Slide from '@material-ui/core/Slide';
import { ReactComponent as Inet } from '../../vector/poorconnection.svg';
import { ReactComponent as silang } from '../../vector/silang.svg';
import { ReactComponent as Server } from '../../vector/serverBusy.svg';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Full from '../../vector/full.svg';
import Ig from '../../vector/ig.svg';
import Mandiri from '../../vector/mandiri.svg';
import BCA from '../../vector/bca.svg';
import BNI from '../../vector/bni.svg';
import Instagram from '../../vector/insta.svg';
import facebook from '../../vector/facebook.svg';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  palette: {
    background: {
      default: '#FBFDFF'
    },
    primary: {
      main: '#42B549'
    }
  }
});

class Component extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    payment_method: '',
    isLoading: false,
    today: false,
    tomorrow: false,
    isLogin: false,
    buy: false,
    note: '',
    ongkir: '10000',
    keyboard: false,
    lastOrder: [],
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar')),
    data: {},
    user: {},
    isOpen: false,
    hasOpen: false,
    expanded: false,
    networkError: true,
    isOrderOpen: true
  };

  async componentDidMount() {
    const cartItems = localStorage.getItem('cart_items');

    const users = JSON.parse(localStorage.getItem('users'));
    const data = firebase.auth().currentUser;

    console.log(data);

    if (this.props.subTotalPrice >= 100000) {
      this.setState({ ongkir: '0' });
    }

    if (users) {
      const lastOrder = await this.getLastOrder();
      await localStorage.setItem('lastOrder', lastOrder);
    }

    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    users &&
      this.setState({
        user: users,
        data: data,
        name: data.displayName,
        email: data.email,
        phone: lastOrder[0] ? lastOrder[0].phone : '',
        address: lastOrder[0] ? lastOrder[0].address : ''
      });

    cartItems && this.props.restoreItems(JSON.parse(cartItems));
    users &&
      this.setState({
        email: users.email
      });

    if (users === null) {
    } else {
      this.setState({ isLogin: true });
    }
  }

  handleClose = () => {
    this.setState({ hasOpen: false });
  };

  handleKeyboardOpen = action => {
    this.setState({ keyboard: !this.state.keyboard });
  };

  handleKeyboardClose = () => {
    this.setState({ keyboard: false });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  ///promise
  handleOnFocus = callback => {
    this.setState({ keyboard: false });
    callback();
  };

  focusCallback = () => {
    window.addEventListener('resize', this.handleKeyboardOpen);
  };

  handleOnBlur = callback => {
    window.removeEventListener('resize', this.handleKeyboardOpen);
    callback();
  };

  blurCallback = () => {
    this.setState({ keyboard: false });
  };

  ///get last order
  getLastOrder = async () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const email = users.email;
    const response = await getLastOrders(email);
    return JSON.stringify(response.data);
  };

  orderNow = async () => {
    const remoteConfig = firebase.remoteConfig();
    remoteConfig.settings = {
      minimumFetchIntervalMillis: 0
    };
    await remoteConfig.fetchAndActivate();
    const OpenOrder = remoteConfig.getBoolean('is_order_open');

    if (OpenOrder === false) {
      this.setState({ isOrderOpen: false });
      return;
    }
    if (this.state.name === '') {
      alert('Mohon isi Nama');
      return;
    }
    if (this.state.email === '') {
      alert('Mohon isi Email');
      return;
    }
    if (this.state.phone === '') {
      alert('Mohon isi No Telepon');
      return;
    }
    if (this.state.address === '') {
      alert('Mohon isi Alamat');
      return;
    }
    if (this.state.payment_method === '') {
      alert('Mohon Pilih Metode Pembayaran');
      return;
    }

    if (this.props.cartItems.length === 0) {
      alert('Tidak ada barang di Keranjang Belanja');
      return;
    }
    this.setState({ buy: !this.state.buy });
    this.setState({ isOpen: true });
    await localStorage.setItem('user_form_data', JSON.stringify(this.state));

    this.createOrder();
  };

  createOrder = async () => {
    const { cartItems, history } = this.props;
    const {
      payment_method,
      name,
      address,
      email,
      phone,
      note,
      ongkir,
      selectedPasar
    } = JSON.parse(localStorage.getItem('user_form_data'));
    const line_items =
      cartItems &&
      cartItems.map(item => {
        return {
          product_id: item.id,
          quantity: item.qty
        };
      });

    await this.setState({ isLoading: true });

    const order = {
      order: {
        payment_method: 'bacs',
        payment_method_title: 'Transfer Bank',
        customer_note: note,
        set_paid: false,
        billing: {
          first_name: name.trim(),
          last_name: 'customer',
          address_1: address.trim(),
          address_2: '',
          city: 'Semarang',
          state: 'Jawa Tengah',
          postcode: '50265',
          country: 'Indonesia',
          email: email.trim(),
          phone: phone.trim()
        },
        shipping: {
          first_name: name.trim(),
          last_name: name.trim(),
          address_1: address.trim(),
          address_2: '',
          city: 'Semarang',
          state: 'Jawa Tengah',
          postcode: '50265',
          country: 'Indonesia'
        },
        meta_data: [
          {
            key: '_vendor_id',
            value: selectedPasar.vendor_id
          }
        ],
        line_items: line_items,
        shipping_lines: [
          {
            method_id: 'flat_rate',
            method_title: 'Flat Rate',
            total: ongkir
          }
        ]
      }
    };

    try {
      const result = await createOrder(order);

      if (result.data.id) {
        localStorage.setItem('respon', JSON.stringify(result.data.id));
        localStorage.removeItem('cart_items');
        this.props.cartStateSetDefault();
        history.push('/cart-success');
      } else {
        this.setState({ isLoading: false });
        this.setState({ buy: false });

        this.setState({ hasOpen: true });
        this.setState({ isOpen: false });
      }
    } catch (error) {
      console.log(error);
      if (error === 'Error: Network Error') {
        this.setState({ networkError: false });
      }
      this.setState({ isLoading: false });
      this.setState({ buy: false });

      this.setState({ hasOpen: true });
      this.setState({ isOpen: false });
    }
  };

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  render() {
    const {
      name,
      email,
      phone,
      address,
      payment_method,
      note,
      keyboard
    } = this.state;
    const { classes, subTotalPrice, cartItems } = this.props;
    const batasHariIni = new Date();
    const batasan = batasHariIni.getHours();
    const hariIni = new Date();
    const getJam = hariIni.getHours();
    const isLogin = this.state.isLogin;
    const besok = new Date(hariIni);
    besok.setDate(hariIni.getDate() + 1);

    const handleEx = () => {
      this.setState({ expanded: !this.state.expanded });
    };

    const errorStyle = () => {
      // if (window.screen.height < 667) {
      //   return { marginTop: 220 };
      // } else {
      //   return { marginTop: 300 };
      // }
    };
    if (this.state.isOpen) {
      return <LoadingOrder />;
    }

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Container
            className={classes.container}
            component="main"
            maxWidth="xs"
          >
            <CssBaseline />
            <AppBar title="Pesan" goBack={true} />
            <Paper elevation={0} className={classes.body}>
              <List className={classes.root}>
                <Typography variant="subtitle1" display="block" gutterBottom>
                  <b>Detail Pengiriman</b>
                </Typography>
                <TextField
                  onFocus={() => {
                    window.addEventListener('resize', this.handleKeyboardOpen);
                  }}
                  onBlur={() => {
                    window.removeEventListener(
                      'resize',
                      this.handleKeyboardOpen
                    );
                    this.setState({ keyboard: false });
                  }}
                  id="standard-full-width"
                  label="Nama Lengkap"
                  fullWidth
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  onFocus={() => {
                    window.addEventListener('resize', this.handleKeyboardOpen);
                  }}
                  onBlur={() => {
                    window.removeEventListener(
                      'resize',
                      this.handleKeyboardOpen
                    );
                    this.setState({ keyboard: false });
                  }}
                  multiline
                  rows="3"
                  id="standard-full-width"
                  label="Alamat Pengantaran"
                  onChange={this.handleChange}
                  fullWidth
                  name="address"
                  value={address}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  onFocus={() => {
                    window.addEventListener('resize', this.handleKeyboardOpen);
                  }}
                  onBlur={() => {
                    window.removeEventListener(
                      'resize',
                      this.handleKeyboardOpen
                    );
                    this.setState({ keyboard: false });
                  }}
                  id="standard-full-width"
                  label="Alamat Email"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  onFocus={() => {
                    window.addEventListener('resize', this.handleKeyboardOpen);
                  }}
                  onBlur={() => {
                    window.removeEventListener(
                      'resize',
                      this.handleKeyboardOpen
                    );
                    this.setState({ keyboard: false });
                  }}
                  id="standard-full-width"
                  label="Nomor Telepon"
                  fullWidth
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  type="number"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  onFocus={() => {
                    window.addEventListener('resize', this.handleKeyboardOpen);
                  }}
                  onBlur={() => {
                    window.removeEventListener(
                      'resize',
                      this.handleKeyboardOpen
                    );
                    this.setState({ keyboard: false });
                  }}
                  id="standard-multiline-static"
                  label="Catatan Order"
                  fullWidth
                  multiline
                  rows="3"
                  name="note"
                  value={note}
                  onChange={this.handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </List>
            </Paper>
            <Paper elevation={0} className={classes.body}>
              <Grid className={classes.grid} container spacing={0}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" display="block" gutterBottom>
                    <b>Tanggal Pengiriman</b>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={5}>
                  <Typography style={{ marginLeft: 10 }} variant="caption">
                    <img src={bag} style={{ marginRight: 7 }} />
                    Tanggal Order
                  </Typography>
                  <Typography
                    style={{ marginLeft: 10, marginTop: 10 }}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <b>{moment(hariIni).format('DD MMMM YYYY')}</b>
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <img src={arrow} />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    align="right"
                    style={{ marginRight: 7 }}
                    variant="caption"
                  >
                    <img src={home} style={{ marginRight: 5 }} />
                    Tanggal Pengantaran
                  </Typography>
                  <Typography
                    style={{ marginRight: 10, marginTop: 10 }}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <b>{moment(besok).format('DD MMMM YYYY')}</b>
                  </Typography>
                </Grid>
              </Grid>
              <div style={{ padding: 10 }}>
                <Grid
                  style={{
                    backgroundColor: '#F2F2F2',
                    borderRadius: 8,
                    padding: 7
                  }}
                  container
                  spacing={0}
                >
                  <Grid
                    align="center"
                    item
                    xs={1}
                    style={{ paddingTop: '1.5%' }}
                  >
                    <img src={info} />
                  </Grid>
                  <Grid align="left" item xs={11}>
                    <Typography variant="caption">
                      Pengantaran akan dilakukan H+1. Order sekarang sebelum
                      quota habis atau sebelum pukul 21.00, mamang akan
                      mengantar besok pagi jam 6 sampai jam 11 siang.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Paper>

            <Paper elevation={0} className={classes.body}>
              <Grid className={classes.grid} container spacing={0}>
                <Grid style={{ marginBottom: 20 }} item xs={12}>
                  <Typography variant="subtitle2" display="block" gutterBottom>
                    <b>Metode Pembayaran</b>
                  </Typography>
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      style={{ display: 'flex', alignItems: 'flex-start' }}
                      onChange={this.handleChange}
                      name="payment_method"
                      value={payment_method}
                    >
                      <FormControlLabel
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                        value="Bayar di Tempat"
                        control={
                          <Radio
                            style={{ position: 'absolute', right: 5 }}
                            color="default"
                          />
                        }
                        labelPlacement="start"
                        label={
                          <div>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <img style={{ width: 20 }} src={cod} />
                              {'  '}Bayar Via COD (Cash On Delivery)
                            </Typography>
                            <Typography
                              className={classes.transferdetail}
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <p>Cara pembayaran :</p>
                              <ul
                                style={{
                                  paddingRight: 40,
                                  marginLeft: -25,
                                  listStyleImage: `url(${garis})`
                                }}
                              >
                                <li>
                                  Lakukan pembayaran setelah barang diterima
                                </li>
                              </ul>
                            </Typography>
                          </div>
                        }
                      />
                      <Divider
                        variant="fullWidth"
                        style={{
                          marginTop: 10,
                          marginBottom: 10,
                          width: '100%'
                        }}
                      />
                      <FormControlLabel
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                        value="Transfer Bank"
                        control={
                          <Radio
                            style={{ position: 'absolute', right: 5 }}
                            color="default"
                          />
                        }
                        labelPlacement="start"
                        label={
                          <div>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <img style={{ width: 20 }} src={atm} />
                              {'  '}Via Transfer Antar Bank
                            </Typography>
                            <Typography
                              className={classes.transferdetail}
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <p>Cara pembayaran :</p>
                              <ul
                                style={{
                                  paddingRight: 40,
                                  marginLeft: -25,
                                  listStyleImage: `url(${garis})`
                                }}
                              >
                                <li>
                                  Lakukan pembayaran ke rekening BCA Tumbasin
                                  sesuai total belanjaan ke 8715122291 A/N Tri
                                  Asworo Mituhu Subekti
                                </li>
                                <li>
                                  Konfirmasi ke Admin Tumbasin
                                  Telephone/WhatsApp 08224286 1268
                                </li>
                                <li>
                                  Kirim bukti pembayaran berupa (Struk atau
                                  screenshoot pembayaran)
                                </li>
                              </ul>
                            </Typography>
                          </div>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid> */}
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                      onChange={this.handleChange}
                      name="payment_method"
                      value={payment_method}
                    >
                      <div>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          <img style={{ width: 20 }} src={atm} />
                          {'  '}Via Transfer Antar Bank
                        </Typography>
                        <Typography
                          className={classes.transferdetail}
                          variant="caption"
                          display="block"
                          gutterBottom
                        ></Typography>
                      </div>
                      <FormControlLabel
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start'
                        }}
                        value="Transfer Bank Mandiri"
                        control={<Radio color="default" />}
                        // labelPlacement="end%
                        label={
                          <div
                            style={{
                              display: 'flex',
                              flexGrow: 1,
                              flexDirection: 'column'
                            }}
                          >
                            <div>
                              <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginLeft: -10
                                }}
                              >
                                <img src={Mandiri} />
                                {'  '}Bank Mandiri
                              </Typography>
                            </div>
                            {payment_method === 'Transfer Bank Mandiri' && (
                              <>
                                <Grid container spacing={0}>
                                  <Grid item xs={12}>
                                    <Typography
                                      variant="caption"
                                      display="block"
                                      gutterBottom
                                      style={{ fontSize: 10 }}
                                    >
                                      a.n PT. Qurban Juara Indonesia
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={9}>
                                    <Typography
                                      variant="caption"
                                      display="block"
                                      gutterBottom
                                      style={{ fontSize: 12 }}
                                    >
                                      <b>1310065326532</b>
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    align="right"
                                    style={{ marginTop: -12 }}
                                    item
                                    xs={3}
                                  >
                                    <Button
                                      onClick={() => {
                                        navigator.clipboard.writeText(
                                          '1310065326532'
                                        );
                                      }}
                                      size="small"
                                      className={classes.btnCoppy}
                                      variant="outlined"
                                      color="primary"
                                    >
                                      COPY
                                    </Button>
                                  </Grid>
                                </Grid>
                                <Divider />
                              </>
                            )}
                          </div>
                        }
                      />
                      <FormControlLabel
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                        value="Transfer Bank BCA"
                        control={<Radio color="default" />}
                        // labelPlacement="end"
                        label={
                          <>
                            <div>
                              <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginLeft: -10
                                }}
                              >
                                <img src={BCA} />
                                {'  '}Bank BCA
                              </Typography>
                            </div>
                            {payment_method === 'Transfer Bank BCA' && (
                              <>
                                <Grid container spacing={0}>
                                  <Grid item xs={12}>
                                    <Typography
                                      variant="caption"
                                      display="block"
                                      gutterBottom
                                      style={{ fontSize: 10 }}
                                    >
                                      a.n PT. Gilang Agas Triansyah
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={9}>
                                    <Typography
                                      variant="caption"
                                      display="block"
                                      gutterBottom
                                      style={{ fontSize: 12 }}
                                    >
                                      <b>4490142814</b>
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    align="right"
                                    style={{ marginTop: -12 }}
                                    item
                                    xs={3}
                                  >
                                    <Button
                                      onClick={() => {
                                        navigator.clipboard.writeText(
                                          '1310065326532'
                                        );
                                      }}
                                      size="small"
                                      className={classes.btnCoppy}
                                      variant="outlined"
                                      color="primary"
                                    >
                                      COPY
                                    </Button>
                                  </Grid>
                                </Grid>
                                <Divider />
                              </>
                            )}
                          </>
                        }
                      />
                      <FormControlLabel
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                        value="Transfer Bank BNI"
                        control={<Radio color="default" />}
                        // labelPlacement="end"
                        label={
                          <>
                            <div>
                              <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginLeft: -10
                                }}
                              >
                                <img src={BNI} />
                                {'  '}Bank BNI
                              </Typography>
                            </div>
                            {payment_method === 'Transfer Bank BNI' && (
                              <>
                                <Grid container spacing={0}>
                                  <Grid item xs={12}>
                                    <Typography
                                      variant="caption"
                                      display="block"
                                      gutterBottom
                                      style={{ fontSize: 10 }}
                                    >
                                      a.n Gilang Agas Triansyah
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={9}>
                                    <Typography
                                      variant="caption"
                                      display="block"
                                      gutterBottom
                                      style={{ fontSize: 12 }}
                                    >
                                      <b>0948843239</b>
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    align="right"
                                    style={{ marginTop: -12 }}
                                    item
                                    xs={3}
                                  >
                                    <Button
                                      onClick={() => {
                                        navigator.clipboard.writeText(
                                          '1310065326532'
                                        );
                                      }}
                                      size="small"
                                      className={classes.btnCoppy}
                                      variant="outlined"
                                      color="primary"
                                    >
                                      COPY
                                    </Button>
                                  </Grid>
                                </Grid>
                                <Divider />
                              </>
                            )}
                          </>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider />
              <div style={{ padding: 10 }}>
                <Typography
                  className={classes.transferdetail}
                  // variant="caption"
                  display="block"
                  gutterBottom
                >
                  <p>Cara pembayaran :</p>
                  <ul
                    style={{
                      paddingRight: 40,
                      marginLeft: -25,
                      listStyleImage: `url(${garis})`
                    }}
                  >
                    <li>
                      Lakukan pembayaran ke rekening MeserMang! sesuai total
                      belanja
                    </li>
                    <li style={{ paddingTop: '2%' }}>
                      Konfirmasi ke admin MeserMang! Whatsapp ke 08112297774
                    </li>
                    <li style={{ paddingTop: '2%' }}>
                      Kirim bukti pembayaran berupa (struk atau screenshot
                      pembayaran)
                    </li>
                  </ul>
                </Typography>
              </div>
            </Paper>
            <Paper elevation={0} className={classes.body}>
              <List className={classes.grid}>
                <ListItem>
                  <Typography variant="subtitle2" display="block" gutterBottom>
                    <b>Detail Pesanan</b>
                  </Typography>
                </ListItem>
              </List>

              <List className={classes.grid}>
                {cartItems.length >= 1 && (
                  <div>
                    {cartItems.slice(0, 2).map(item => {
                      const unitOfMeansure = item.meta_data.filter(
                        meta_data => meta_data.key === '_woo_uom_input'
                      );
                      return (
                        <div>
                          <Grid style={{ marginTop: 7 }} container spacing={0}>
                            <Grid item xs={2}>
                              <Typography
                                style={{ marginLeft: 15 }}
                                variant="caption"
                                display="block"
                                gutterBottom
                              >
                                <b>{item.qty + 'x'}</b>
                              </Typography>
                            </Grid>
                            <Grid align="left" item xs={7}>
                              <Typography
                                style={{ color: '#4E5356' }}
                                variant="caption"
                                display="block"
                                gutterBottom
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                style={{ color: '#4E5356' }}
                                variant="caption"
                                display="block"
                                gutterBottom
                              >
                                {currencyFormatter.format(item.currentPrice)}/
                                {item.meta_data[0]
                                  ? item.meta_data[0].value
                                  : ''}
                              </Typography>
                              {item.on_sale === true && (
                                <Typography
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  <b
                                    style={{
                                      textDecoration: 'line-through',
                                      color: 'grey'
                                    }}
                                  >
                                    {currencyFormatter.format(
                                      item.currentPrice
                                    )}
                                  </b>
                                  {currencyFormatter.format(item.sale_price)}/{' '}
                                  {unitOfMeansure[0].value || '-'}
                                </Typography>
                              )}
                              {item.on_sale === false && (
                                <Typography
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  {currencyFormatter.format(item.currentPrice)}/{' '}
                                  {unitOfMeansure[0].value || '-'}
                                </Typography>
                              )}
                            </Grid>
                            <Grid align="right" item xs={3}>
                              <Typography
                                style={{ marginRight: 15 }}
                                variant="caption"
                                display="block"
                                gutterBottom
                              >
                                {currencyFormatter.format(item.totalPrice)}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Divider style={{ margiTop: 30 }} variant="middle" />
                        </div>
                      );
                    })}
                  </div>
                )}
                {cartItems.length >= 3 && (
                  <div>
                    <Collapse in={this.state.expanded}>
                      {cartItems.slice(2, cartItems.length).map(item => {
                        const unitOfMeansure = item.meta_data.filter(
                          meta_data => meta_data.key === '_woo_uom_input'
                        );
                        return (
                          <div>
                            <Grid
                              style={{ marginTop: 7 }}
                              container
                              spacing={0}
                            >
                              <Grid item xs={2}>
                                <Typography
                                  style={{ marginLeft: 15 }}
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  <b>{item.qty + 'x'}</b>
                                </Typography>
                              </Grid>
                              <Grid align="left" item xs={7}>
                                <Typography
                                  style={{ color: '#4E5356' }}
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  {item.name}
                                </Typography>
                                {item.on_sale === true && (
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    <b
                                      style={{
                                        textDecoration: 'line-through',
                                        color: 'grey'
                                      }}
                                    >
                                      {currencyFormatter.format(
                                        item.currentPrice
                                      )}
                                    </b>
                                    {currencyFormatter.format(item.sale_price)}/{' '}
                                    {unitOfMeansure[0].value || '-'}
                                  </Typography>
                                )}
                                {item.on_sale === false && (
                                  <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                  >
                                    {currencyFormatter.format(
                                      item.currentPrice
                                    )}
                                    / {unitOfMeansure[0].value || '-'}
                                  </Typography>
                                )}
                              </Grid>
                              <Grid align="right" item xs={3}>
                                <Typography
                                  style={{ marginRight: 15 }}
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  {currencyFormatter.format(item.totalPrice)}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Divider
                              style={{ margiTop: 30 }}
                              variant="middle"
                            />
                          </div>
                        );
                      })}
                    </Collapse>
                    <ExpansionPanel
                      style={{
                        backgroundColor: 'white',
                        background: 'white',
                        border: 0
                      }}
                      elevation={0}
                      onClick={handleEx}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={handleEx}
                      >
                        {this.state.expanded === false ? (
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                          >
                            Lebih detail
                          </Typography>
                        ) : (
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                          >
                            Lebih singkat
                          </Typography>
                        )}
                      </ExpansionPanelSummary>
                    </ExpansionPanel>
                  </div>
                )}
              </List>
            </Paper>
            <Paper
              style={{ marginBottom: 150 }}
              elevation={0}
              className={classes.body}
            >
              <Grid style={{ padding: 20 }} container spacing={0}>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Subtotal
                  </Typography>
                </Grid>
                <Grid align="right" item xs={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {currencyFormatter.format(subTotalPrice)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Ongkos Kirim
                  </Typography>
                </Grid>
                {subTotalPrice >= 100000 ? (
                  <Grid align="right" item xs={6}>
                    <Typography variant="caption" display="block" gutterBottom>
                      {currencyFormatter.format(0)}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid align="right" item xs={6}>
                    <Typography variant="caption" display="block" gutterBottom>
                      {currencyFormatter.format(10000)}
                    </Typography>
                  </Grid>
                )}

                <Grid item xs={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Diskon
                  </Typography>
                </Grid>
                <Grid align="right" item xs={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {currencyFormatter.format(0)}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            {keyboard === false && (
              <div className={classes.stickToBottom}>
                <Divider />
                <Grid className={classes.grid} container spacing={0}>
                  <Grid item xs={6}>
                    <Typography variant="caption" display="block" gutterBottom>
                      <b>Total Pembayaran</b>
                    </Typography>
                  </Grid>
                  {subTotalPrice >= 100000 ? (
                    <Grid align="right" item xs={6}>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {currencyFormatter.format(subTotalPrice + 0)}
                      </Typography>
                    </Grid>
                  ) : (
                    <Grid align="right" item xs={6}>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {currencyFormatter.format(subTotalPrice + 10000)}
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Divider
                      style={{ marginBottom: 5, marginTop: 5, width: '100%' }}
                    />
                    <Typography variant="caption" display="block" gutterBottom>
                      Kamu Belanja Di: <img src={vectorPasar} />{' '}
                      <b>{this.state.selectedPasar.display_name}</b>
                    </Typography>
                  </Grid>
                </Grid>

                <Paper className={classes.paperbtn}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <div>
                        {this.state.payment_method === '' ? (
                          <Button
                            className={classes.button}
                            disable
                            style={{
                              backgroundColor: '#9FA3A6',
                              boxShadow: '0px 5px 10px rgba(237, 107, 90, 0.3)'
                            }}
                            variant="contained"
                            fullWidth={true}
                          >
                            Pesan Sekarang
                          </Button>
                        ) : (
                          <Button
                            className={classes.button}
                            style={{
                              backgroundColor: '#56C25C',
                              boxShadow: '0px 5px 10px rgba(237, 107, 90, 0.3)'
                            }}
                            variant="contained"
                            fullWidth={true}
                            onClick={this.orderNow}
                          >
                            Pesan Sekarang
                          </Button>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            )}
            <Dialog
              style={errorStyle()}
              classes={{ paperFullScreen: classes.fullPaper }}
              fullScreen
              open={this.state.hasOpen}
              onClose={this.handleClose}
              TransitionComponent={this.Transition}
            >
              <div align="left">
                <IconButton
                  style={{ padding: 5 }}
                  aria-label="Menu"
                  onClick={this.handleClose}
                >
                  <Clear />
                </IconButton>
              </div>
              {this.state.networkError === true ? (
                <React.Fragment>
                  <div style={{ marginTop: 10 }} align="center">
                    <Inet />
                    <Typography variant="caption" display="block" gutterBottom>
                      <b>Yah, koneksi internet kamu terputus</b>
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Cek dulu koneksi internet kamu. Sudah oke, kamu bisa coba
                      akses lagi.
                    </Typography>
                  </div>
                  <div
                    style={{
                      padding: 15
                    }}
                  >
                    <Button
                      className={classes.button}
                      style={{ backgroundColor: '#56C25C' }}
                      variant="contained"
                      fullWidth={true}
                      onClick={this.orderNow}
                    >
                      Pengaturan
                    </Button>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div style={{ marginTop: 10 }} align="center">
                    <Server />
                    <Typography variant="caption" display="block" gutterBottom>
                      <b>Ups.. server sibuk nih</b>
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Internal server Tumbasin lagi kurang fit nih. Tunggu
                      beberapa saat lagi dan tekan coba lagi ya.
                    </Typography>
                  </div>
                  <div
                    style={{
                      padding: 15
                    }}
                  >
                    <Button
                      className={classes.button}
                      style={{ backgroundColor: '#56C25C' }}
                      variant="contained"
                      fullWidth={true}
                      onClick={this.orderNow}
                    >
                      Coba Lagi
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </Dialog>
            <Dialog
              classes={{ paperFullScreen: classes.fullPaper }}
              style={errorStyle()}
              fullScreen
              open={!this.state.isOrderOpen}
              onClose={() => this.setState({ isOrderOpen: true })}
              TransitionComponent={this.Transition}
            >
              <div align="left">
                <IconButton
                  style={{ padding: 5 }}
                  aria-label="Menu"
                  onClick={() => this.setState({ isOrderOpen: true })}
                >
                  <Clear />
                </IconButton>
              </div>
              <div align="center">
                <img src={Full} style={{ height: 150 }} />
                <div style={{ paddingLeft: 60, paddingRight: 60 }}>
                  <Typography variant="title2" display="block" gutterBottom>
                    <b>Wah, belanjaan hari ini sudah penuh :(</b>
                  </Typography>
                </div>
              </div>

              <Grid container spacing={0} className={classes.gridText}>
                <Grid item xs={12} style={{ marginTop: '6%' }}>
                  <Typography className={classes.text}>
                    <b>Ikuti Kami</b>
                  </Typography>
                </Grid>

                <Grid item xs={12} style={{ marginTop: '4%' }}>
                  <Button
                    onClick={() => {
                      window.open(
                        'https://www.instagram.com/mesermang.id/',
                        '_blank'
                      );
                    }}
                    variant="contained"
                    fullWidth={true}
                    style={{
                      background:
                        'linear-gradient(263.26deg, #DA01C7 0.12%, #E8016C 21.42%, #F70125 41.17%, #FF7201 69.22%, #FFD101 96.76%)',
                      color: 'white',
                      textTransform: 'none',
                      minHeight: 50,
                      maxHeight: 50
                    }}
                  >
                    <img
                      style={{ position: 'absolute', left: 15 }}
                      src={Instagram}
                    />
                    <b style={{ marginLeft: 30 }}>Follow Us On Instagram</b>
                  </Button>
                </Grid>

                <Grid item xs={12} style={{ marginTop: '4%' }}>
                  <Button
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/mesermang.id/',
                        '_blank'
                      );
                    }}
                    variant="contained"
                    fullWidth={true}
                    style={{
                      backgroundColor: '#3660B9',
                      color: 'white',
                      textTransform: 'none',
                      minHeight: 50,
                      maxHeight: 50
                    }}
                  >
                    <img
                      style={{ position: 'absolute', left: 21 }}
                      src={facebook}
                    />
                    <b style={{ marginLeft: 30 }}>Follow Us On Facebook</b>
                  </Button>
                </Grid>
              </Grid>
            </Dialog>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default Component;
