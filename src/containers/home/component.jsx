import React from 'react';
import Container from '@material-ui/core/Container';
import Brand from '../../components/card-brand';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Carousel from '../../components/carousel';
import FabCart from '../../components/fab-cart';
import CategoryItem from '../../components/category-item';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Loading from '../../components/loading';
import TopSeller from '../../components/top-seller';
import { Facebook } from 'react-content-loader';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import appbar from '../../vector/bgHomeTumbas.svg';
import Store from '@material-ui/icons/Store';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AppBarScroll from '../../components/app-bar-scroll';
import Spotlight from 'react-spotlight';
import Fade from '@material-ui/core/Fade';
import atas from '../../vector/atas.svg';
import ContentLoader from 'react-content-loader';
import { axiosInstance } from '../../config';
import {
  getProductTopSellers,
  getProductCategories,
  getProductBrands
} from '../../services/products';

const MyLoader = () => (
  <ContentLoader
    height={600}
    width={400}
    speed={1}
    primaryColor="#ededed"
    secondaryColor="#d1d1d1"
  >
    <circle cx="493" cy="62" r="30" />
    <rect x="9" y="13" rx="0" ry="0" width="218" height="20" />
    <rect x="12" y="49" rx="0" ry="0" width="64" height="66" />
    <rect x="14" y="125" rx="0" ry="0" width="60" height="10" />
    <rect x="87" y="48" rx="0" ry="0" width="64" height="66" />
    <rect x="167" y="46" rx="0" ry="0" width="64" height="66" />
    <rect x="242" y="44" rx="0" ry="0" width="64" height="66" />
    <rect x="316" y="42" rx="0" ry="0" width="64" height="66" />
    <rect x="94" y="124" rx="0" ry="0" width="60" height="10" />
    <rect x="244" y="124" rx="0" ry="0" width="60" height="10" />
    <rect x="167" y="123" rx="0" ry="0" width="60" height="10" />
    <rect x="14" y="155" rx="0" ry="0" width="64" height="66" />
    <rect x="90" y="154" rx="0" ry="0" width="64" height="66" />
    <rect x="167" y="153" rx="0" ry="0" width="64" height="66" />
    <rect x="244" y="150" rx="0" ry="0" width="64" height="66" />
    <rect x="319" y="147" rx="0" ry="0" width="64" height="66" />
    <rect x="17" y="232" rx="0" ry="0" width="60" height="10" />
    <rect x="92" y="232" rx="0" ry="0" width="60" height="12" />
    <rect x="172" y="232" rx="0" ry="0" width="60" height="10" />
    <rect x="249" y="228" rx="0" ry="0" width="60" height="10" />
    <rect x="326" y="226" rx="0" ry="0" width="60" height="10" />
    <rect x="17" y="254" rx="0" ry="0" width="367" height="90" />
    <rect x="320" y="123" rx="0" ry="0" width="60" height="10" />
    <rect x="18" y="363" rx="0" ry="0" width="64" height="66" />
    <rect x="96" y="364" rx="0" ry="0" width="286" height="64" />
    <rect x="19" y="444" rx="0" ry="0" width="64" height="66" />
    <rect x="97" y="441" rx="0" ry="0" width="286" height="64" />
  </ContentLoader>
);

class Component extends React.Component {
  state = {
    categories: [],
    brands: [],
    topSeller: [],
    isLoading: true,
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar')),
    checked: true,
    spotlight: true
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ spotlight: false });
      localStorage.setItem('firstOpen', false);
    }, 2500);
    window.onscroll = this.scrollFuction;
    const vendorId = this.state.selectedPasar.vendor_id;
    const categories = await getProductCategories();
    await localStorage.setItem('categories', JSON.stringify(categories));

    const brands = [];
    const topSeller = await getProductTopSellers(vendorId);

    this.setState({
      categories,
      brands,
      topSeller,
      isLoading: false
    });
  }

  scrollFuction = () => {
    if (window.pageYOffset >= 0) {
      this.setState({ checked: false });
    }
    if (window.pageYOffset === 0) {
      this.setState({ checked: true });
    }
  };

  botSendError = error => {
    axios.get('https://api.muctool.de/whois').then(response => {
      const data = response.data;
      axios.post(
        'https://api.telegram.org/bot861570655:AAHWhNqltmMKFnhQRt-QHr34BSz-4AeuFUs/sendMessage',
        {
          chat_id: -312868350,
          text: `!!! GET HOME DATA !!! : 
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

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    const paperStyle = () => {
      if (this.state.checked) {
        return { borderRadius: 0, minHeight: 550, paddingTop: 120 };
      } else {
        return { borderRadius: 0, minHeight: 550, paddingTop: 30 };
      }
    };

    const fabStyle = () => {
      if (this.props.cartItems.length > 0) {
        // return { marginBottom: 100 };
      }
    };

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          {this.state.checked === false && <AppBarScroll />}
          <CssBaseline />
          {!localStorage.getItem('firstOpen') && (
            <Fade in={this.state.spotlight}>
              <div>
                <Spotlight
                  x={62}
                  y={17}
                  color="#0A0A0D"
                  radius={100}
                  usePercentage
                  outerStyles={{ zIndex: 9999 }}
                >
                  <div style={{ marginTop: 200 }}>
                    <img src={atas} />
                    <h4 style={{ color: 'white' }}>
                      Tekan tombol Ganti untuk pilih pasar dan lokasi anda
                      disini
                    </h4>
                  </div>
                </Spotlight>
              </div>
            </Fade>
          )}
          <Grow in={this.state.checked}>
            {/* <AppBar home title="Belanja" search market /> */}
            <Box
              id="box"
              className={classes.appbar2}
              style={{ height: 152 }}
              display="flex"
              justifyContent="center"
              bgcolor="white"
            >
              <AppBar
                elevation={0}
                style={{
                  background: 'linear-gradient(to right, #e96443, #904e95)',
                  backgroundImage: `url(${appbar})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
                position="static"
                className={classes.appbar}
              >
                <Toolbar variant="dense">
                  <div
                    style={{ marginLeft: 0, marginTop: 20 }}
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
                </Toolbar>

                {this.props.children && (
                  <React.Fragment>{this.props.children}</React.Fragment>
                )}
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
                          marginTop: 10,
                          paddingRight: 0,
                          paddingLeft: 14
                        }}
                        variant="subtitle2"
                        gutterBottom
                      >
                        <b>{this.state.selectedPasar.display_name}</b>
                      </Typography>
                    </Grid>
                    <Grid style={{ marginTop: 5 }} item xs={2}>
                      <Button
                        size="small"
                        variant="contained"
                        style={{
                          backgroundColor: '#56C25C',
                          color: 'white',
                          textTransform: 'none',
                          fontWeight: 'bold'
                        }}
                        onClick={() => this.props.history.push('/market')}
                      >
                        Ganti
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </AppBar>
            </Box>
          </Grow>
          <Paper style={paperStyle()}>
            {this.state.isLoading ? (
              <MyLoader />
            ) : (
              <div style={{ width: '100%' }}>
                <h5 className={classes.listTitle}>
                  <strong>Telusuri Jenis Produk</strong>
                </h5>
                <Grid style={{ marginTop: 10 }} container spacing={0}>
                  {this.state.categories.slice(0, 5).map(category => (
                    <Grid
                      style={{ marginLeft: 8 }}
                      item
                      xs={2}
                      key={category.id}
                    >
                      <CategoryItem category={category} />
                    </Grid>
                  ))}
                </Grid>
                <Grid style={{ marginTop: 10 }} container spacing={0}>
                  {this.state.categories.slice(5, 11).map(category => (
                    <Grid
                      style={{ marginLeft: 8 }}
                      item
                      xs={2}
                      key={category.id}
                    >
                      <CategoryItem category={category} />
                    </Grid>
                  ))}
                </Grid>
                <Carousel />
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <h5 className={classes.listTitle2}>
                      <strong>Produk Terlaris</strong>
                    </h5>
                  </Grid>
                  <Grid align="right" item xs={6}>
                    <h6
                      onClick={() => {
                        this.props.history.push('/top-seller');
                      }}
                      className={classes.listTitle3}
                      style={{ color: '#56C25C' }}
                    >
                      Lihat semua
                    </h6>
                  </Grid>
                </Grid>
                <Grid container spacing={0} style={fabStyle()}>
                  {this.state.topSeller.slice(0, 5).map(top => (
                    <Grid key={top} item xs={12}>
                      <TopSeller top={top} />
                      <Divider />
                    </Grid>
                  ))}
                </Grid>
              </div>
            )}
            <div>
              <FabCart to="/cart?from=/" />
            </div>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default Component;
