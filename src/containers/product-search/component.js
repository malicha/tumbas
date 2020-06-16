import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Fab from '../../components/fab-circle';
import axios from 'axios';
import ProductItem from '../../components/product-item';
import Loading from '../../components/loading';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import BackButton from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ContentLoader from 'react-content-loader';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Clear from '@material-ui/icons/Clear';
import silang from '../../vector/silang.svg';
import kosong from '../../vector/kosong.svg';
import { getProductbyKeyword } from '../../services/products';

const MyLoader = () => (
  <ContentLoader
    height={890}
    width={400}
    speed={1}
    primaryColor="#ededed"
    secondaryColor="#d1d1d1"
  >
    <rect x="13" y="11" rx="0" ry="0" width="260" height="21" />
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

class Component extends React.Component {
  state = {
    keyword: '',
    products: [],
    isLoading: false,
    error: null,
    call: null,
    isSearchChanged: false,
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar')),
    kosong: false
  };

  async componentDidMount() {
    window.onpopstate = () => {
      if (this.state.keyword !== '') {
        this.props.history.push('/product-search');
        this.setState({ keyword: '', products: [], isLoading: false });
      }
    };
    const call = axios.CancelToken.source();
    this.setState({ call });
  }

  botSendError = error => {
    axios.get('https://api.muctool.de/whois').then(response => {
      const data = response.data;
      axios.post(
        'https://api.telegram.org/bot861570655:AAHWhNqltmMKFnhQRt-QHr34BSz-4AeuFUs/sendMessage',
        {
          chat_id: -312868350,
          text: `!!! GET TOP SEARCH !!! : 
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

  makeRequestCreator = async () => {
    let call = this.state.call;
    return url => {
      if (call) {
        call.cancel('Only one request allowed at a time.');
      }
      call = axios.CancelToken.source();
      return axios.get(url, {
        cancelToken: call.token
      });
    };
  };

  getProducts = async keyword => {
    const vendorId = this.state.selectedPasar.vendor_id;
    const response = await getProductbyKeyword(keyword, vendorId);
    return response;
  };

  handleSearchChange = async event => {
    const keyword = event.target.value;

    if (keyword === '') {
      this.setState({
        keyword,
        products: []
      });
      return;
    }

    await this.setState({
      keyword
    });

    setTimeout(() => {
      if (this.state.keyword === keyword) {
        this.updateProductList(keyword);
      }
    }, 500);
  };

  updateProductList = async keyword => {
    this.setState({
      isLoading: true
    });

    const products = await this.getProducts(keyword);

    this.setState({
      keyword,
      products,
      isLoading: false
    });
    if (this.state.products.length === 0) {
      this.setState({ kosong: true });
    } else {
      this.setState({ kosong: false });
    }
  };

  goBack = () => {
    this.props.history.push('/');
  };

  cancel = () => {
    this.setState({ keyword: '', products: [], isLoading: false });
  };

  render() {
    const { classes } = this.props;

    const fabStyle = () => {
      if (this.props.cartItems.length > 0) {
        return { marginBottom: 40 };
      }
    };

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <Box display="flex" justifyContent="center" bgcolor="white">
          <AppBar elevation={0} position="static" className={classes.appbar}>
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="Menu"
                onClick={this.goBack}
              >
                <BackButton />
              </IconButton>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  style={{ color: '#707585', marginRight: 23 }}
                  placeholder="Cari sayur, bumbu dapur, lauk pauk..."
                  autoFocus
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  onChange={this.handleSearchChange}
                  inputProps={{ 'aria-label': 'Search' }}
                  value={this.state.keyword}
                />
                {this.state.keyword !== '' && (
                  <div className={classes.clearIcon} onClick={this.cancel}>
                    <img src={silang} />
                  </div>
                )}
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <Paper elevation={0} className={classes.paper}>
          <Grid container style={fabStyle()}>
            {this.state.error !== null && <h1>{this.state.error}</h1>}
            {this.state.isLoading ? (
              <div style={{ width: '100%' }}>
                <MyLoader />
              </div>
            ) : (
              <React.Fragment>
                {this.state.kosong && (
                  <Grid align="center" item xs={12}>
                    <img
                      style={{ marginBottom: 20, marginTop: 40 }}
                      src={kosong}
                    />
                    <Typography
                      display="block"
                      gutterBottom
                      variant="subtitle2"
                    >
                      <b>
                        <p>Yahh, Pencarian </p>
                        <p> Anda Tidak Ditemukan</p>
                      </b>
                    </Typography>
                    <Typography
                      style={{ padding: 10 }}
                      display="block"
                      gutterBottom
                      variant="caption"
                    >
                      Item yang anda cari mungkin habis / tidak tersedia
                      sekarang. Tunggu beberapa hari lagi.
                    </Typography>
                  </Grid>
                )}
                {this.state.products.map(product => {
                  return (
                    <Grid xs={12} item key={product.id}>
                      <ProductItem product={product} />
                    </Grid>
                  );
                })}
              </React.Fragment>
            )}
          </Grid>
          <div>
            <Fab to="/cart?from=/" style={{ marginTop: '50%' }} />
          </div>
        </Paper>
      </Container>
    );
  }
}

export default Component;
