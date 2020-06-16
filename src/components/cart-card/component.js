import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Component extends React.Component {
  state = {
    qty: 0
  };
  tambah = product_price => {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.tambahTotalHarga(product_price);
  };

  kurang = product_price => {
    if (this.state.qty + this.props.lineitem.quantity === 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.kurangTotalHarga(product_price);
  };

  render() {
    const { classes, theme } = this.props;
    const { product_price, quantity, product_name } = this.props.lineitem;
    sessionStorage.setItem('quantity', this.state.qty + quantity);
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <Grid container spacing={3}>
            <Grid item xs>
              <img alt="alternate" src="" />
            </Grid>
            <Grid item xs>
              <Typography
                style={{ fontSize: 'small' }}
                component="p"
                variant="p"
              >
                {product_name}
              </Typography>
              <Typography
                style={{ fontSize: 'small' }}
                variant="p"
                color="textSecondary"
              >
                {product_price}
              </Typography>
            </Grid>
            <Grid item xs>
              <ButtonGroup
                style={{ marginLeft: 30 }}
                size="small"
                aria-label="Small outlined button group"
              >
                <Button onClick={() => this.kurang()}>-</Button>
                <Button>{quantity + this.state.qty}</Button>

                <Button onClick={() => this.tambah()}>+</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Card>
      </React.Fragment>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Component;
