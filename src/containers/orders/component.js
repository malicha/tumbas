import React from 'react';
import AppBar from '../../components/app-bar';
import CardOrder from '../../components/card-order';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import ContentLoader from 'react-content-loader';
import { getOrders } from '../../services/orders';
import Kosong from '../../vector/transaksikosong.svg';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const MyLoader = () => (
  <ContentLoader
    height={375}
    width={400}
    speed={1}
    primaryColor="#ededed"
    secondaryColor="#d1d1d1"
  >
    <rect x="13" y="31" rx="5" ry="5" width="368" height="72" />
    <rect x="14" y="117" rx="5" ry="5" width="368" height="72" />
    <rect x="14" y="204" rx="5" ry="5" width="228" height="72" />
    <rect x="14" y="292" rx="5" ry="5" width="172" height="44" />
  </ContentLoader>
);

class Component extends React.Component {
  state = {
    orders: [],
    isLoading: true,
    filterStatus: []
  };

  async componentDidMount() {
    const users = JSON.parse(localStorage.getItem('users'));
    const email = users.email;
    const response = await getOrders(email);
    const orders = response.data;
    console.log(orders, 'orders');
    const filterPen = response.data.filter(item => {
      return (
        item.status == 'wc-processing' ||
        item.status == 'wc-on-hold' ||
        item.status == 'wc-pending'
      );
    });

    console.log(filterPen);
    orders.sort((a, b) => (a.status > b.status ? 1 : -1));

    this.setState({
      orders: orders,
      isLoading: false,
      filterStatus: filterPen
    });
  }

  botSendError = error => {
    axios.get('https://api.muctool.de/whois').then(response => {
      const data = response.data;
      axios.post(
        'https://api.telegram.org/bot861570655:AAHWhNqltmMKFnhQRt-QHr34BSz-4AeuFUs/sendMessage',
        {
          chat_id: -312868350,
          text: `!!! GET ORDERS DATA !!! : 
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
  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar title="Daftar Transaksi" historyOrder />
          <Paper elevation={0} className={classes.paper}>
            <div align="center">
              {this.state.isLoading ? (
                <MyLoader />
              ) : (
                <React.Fragment>
                  {this.state.filterStatus.length == 0 && (
                    <React.Fragment>
                      <Grid
                        container
                        style={{
                          flexDirection: 'column',
                          display: 'flex',
                          alignItems: 'center',
                          paddingTop: '20%'
                        }}
                      >
                        <img src={Kosong} />
                        <b
                          style={{
                            paddingTop: 22,
                            color: '#14181B',
                            fontSize: 16
                          }}
                        >
                          Tidak ada catatan transaksi disini
                        </b>
                        <p style={{ fontSize: 12 }}>
                          Kembali ke{' '}
                          <span
                            style={{ color: 'red', fontWeight: 'bold' }}
                            onClick={() => {
                              this.props.history.push('/');
                            }}
                          >
                            Beranda
                          </span>{' '}
                          untuk mulai belanja
                        </p>
                      </Grid>
                    </React.Fragment>
                  )}
                  <ListOrders orders={this.state.orders} />
                </React.Fragment>
              )}
            </div>
          </Paper>
        </div>
      </Container>
    );
  }
}

class ListOrders extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.orders.map(order => {
          if (
            order.status === 'wc-processing' ||
            order.status === 'wc-pending' ||
            order.status === 'wc-on-hold'
          )
            return <CardOrder key={order.id} order={order} />;
        })}
      </React.Fragment>
    );
  }
}

export default withRouter(Component);
