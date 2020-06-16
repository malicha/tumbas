import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AppBar from '../../components/app-bar-full';
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
import Full from '../../vector/full.svg';
import Ig from '../../vector/ig.svg';
import Instagram from '../../vector/insta.svg';
import facebook from '../../vector/facebook.svg';

class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <AppBar goBack={true} close={this.props.close} title="" />
          <div align="center">
            <img src={Full} style={{ width: 200 }} />
            <div style={{ paddingLeft: 60, paddingRight: 60 }}>
              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                Wah, belanjaan hari ini sudah penuh :(
              </Typography>
              <Typography style={{ fontSize: 12, marginTop: 8 }}>
                Kamu bisa kembali besok, untuk penuhi kebutuhan harianmu
              </Typography>
            </div>
          </div>

          <Grid container spacing={0} className={classes.gridText}>
            <Grid item xs={12} style={{ marginTop: '6%' }}>
              <Typography className={classes.text}>
                <b>Ikuti Kami</b>
              </Typography>
            </Grid>

            <Grid item xs={12} style={{ marginTop: '4%' }}>
              <Button
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/mesermang.id/',
                    '_blank'
                  );
                }}
                variant="contained"
                fullWidth={true}
                style={{
                  background:
                    'linear-gradient(263.26deg, #DA01C7 0.12%, #E8016C 21.42%, #F70125 41.17%, #FF7201 69.22%, #FFD101 96.76%)',
                  color: 'white',
                  textTransform: 'none',
                  minHeight: 50,
                  maxHeight: 50
                }}
              >
                <img
                  style={{ position: 'absolute', left: 15 }}
                  src={Instagram}
                />
                <b style={{ marginLeft: 30 }}>Follow Us On Instagram</b>
              </Button>
            </Grid>

            <Grid item xs={12} style={{ marginTop: '4%' }}>
              <Button
                onClick={() => {
                  window.open(
                    'https://www.facebook.com/mesermang.id/',
                    '_blank'
                  );
                }}
                variant="contained"
                fullWidth={true}
                style={{
                  backgroundColor: '#3660B9',
                  color: 'white',
                  textTransform: 'none',
                  minHeight: 50,
                  maxHeight: 50
                }}
              >
                <img
                  style={{ position: 'absolute', left: 21 }}
                  src={facebook}
                />
                <b style={{ marginLeft: 30 }}>Follow Us On Facebook</b>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Component;
