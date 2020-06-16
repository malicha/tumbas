import React from 'react';
import AppBar from '../../components/app-bar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import currencyFormatter from '../../utilities/currency-formatter';
import Typography from '@material-ui/core/Typography';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import Loading from '../../components/loading';
import axios from 'axios';
import firebase from 'firebase';
import moment from 'moment';
import bag from '../../vector/bagVector.svg';
import home from '../../vector/homeVector.svg';
import arrow from '../../vector/arrowVector.svg';
import pasar from '../../vector/rumahorder.svg';
import tujuan from '../../vector/lok.svg';
import rumah from '../../vector/dirumahVector.svg';
import transfer from '../../vector/transferVector.svg';
import info from '../../vector/infoVector.svg';
import upload from '../../vector/uploadVector.svg';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getOrderDetails, cancelOrder } from '../../services/orders';
import wa from '../../vector/wasmall.svg';
import { withRouter } from 'react-router-dom';

class Component extends React.Component {
  state = {
    isLoading: true,
    orderId: null,
    order: {},
    expanded: false,
    isOpen: false,
    confirm: false
  };
  async componentDidMount() {
    const orderId = this.props.match.params.id;
    const userToken = await firebase.auth().currentUser.getIdToken();
    const headers = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Access-Control-Allow-Origin': true
      }
    };
    const response = await getOrderDetails(orderId, headers);
    const data = response.data;

    this.setState({
      isLoading: false,
      order: data
    });
  }

  botSendError = error => {
    axios.get('https://api.muctool.de/whois').then(response => {
      const data = response.data;
      axios.post(
        'https://api.telegram.org/bot861570655:AAHWhNqltmMKFnhQRt-QHr34BSz-4AeuFUs/sendMessage',
        {
          chat_id: -312868350,
          text: `!!! GET ORDER DETAIL !!! : 
  Message: ${JSON.stringify(error.message)}
  Name: ${JSON.stringify(error.name)}
  Stack: ${JSON.stringify(error.stack)}
  Url: ${JSON.stringify(error.config.url)}
  Method: ${JSON.stringify(error.config.method)}
  TransformRequest: ${JSON.stringify(error.config.transformRequest)}
  TransformResponse: ${JSON.stringify(error.config.transformResponse)}
  
  !! IDENTITY !!:
  Ip: ${JSON.stringify(data.ip)}
  Isp: ${JSON.stringify(data.isp)}
  Country: ${JSON.stringify(data.country)}
  Browser: ${navigator.userAgent}`
        }
      );
    });
  };

  closeConfirm = () => {
    this.setState({ confirm: false });
  };

  cancelOrderConfirm = () => {
    this.setState({ confirm: true });
  };

  cancelOrder = async => {
    this.setState({ isOpen: true, confirm: false });
    const orderId = this.props.match.params.id;
    const data = {
      status: 'cancelled'
    };
    cancelOrder(orderId, data).then(() => {
      this.props.history.push('/orders');
    });
  };
  render() {
    const { classes, history } = this.props;
    const hourOrder = moment(this.state.order.date_created).format('HH');
    const createOrder = new Date(moment(this.state.order.date_created));
    const nextDay = new Date(createOrder);
    nextDay.setDate(createOrder.getDate() + 1);

    const paperStyle = () => {
      if (this.state.order.status === 'Proses') {
        return { paddingBottom: 5 };
      }
    };

    const handleEx = () => {
      this.setState({ expanded: !this.state.expanded });
    };

    const orderDelivered = () => {
      if (hourOrder >= 8) {
        return nextDay;
      } else {
        return createOrder;
      }
    };

    const colorFunc = () => {
      if (this.state.order.status === 'Proses') {
        return { color: '#00AC0F' };
      } else {
        return { color: 'red' };
      }
    };
    if (this.state.isLoading) {
      return <Loading />;
    }
    if (this.state.order.status === 'completed') {
      this.state.order.status = 'Selesai';
    }
    if (this.state.order.status === 'pending') {
      this.state.order.status = 'Proses';
    }
    if (this.state.order.status === 'processing') {
      this.state.order.status = 'Proses';
    }
    if (this.state.order.status === 'cancelled') {
      this.state.order.status = 'Dibatalkan';
    }
    if (this.state.order.status === 'trash') {
      this.state.order.status = 'Dibatalkan';
    }

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />

          <AppBar title="Detail Transaksi" goBack={true} />
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                style={{ color: '#9FA3A6', margin: 7 }}
              >
                <b>Kode Belanja - {this.state.order.id}</b>
              </Typography>
            </Grid>
            <Grid align="right" item xs={6}>
              <Typography
                style={{ margin: 7 }}
                variant="subtitle2"
                display="block"
                gutterBottom
              >
                <b>Status:</b>
                <b style={colorFunc()}> {this.state.order.status}</b>
              </Typography>
            </Grid>
          </Grid>

          <Paper elevation={0} className={classes.paper}>
            <List className={classes.root}>
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
                    <b>
                      {moment(this.state.order.date_created).format(
                        'DD MMMM YYYY'
                      )}
                    </b>
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
                    <img src={home} style={{ marginRight: 7 }} />
                    Tanggal Pengantaran
                  </Typography>
                  <Typography
                    style={{ marginRight: 10, marginTop: 10 }}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <b>{moment(orderDelivered()).format('DD MMMM YYYY')}</b>
                  </Typography>
                </Grid>
              </Grid>
            </List>
          </Paper>

          <Paper elevation={0} className={classes.paper}>
            <List className={classes.root}>
              <Grid container spacing={0}>
                <Grid item xs={1}>
                  <img src={pasar} style={{ marginLeft: 7, marginTop: 10 }} />
                  <div
                    style={{
                      marginLeft: 15,
                      marginTop: 10,
                      backgroundColor: 'silver',
                      borderRadius: 8,
                      height: 5,
                      width: 5
                    }}
                  ></div>
                  <div
                    style={{
                      marginLeft: 15,
                      marginTop: 10,
                      backgroundColor: 'silver',
                      borderRadius: 8,
                      height: 5,
                      width: 5
                    }}
                  ></div>
                  <div
                    style={{
                      marginLeft: 15,
                      marginTop: 10,
                      backgroundColor: 'silver',
                      borderRadius: 8,
                      height: 5,
                      width: 5
                    }}
                  ></div>
                </Grid>
                <Grid style={{ padding: 10 }} item xs={11}>
                  <Typography variant="caption">
                    {this.state.order.vendor ? (
                      <b>{this.state.order.vendor.display_name}</b>
                    ) : (
                      <b>tumbasin.id</b>
                    )}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={1}>
                  <img src={tujuan} style={{ marginLeft: 7, marginTop: 10 }} />
                </Grid>
                <Grid style={{ padding: 10 }} item xs={11}>
                  <Typography variant="caption">
                    {this.state.order.shipping.address_1}
                  </Typography>
                </Grid>
              </Grid>
              <Divider style={{ marginTop: 10 }} variant="middle" />
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ margin: 12 }}
              >
                <b>Catatan Order</b>
              </Typography>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ margin: 12 }}
              >
                <b>{this.state.order.customer_note}</b>
              </Typography>
            </List>
          </Paper>

          <Paper elevation={0} className={classes.paperlist}>
            <List className={classes.root}>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ margin: 12 }}
              >
                <b>Ringkasan Pesanan</b>
              </Typography>
              {this.state.order.line_items.length >= 1 && (
                <div>
                  <Grid container spacing={0}>
                    <Grid item xs={2}>
                      <Typography
                        style={{ marginLeft: 15 }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>{this.state.order.line_items[0].quantity + 'x'}</b>
                      </Typography>
                    </Grid>
                    <Grid align="left" item xs={7}>
                      <Typography
                        style={{ color: '#4E5356' }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {this.state.order.line_items[0].name}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {currencyFormatter.format(
                          this.state.order.line_items[0].price
                        )}
                      </Typography>
                    </Grid>
                    <Grid align="right" item xs={3}>
                      <Typography
                        style={{ marginRight: 15 }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>
                          {currencyFormatter.format(
                            this.state.order.line_items[0].total
                          )}
                        </b>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider style={{ marginBottom: 10 }} variant="middle" />
                </div>
              )}
              {this.state.order.line_items.length >= 2 && (
                <div>
                  <Grid container spacing={0}>
                    <Grid item xs={2}>
                      <Typography
                        style={{ marginLeft: 15 }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>{this.state.order.line_items[1].quantity + 'x'}</b>
                      </Typography>
                    </Grid>
                    <Grid align="left" item xs={7}>
                      <Typography
                        style={{ color: '#4E5356' }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {this.state.order.line_items[1].name}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {currencyFormatter.format(
                          this.state.order.line_items[1].price
                        )}
                      </Typography>
                    </Grid>
                    <Grid align="right" item xs={3}>
                      <Typography
                        style={{ marginRight: 15 }}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>
                          {currencyFormatter.format(
                            this.state.order.line_items[1].total
                          )}
                        </b>
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              )}
              {this.state.order.line_items.length >= 3 && (
                <div>
                  <Collapse in={this.state.expanded}>
                    {this.state.order.line_items
                      .slice(2, this.state.order.line_items.length)
                      .map(item => {
                        return (
                          <div>
                            <Divider
                              style={{ marginBottom: 10 }}
                              variant="middle"
                            />
                            <Grid container spacing={0}>
                              <Grid item xs={2}>
                                <Typography
                                  style={{ marginLeft: 15 }}
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  <b>{item.quantity + 'x'}</b>
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
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  {currencyFormatter.format(item.price)}
                                </Typography>
                              </Grid>
                              <Grid align="right" item xs={3}>
                                <Typography
                                  style={{ marginRight: 15 }}
                                  variant="caption"
                                  display="block"
                                  gutterBottom
                                >
                                  <b>{currencyFormatter.format(item.total)}</b>
                                </Typography>
                              </Grid>
                            </Grid>
                          </div>
                        );
                      })}
                  </Collapse>
                  <ExpansionPanel elevation={0} onClick={handleEx}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
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
            className={classes.paper}
          >
            <List className={classes.root}>
              <ListItem>
                <Grid container spacing={0}>
                  <Grid align="left" item xs={9}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Subtotal
                      </Typography>
                    </ListItemText>
                  </Grid>
                  <Grid align="right" item xs={3}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>
                          {currencyFormatter.format(
                            this.state.order.total -
                              this.state.order.shipping_total
                          )}
                        </b>
                      </Typography>
                    </ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container spacing={0}>
                  <Grid align="left" item xs={9}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Ongkos Kirim
                      </Typography>
                    </ListItemText>
                  </Grid>
                  <Grid align="right" item xs={3}>
                    <ListItemText>
                      <ListItemText>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          <b>
                            {currencyFormatter.format(
                              this.state.order.shipping_total
                            )}
                          </b>
                        </Typography>
                      </ListItemText>
                    </ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container spacing={0}>
                  <Grid align="left" item xs={9}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Diskon
                      </Typography>
                    </ListItemText>
                  </Grid>
                  <Grid align="right" item xs={3}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>{currencyFormatter.format(0)}</b>
                      </Typography>
                    </ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </List>

            <List className={classes.total}>
              <ListItem>
                <Grid container spacing={0}>
                  <Grid align="left" item xs={9}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>Total Pembayaran</b>
                      </Typography>
                    </ListItemText>
                  </Grid>
                  <Grid align="right" item xs={3}>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <b>
                          {currencyFormatter.format(this.state.order.total)}
                        </b>
                      </Typography>
                    </ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Paper>
        </Container>

        <div className={classes.stickToBottom}>
          <Paper className={classes.paperbtn}>
            {this.state.order.status === 'Proses' ? (
              <Typography variant="caption" display="block" gutterBottom>
                {/* Butuh bantuan? */}
              </Typography>
            ) : (
              <Typography variant="caption" display="block" gutterBottom>
                {/* Laporkan masalah */}
              </Typography>
            )}

            <Grid container spacing={1}>
              {this.state.order.status === 'Proses' ? (
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#56C25C',
                      textTransform: 'none',
                      boxShadow: '0px 5px 10px rgba(237, 107, 90, 0.3)'
                    }}
                    fullWidth={true}
                    className={classes.Button}
                    a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=62 811 229 7774&text=Hai Mesermang, mau tanya dong"
                  >
                    <b>Konfirmasi Pemesanan</b>
                  </Button>
                  <Button
                    onClick={this.cancelOrderConfirm}
                    style={{ color: '#9FA3A6', textTransform: 'none' }}
                    fullWidth={true}
                  >
                    <b>Batalkan Pemesanan</b>
                  </Button>
                  <Grid item xs={12} style={{ paddingBottom: '15px' }}>
                    <Typography style={{ fontSize: 12 }}>
                      Laporkan Masalah
                    </Typography>
                  </Grid>
                  <Button
                    a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=62 811 229 7774&text=Hai Mesermang, mau tanya dong"
                    style={{
                      color: '#42D2A9',
                      textTransform: 'none',
                      backgroundColor: 'none',
                      border: '1px solid #40D2A7',
                      borderRadius: 5
                    }}
                    fullWidth={true}
                  >
                    {/* <img src={wa} /> */}

                    <b>Hubungi CS Kami</b>
                  </Button>
                  <Dialog open={this.state.confirm} onClose={this.closeConfirm}>
                    {/* <DialogTitle id="alert-dialog-title">
                      {'Batalkan Order'}
                    </DialogTitle> */}
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <b style={{ color: 'black', textAlign: 'center' }}>
                          Anda yakin untuk membatalkan order ?
                        </b>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions align="left">
                      <Button
                        onClick={this.closeConfirm}
                        color="primary"
                        style={{
                          backgroundColor: 'none',
                          border: '1px solid #F15B5D',
                          color: '#F15B5D',
                          textTransform: 'none',
                          fontWeight: 'bold'
                        }}
                      >
                        Tidak, kembali
                      </Button>
                      <Button
                        onClick={this.cancelOrder}
                        color="primary"
                        autoFocus
                        style={{ fontWeight: 'bold', color: '#9FA3A6' }}
                      >
                        Ya, batalkan
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={this.state.isOpen}
                  >
                    <DialogContent align="center" dividers>
                      <CircularProgress />
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Harap tunggu
                      </Typography>
                    </DialogContent>
                  </Dialog>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#56C25C',
                      textTransform: 'none',
                      boxShadow: '0px 5px 10px rgba(237, 107, 90, 0.3)'
                    }}
                    fullWidth={true}
                    className={classes.Button}
                    onClick={() => {
                      this.props.history.push('/');
                    }}
                  >
                    <b>Belanja Lagi, Yuk!</b>
                  </Button>

                  <Button
                    a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=6282242861268&text=Hai Tumbasin, mau tanya dong"
                    style={{
                      color: '#42D2A9',
                      textTransform: 'none',
                      backgroundColor: 'none',
                      border: '1px solid #40D2A7',
                      borderRadius: 5,
                      marginTop: 13
                    }}
                    fullWidth={true}
                  >
                    {/* <img src={wa} /> */}

                    <b>Hubungi CS Kami</b>
                  </Button>
                </Grid>
              )}
            </Grid>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Component);
