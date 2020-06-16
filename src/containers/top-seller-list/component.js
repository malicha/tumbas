import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../../components/app-bar';
import CustomAppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loading from '../../components/loading';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../../components/product-item';
import BottomSheet from '../../components/bottom-sheet';
import Paper from '@material-ui/core/Paper';
import ContentLoader from 'react-content-loader';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TopSeller from '../../components/top-seller';
import Fab from '../../components/fab-cart';
import { Divider } from '@material-ui/core';
import { getProductTopSellers } from '../../services/products';

const MyLoader = () => (
  <ContentLoader
    height={890}
    width={400}
    speed={1}
    primaryColor="#ededed"
    secondaryColor="#d1d1d1"
  >
    <rect x="13" y="44" rx="0" ry="0" width="84" height="75" />
    <rect x="106" y="44" rx="0" ry="0" width="106" height="12" />
    <rect x="108" y="71" rx="0" ry="0" width="183" height="11" />
    <rect x="108" y="95" rx="0" ry="0" width="74" height="18" />
    <rect x="305" y="72" rx="0" ry="0" width="85" height="40" />
    <rect x="14" y="137" rx="0" ry="0" width="84" height="75" />
    <rect x="109" y="137" rx="0" ry="0" width="106" height="12" />
    <rect x="111" y="165" rx="0" ry="0" width="183" height="11" />
    <rect x="112" y="191" rx="0" ry="0" width="74" height="18" />
    <rect x="307" y="164" rx="0" ry="0" width="85" height="40" />
    <rect x="14" y="226" rx="0" ry="0" width="84" height="75" />
    <rect x="111" y="224" rx="0" ry="0" width="106" height="12" />
    <rect x="111" y="256" rx="0" ry="0" width="183" height="11" />
    <rect x="113" y="280" rx="0" ry="0" width="74" height="18" />
    <rect x="306" y="256" rx="0" ry="0" width="85" height="40" />
    <rect x="15" y="315" rx="0" ry="0" width="84" height="75" />
    <rect x="109" y="316" rx="0" ry="0" width="106" height="12" />
    <rect x="111" y="344" rx="0" ry="0" width="183" height="11" />
    <rect x="110" y="367" rx="0" ry="0" width="74" height="18" />
    <rect x="306" y="338" rx="0" ry="0" width="85" height="40" />
    <rect x="16" y="404" rx="0" ry="0" width="84" height="75" />
    <rect x="113" y="403" rx="0" ry="0" width="106" height="12" />
    <rect x="112" y="428" rx="0" ry="0" width="183" height="11" />
    <rect x="113" y="458" rx="0" ry="0" width="74" height="18" />
    <rect x="304" y="433" rx="0" ry="0" width="85" height="40" />
  </ContentLoader>
);

class ProductList extends React.Component {
  state = {
    topSeller: [],
    isLoading: true,
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar'))
  };

  async componentDidMount() {
    const vendorId = this.state.selectedPasar.vendor_id;
    const topSeller = await getProductTopSellers(vendorId);

    this.setState({
      topSeller,
      isLoading: false
    });
  }

  botSendError = error => {
    axios.get('https://api.muctool.de/whois').then(response => {
      const data = response.data;
      axios.post(
        'https://api.telegram.org/bot861570655:AAHWhNqltmMKFnhQRt-QHr34BSz-4AeuFUs/sendMessage',
        {
          chat_id: -312868350,
          text: `!!! GET TOP SELLER !!! : 
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
    const { classes, history, subTotalPrice } = this.props;

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <AppBar title="Produk Terlaris" goBack={true} select />
          <Paper elevation={0} className={classes.paper}>
            <Grid container className={classes.grid}>
              {this.state.isLoading ? (
                <div style={{ width: '100%' }}>
                  <MyLoader />
                </div>
              ) : (
                this.state.topSeller.map(top => (
                  <Grid key={top} item xs={12}>
                    <TopSeller top={top} />
                    <Divider />
                  </Grid>
                ))
              )}
            </Grid>
            <div>
              <Fab to="/cart?from=/" />
            </div>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProductList;
