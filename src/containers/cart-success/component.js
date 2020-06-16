import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '../../components/app-bar';
import orderSukses from '../../vector/pesanSekarang.svg';

class Component extends React.Component {
  render() {
    const handleError = () => {
      sessionStorage.removeItem('error');
      history.push('/cart-shipment');
    };
    const { classes, history } = this.props;
    const error = JSON.parse(sessionStorage.getItem('error'));
    const id = JSON.parse(localStorage.getItem('respon'));
    const handleCheck = () => {
      history.push('/orders');
      localStorage.removeItem('respon');
    };

    const handleBelanja = () => {
      history.push('/');
      localStorage.removeItem('respon');
    };
    return (
      <React.Fragment>
        <AppBar title="Pesan" />

        <Container
          className={classes.container}
          align="center"
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <Paper elevation={0} className={classes.paper}>
            <img
              style={{ marginTop: 70, marginBottom: 30 }}
              alt="success"
              src={orderSukses}
            />
            <Typography variant="subtitle1" display="block" gutterBottom>
              <b>Sukses!</b>
            </Typography>
            <Typography
              className={classes.typography}
              variant="subtitle2"
              display="block"
              gutterBottom
            >
              Belanja kamu telah kami proses ordernya dengan kode <b>{id}</b>
            </Typography>
          </Paper>
        </Container>
        <div className={classes.stickToBottom}>
          <Paper elevation={0} className={classes.paperbtn}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Button
                  style={{ color: '#9FA3A6' }}
                  fullWidth={true}
                  onClick={handleCheck}
                >
                  <b>Cek Transaksi</b>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  variant="contained"
                  fullWidth={true}
                  style={{ backgroundColor: '#56C25C' }}
                  onClick={handleBelanja}
                >
                  <b>Belanja Lagi, Yuk!</b>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}
export default Component;
