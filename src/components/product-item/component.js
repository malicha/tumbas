import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import currencyFormatter from '../../utilities/currency-formatter';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import LazyLoad from 'react-lazyload';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class ProductItem extends React.Component {
  state = {
    qty: 0
  };
  componentDidMount() {
    const cartItems = localStorage.getItem('cart_items');
    if (cartItems) {
      this.props.restoreItems(JSON.parse(cartItems));
    }
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
    const { classes, product, cartItems } = this.props;
    const item = cartItems.find(item => item.id === product.id);

    return (
      <Box className={classes.card}>
        <Grid container spacing={0}>
          <Grid
            onClick={() => {
              // this.props.history.goBack();
              this.props.history.push(
                `/product/${product.id}?from=/category/${product.categories[0].id}`
              );
            }}
            item
            xs={3}
          >
            <CardMedia
              className={classes.media}
              image={
                product.images[0]
                  ? product.images[0].src
                  : 'https://via.placeholder.com/150'
              }
            >
              <div className={classes.cardMedia}>
                {product.sale_price !== '' && (
                  <p className={classes.cardMediaDisc}>
                    Disc.
                    {(
                      ((product.regular_price - product.sale_price) /
                        product.regular_price) *
                      100
                    ).toFixed(0)}
                    %
                  </p>
                )}
              </div>
            </CardMedia>
          </Grid>
          <Grid
            style={{ marginTop: 5 }}
            onClick={() => {
              // this.props.history.goBack();
              this.props.history.push(
                `/product/${product.id}?from=/category/${product.categories[0].id}`
              );
            }}
            item
            xs={6}
          >
            <CardContent className={classes.cardContent}>
              <Typography
                style={{ marginBottom: 10 }}
                className={classes.title}
              >
                {product.name}
              </Typography>
              {product.sale_price !== '' && (
                <Typography variant="caption" className={classes.old}>
                  <b>{currencyFormatter.format(product.regular_price)}</b>
                </Typography>
              )}
              {product.sale_price !== '' && (
                <Typography className={classes.price}>
                  {currencyFormatter.format(product.sale_price)}
                  <b style={{ color: '#C7C7C9', fontSize: 10 }}>
                    {' '}
                    /{this.getMeasurement(product.meta_data)}
                  </b>
                </Typography>
              )}
              {product.sale_price === '' && (
                <Typography className={classes.price} style={{ marginTop: 30 }}>
                  {currencyFormatter.format(product.regular_price)}
                  <b style={{ color: '#C7C7C9', fontSize: 10 }}>
                    {' '}
                    /{this.getMeasurement(product.meta_data)}
                  </b>
                </Typography>
              )}
            </CardContent>
          </Grid>
          <Grid align="right" item xs={3}>
            <div style={{ marginTop: 60 }}>
              {item && item.qty > 0 ? (
                <ButtonGroup
                  size="small"
                  aria-label="Small outlined button group"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '-webkit-fill-available',
                    marginRight: 1
                  }}
                >
                  <Button
                    onClick={event => {
                      event.preventDefault();
                      this.decrease();
                      this.props.distractItem(product);
                    }}
                    style={{
                      color: '#153b50',
                      border: '1px solid #C4C4C4',
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
                    {item.qty || 0}
                  </Button>
                  <Button
                    onClick={event => {
                      event.preventDefault();
                      this.increase();
                      // document.getElementByClassName('MuiBadge-badge')[0].innerHTML = JSONN.. + 1
                      this.props.addItem(product);
                    }}
                    style={{
                      color: '#ffffff',
                      backgroundColor: '#56C25C',
                      border: '1px solid #56C25C',
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
                  {product.stock_status === 'instock' ? (
                    <Button
                      onClick={event => {
                        event.preventDefault();
                        this.increase();
                        this.props.addItem(product);
                      }}
                      style={{
                        color: '#ffffff',
                        backgroundColor: '#56C25C',
                        borderRadius: 4,
                        width: 80,
                        height: 30,
                        fontSize: 10,
                        textTransform: 'none'
                      }}
                    >
                      <b>Tambahkan</b>
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
            </div>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withRouter(ProductItem);
