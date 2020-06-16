import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import currencyFormatter from '../../utilities/currency-formatter';
import { withRouter } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
class Component extends React.Component {
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
    const { classes, top, cartItems } = this.props;
    const item = cartItems.find(item => item.id === top.id);
    return (
      <Box className={classes.card}>
        <Grid container spacing={0}>
          <Grid
            onClick={() => {
              // this.props.history.goBack();
              this.props.history.push(
                `/product/${top.id}?from=/category/${top.categories[0].id}`
              );
            }}
            item
            xs={3}
          >
            <CardMedia
              className={classes.media}
              image={
                top.images[0]
                  ? top.images[0].src
                  : 'https://via.placeholder.com/150'
              }
            >
              <div className={classes.cardMedia}>
                {top.sale_price !== '' && (
                  <p className={classes.cardMediaDisc}>
                    {(
                      ((top.regular_price - top.sale_price) /
                        top.regular_price) *
                      100
                    ).toFixed(0)}
                    %
                  </p>
                )}

                {/* <p className={classes.cardMediaTitle}>
                  /{this.getMeasurement(top.meta_data)}
                </p> */}
              </div>
            </CardMedia>
          </Grid>
          <Grid
            onClick={() => {
              // this.props.history.goBack();
              this.props.history.push(
                `/product/${top.id}?from=/category/${top.categories[0].id}`
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
                {top.name}
              </Typography>
              {top.sale_price !== '' && (
                <Typography variant="caption" className={classes.old}>
                  {currencyFormatter.format(top.regular_price)}
                </Typography>
              )}
              {top.sale_price !== '' && (
                <Typography className={classes.price}>
                  {currencyFormatter.format(top.sale_price)}{' '}
                  <b style={{ color: '#C7C7C9', fontSize: 10 }}>
                    /{this.getMeasurement(top.meta_data)}
                  </b>
                </Typography>
              )}
              {top.sale_price === '' && (
                <Typography className={classes.price} style={{ marginTop: 30 }}>
                  {currencyFormatter.format(top.regular_price)}{' '}
                  <b style={{ color: '#C7C7C9', fontSize: 10 }}>
                    /{this.getMeasurement(top.meta_data)}
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
                    justifyContent: 'flex-end',
                    width: '-webkit-fill-available',
                    marginRight: 1
                  }}
                >
                  <Button
                    size="small"
                    onClick={event => {
                      event.preventDefault();
                      this.decrease();
                      this.props.distractItem(top);
                    }}
                    style={{
                      color: '#153b50',
                      borderRadius: 4,
                      maxWidth: 25,
                      minWidth: 25,
                      maxHeight: 25,
                      minHeight: 25,
                      padding: 1,
                      border: '1px solid silver'
                    }}
                  >
                    -
                  </Button>

                  <Button
                    size="small"
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
                    size="small"
                    onClick={event => {
                      event.preventDefault();
                      this.increase();
                      this.props.addItem(top);
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
                  {top.stock_status === 'instock' ? (
                    <Button
                      onClick={event => {
                        event.preventDefault();
                        this.increase();
                        this.props.addItem(top);
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

export default withRouter(Component);
