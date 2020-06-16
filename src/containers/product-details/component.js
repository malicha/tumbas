import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AppBar from '../../components/app-bar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import Loading from '../../components/loading';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import currencyFormatter from '../../utilities/currency-formatter';
import BottomSheet from '../../components/bottom-sheet';
import Paper from '@material-ui/core/Paper';
import ContentLoader from 'react-content-loader';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { getProductDetail } from '../../services/products';
import Fab from '../../components/fab';

const MyLoader = () => (
  <ContentLoader
    height={600}
    width={400}
    speed={1}
    primaryColor="#ededed"
    secondaryColor="#d1d1d1"
  >
    <rect x="14" y="30" rx="5" ry="5" width="376" height="267" />
    <rect x="18" y="320" rx="0" ry="0" width="182" height="29" />
    <rect x="287" y="319" rx="0" ry="0" width="98" height="32" />
    <rect x="16" y="380" rx="5" ry="5" width="368" height="58" />
    <rect x="18" y="461" rx="5" ry="5" width="271" height="42" />
    <rect x="20" y="524" rx="5" ry="5" width="237" height="28" />
  </ContentLoader>
);

class Component extends React.Component {
  state = {
    productDetails: {},
    productId: null,
    isLoading: true,
    qyt: 0
  };

  async componentDidMount() {
    const productId = this.props.match.params.id;
    const response = await getProductDetail(productId);
    const productDetails = response;
    const cartItems = localStorage.getItem('cart_items');

    if (cartItems) {
      this.props.restoreItems(JSON.parse(cartItems));
    }
    this.setState({
      productDetails: productDetails,
      isLoading: false
    });
  }

  increase = () => {
    this.setState(prevState => ({ qty: prevState.qty + 1 }));
  };

  decrease = () => {
    this.setState(prevState => ({ qty: prevState.qty - 1 }));
  };
  getMeasurement = arrayOfMetaData => {
    const measurement = arrayOfMetaData.filter(meta => {
      return meta.key === '_woo_uom_input';
    });
    // console.log(measurement);
    if (measurement.length > 0) {
      return measurement[0].value;
    }
    return '';
  };

  render() {
    const { classes, history, cartItems, subTotalPrice } = this.props;
    const { productDetails } = this.state;
    const product = cartItems.find(item => item.id === productDetails.id);

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <AppBar title="Detail Produk" goBack={true} />
          {this.state.isLoading ? (
            <MyLoader />
          ) : (
            <Paper className={classes.paper}>
              <div style={{ padding: 15 }}>
                <CardMedia
                  className={classes.media}
                  image={
                    this.state.productDetails.images
                      ? this.state.productDetails.images[0].src
                      : 'https://via.placeholder.com/150'
                  }
                >
                  <div className={classes.cardMedia}>
                    {this.state.productDetails.sale_price !== '' && (
                      <p className={classes.cardMediaTitle}>
                        Disc.
                        {(
                          ((this.state.productDetails.regular_price -
                            this.state.productDetails.sale_price) /
                            this.state.productDetails.regular_price) *
                          100
                        ).toFixed(0)}
                        %
                      </p>
                    )}
                  </div>
                </CardMedia>
              </div>
              <CardContent>
                <Grid container spacing={0}>
                  <Grid item xs={9}>
                    <Typography
                      display="block"
                      variant="caption"
                      className={classes.title}
                      gutterBottom
                    >
                      {this.state.productDetails.name}
                    </Typography>
                    {this.state.productDetails.sale_price !== '' && (
                      <Typography
                        display="block"
                        gutterBottom
                        variant="caption"
                      >
                        <b className={classes.old}>
                          {currencyFormatter.format(
                            this.state.productDetails.regular_price
                          )}
                        </b>
                      </Typography>
                    )}
                    {this.state.productDetails.sale_price !== '' && (
                      <Typography
                        display="block"
                        gutterBottom
                        variant="caption"
                        className={classes.price}
                      >
                        {' '}
                        {currencyFormatter.format(
                          this.state.productDetails.sale_price
                        )}
                        <b style={{ color: 'grey', fontSize: 11 }}>
                          {' '}
                          /
                          {this.getMeasurement(
                            this.state.productDetails.meta_data
                          )}
                        </b>
                      </Typography>
                    )}
                    {this.state.productDetails.sale_price === '' && (
                      <Typography
                        display="block"
                        gutterBottom
                        variant="caption"
                        className={classes.price}
                      >
                        {currencyFormatter.format(
                          this.state.productDetails.regular_price
                        )}
                        <b style={{ color: 'grey', fontSize: 11 }}>
                          {' '}
                          /
                          {this.getMeasurement(
                            this.state.productDetails.meta_data
                          )}
                        </b>
                      </Typography>
                    )}
                  </Grid>
                  <Grid
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-end'
                    }}
                    item
                    xs={3}
                  >
                    {product && product.qty > 0 ? (
                      <ButtonGroup
                        size="small"
                        aria-label="Small outlined button group"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '-webkit-fill-available',
                          marginRight: 10
                        }}
                      >
                        <Button
                          onClick={() => {
                            this.props.distractItem(this.state.productDetails);
                          }}
                          style={{
                            color: '#153b50',
                            borderRadius: 4,
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
                          {product.qty || 0}
                        </Button>
                        <Button
                          onClick={() => {
                            this.props.addItem(this.state.productDetails);
                          }}
                          style={{
                            color: '#ffffff',
                            backgroundColor: '#42B549',
                            borderRadius: 4,
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
                    ) : (
                      <div>
                        {this.state.productDetails.stock_status ===
                        'instock' ? (
                          <Button
                            onClick={() => {
                              this.props.addItem(this.state.productDetails);
                            }}
                            style={{
                              color: '#ffffff',
                              backgroundColor: '#42B549',
                              borderRadius: 4,
                              width: 80,
                              height: 30,
                              fontSize: 10
                            }}
                          >
                            Tambahkan
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            disabled
                            style={{
                              borderRadius: 4,
                              width: 80,
                              padding: 0,
                              height: 30,
                              fontSize: 8
                            }}
                          >
                            Stok Habis
                          </Button>
                        )}
                      </div>
                    )}
                  </Grid>
                  <Grid style={{ marginTop: 10 }} item xs={12}>
                    <Typography variant="caption">
                      <b>Deskripsi produk:</b>
                    </Typography>
                  </Grid>
                  <Typography
                    style={{ margin: 5, marginBottom: 100 }}
                    variant="caption"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.productDetails.description || '-'
                      }}
                    />
                  </Typography>
                </Grid>
              </CardContent>
            </Paper>
          )}

          {this.props.cartItems.length > 0 && <Fab to="/cart?from=/" />}
        </Container>
      </React.Fragment>
    );
  }
}

export default Component;
