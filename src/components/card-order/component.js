import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import currencyFormatter from '../../utilities/currency-formatter';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import color from '@material-ui/core/colors/deepPurple';
import OrderIcon from '../../vector/ordertumbas.svg';

class Component extends React.Component {
  render() {
    const { classes, order } = this.props;
    const colorFunc = () => {
      if (this.props.order.status === 'Dalam Proses') {
        return { color: '#56C25C' };
      } else {
        return { color: 'red' };
      }
    };
    if (this.props.order.status === 'wc-pending') {
      this.props.order.status = 'Dalam Proses';
    }
    if (this.props.order.status === 'wc-processing') {
      this.props.order.status = 'Dalam Proses';
    }
    if (this.props.order.status === 'wc-cancelled') {
      this.props.order.status = 'Dibatalkan';
    }
    if (this.props.order.status === 'wc-completed') {
      this.props.order.status = 'Selesai Belanja';
    }
    if (this.props.order.status === 'trash') {
      this.props.order.status = 'Dibatalkan';
    }
    return (
      <div style={{ marginTop: 10, backgroundColor: 'white' }}>
        <Link style={{ textDecoration: 'none' }} to={`/order/${order.ID}`}>
          <List className={classes.root}>
            <Grid container spacing={0}>
              <ListItem>
                <Grid item xs={2}>
                  <img
                    style={{ position: 'absolute', top: 10 }}
                    src={OrderIcon}
                  />
                </Grid>
                <Grid item xs={10}>
                  <ListItemText>
                    <Typography
                      variant="subtitle2"
                      display="block"
                      gutterBottom
                    >
                      <strong>Kode Belanja - {order.ID}</strong>
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      <strong>Alamat: </strong>
                      {order.address}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      <strong>Tanggal: </strong>
                      {moment(order.date).format('DD MMMM YYYY HH:mm')}
                    </Typography>
                    {/* <Typography variant="caption" display="block" gutterBottom>
                    <b>Total Pembayaran</b>{' '}
                    {currencyFormatter.format(order.price)}
                  </Typography> */}
                  </ListItemText>
                </Grid>
              </ListItem>
            </Grid>
            <Divider variant="fullWidth" />
            <Grid container spacing={0}>
              <Grid align="left" item xs={6}>
                <Typography
                  style={{ margin: 7 }}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  <strong>
                    Total: {currencyFormatter.format(order.price)}
                  </strong>
                </Typography>
              </Grid>
              <Grid align="right" item xs={6}>
                <Typography
                  style={{ margin: 7 }}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  Status: <strong style={colorFunc()}>{order.status}</strong>
                </Typography>
              </Grid>
            </Grid>
          </List>
          <Divider variant="fullWidth" />
        </Link>
      </div>
    );
  }
}

export default Component;
