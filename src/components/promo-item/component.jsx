import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import currencyFormatter from '../../utilities/currency-formatter';
import { withRouter } from 'react-router-dom';
class Component extends React.Component {
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
    const { classes, product } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'auto'
        }}
      >
        <div className={classes.flex}>
          <Card className={classes.card}>
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
                  <p className={classes.cardMediaTitle}>
                    {(
                      ((product.regular_price - product.sale_price) /
                        product.regular_price) *
                      100
                    ).toFixed(2)}
                    %
                  </p>
                )}

                <p className={classes.cardMediaTitle}>
                  /{this.getMeasurement(product.meta_data)}
                </p>
              </div>
            </CardMedia>
            <CardContent>
              <Typography className={classes.title}>{product.name}</Typography>
              {product.sale_price !== '' && (
                <Typography className={classes.old}>
                  {currencyFormatter.format(product.regular_price)}
                </Typography>
              )}
              {product.sale_price !== '' && (
                <Typography className={classes.price}>
                  {currencyFormatter.format(product.sale_price)}
                </Typography>
              )}
              {product.sale_price === '' && (
                <Typography className={classes.price}>
                  {currencyFormatter.format(product.regular_price)}
                </Typography>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Component);
