import React from 'react';
import AppBar from '../../components/app-bar/component';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';
import Divider from '@material-ui/core/Divider';
import info from '../../vector/info.svg';
import Fab from '../../components/wa-fab';

class Component extends React.Component {
  state = {
    data: {}
  };
  componentDidMount() {
    const data = firebase.auth().currentUser;
    this.setState({ data });
  }
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <AppBar title="Pusat Bantuan" />
        <Paper
          elevation={0}
          align="center"
          style={{
            background:
              'linear-gradient(180.97deg, #42B549 -22.67%, #4EC755 57.41%)',
            borderRadius: 0,
            marginTop: 40,
            color: 'white',
            opacity: 0.7,
            paddingTop: 20,
            paddingBottom: 20,
            boxShadow:
              '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            <b>
              Hello &nbsp;
              {this.state.data !== null ? this.state.data.displayName : 'User'}
            </b>
          </Typography>

          <Typography variant="h6" gutterBottom>
            <b> Anda Memerlukan Bantuan?</b>
          </Typography>
        </Paper>

        <Grid container spacing={0} className={classes.gridList}>
          <Grid item xs={12}>
            <Typography className={classes.textLixt}>
              <b>Tentang Kami</b>
            </Typography>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/apa-mesermang`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Apa mesermang ?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/dari-mana`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Produk Mesermang berasal darimana ya?
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.gridListTwo}>
          <Grid item xs={12}>
            <Typography className={classes.textLixt}>
              <b>Operasional</b>
            </Typography>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/pasar-yang-bekerjasama`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Operasional mesermang sudah ada di kota mana saja?
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.gridListTwo}>
          <Grid item xs={12}>
            <Typography className={classes.textLixt}>
              <b>Harga dan Transaksi</b>
            </Typography>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/berapa-ongkos-kirimnya`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Berapa ongkos kirimnya ?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/menerima-kembalian`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Kapan saya dapat menerima pengembalian uang dari mesermang?
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.gridListTwo}>
          <Grid item xs={12}>
            <Typography className={classes.textLixt}>
              <b>Pesanan</b>
            </Typography>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/seberapa-cepat`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Seberapa cepat mesermang mengantarkan pesanan?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link
              to={`help/apa-yang-dimaksud-dengan-waktu-pengantaran`}
              className={classes.link}
            >
              <Typography className={classes.textLixt}>
                Apa yang dimaksud dengan waktu pengantaran ?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link
              to={`help/bagaimana-jika-stok-habis`}
              className={classes.link}
            >
              <Typography className={classes.textLixt}>
                Bagaimana jika stok barang yang saya pesan habis?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/cek-status-pesanan`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Bagaimana saya mengecek status pesanan saya?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/cara-edit-pesanan`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Bagaimana cara edit atau membatalkan pesanan?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/kebijakan-mesermang`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Apa kebijakan terkait pembatalan pesanan?
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Link to={`help/melaporkan-masalah`} className={classes.link}>
              <Typography className={classes.textLixt}>
                Saya punya pertanyaan lebih lanjut untuk mesermang!
              </Typography>
            </Link>
            <Divider style={{ marginTop: '4%' }} />
          </Grid>

          <Grid item xs={12} className={classes.what}>
            <Typography className={classes.textLixt}>
              Masih <b>butuh bantuan</b> atau <b>punya pertanyaan lain</b>
              &nbsp; yang ingin ditanyakan?
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=62 811 229 7774&text=Hai Mesermang, mau tanya dong"
                style={{ color: '#F15B5D', textDecoration: 'none' }}
              >
                <b>HUBUNGI KAMI</b>
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Grid style={{ padding: 10 }} container spacing={0}>
          <Grid
            item
            xs={1}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-5%'
            }}
          >
            <img src={info} />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{ color: '#898B8C', fontWeight: 'bold' }}
            >
              Layanan Pelanggan 24 Jam, Senin s/d Minggu, tidak termasuk Hari
              Libur Nasional.
            </Typography>
          </Grid>
        </Grid>
        <div style={{ marginLeft: '74%' }}>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=62 811 229 7774&text=Hai Mesermang, mau tanya dong"
            style={{ color: '#F15B5D', textDecoration: 'none' }}
          >
            <Fab />
          </a>
        </div>
      </Container>
    );
  }
}

export default Component;
