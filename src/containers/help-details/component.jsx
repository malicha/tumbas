import React from 'react';
import AppBar from '../../components/app-bar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import smile from '../../vector/smile.svg';
import sad from '../../vector/sad.svg';
import info from '../../vector/info.svg';
import Fab from '../../components/wa-fab';

const helps = {
  'apa-mesermang': {
    pertanyaan: 'Apa mesermang ?',
    jawaban:
      'Mesermang! mengantarkan bahan makanan dan kebutuhan sehari-hari dari pasar dan kebun ke rumah akang teteh.'
  },
  'dari-mana': {
    pertanyaan: 'Produk Mesermang berasal darimana ya?',
    jawaban:
      'Mamang bekerjasama sareng para pedagang kecil di pasar di kota Bandung, dan rencangan para petani lokal seputaran Bandung. '
  },
  'pasar-yang-bekerjasama': {
    pertanyaan: 'Operasional mesermang sudah ada di kota mana saja?',
    jawaban:
      'Sekarang mamang baru tiasa melayani wilayah kota Bandung, termasuk Kopo dan Kota Baru Parahyangan. Mugi kedepannya bisa lebih luas lagi.'
  },
  'seberapa-cepat': {
    pertanyaan: 'Seberapa cepat mesermang mengantarkan pesanan?',
    jawaban:
      'Batas pemesanan sampai pukul 22.00 WIB hari ini. Mamang dan tim akan mengantar belanjaan ke rumah akang teteh, besok harinya mulai jam 6 pagi.'
  },
  'berapa-ongkos-kirimnya': {
    pertanyaan: 'Berapa ongkos kirimnya?',
    jawaban:
      'Ongkos kirim untuk tim kurir Mamang, Promo Rp. 5.000 untuk Antapani, Arcamanik, Padasuka, Jalaprang, Awiligar, Cisitu, Cigadung (cek IG dan CS untuk zona promo dan masa berlaku). Selain daerah itu untuk Kota Bandung Rp. 10.000 flat. Khusus untuk Kopo & Kota Baru Parahyangan Rp. 12.500. Cek juga Promo Free Ongkir minimal pembelian Rp. 150.000 dan setiap pembelanjaan ke 3, 6, 9 dst di MeserMang!'
  },
  'apa-yang-dimaksud-dengan-waktu-pengantaran': {
    pertanyaan: 'Apa yang dimaksud dengan waktu pengantaran? ',
    jawaban: 'Pengantaran belanjaan dari jam 06.00-11.00 WIB'
  },
  'cara-edit-pesanan': {
    pertanyaan: 'Bagaimana cara edit atau membatalkan pesanan?',
    jawaban:
      'Akang teteh bisa kontak Mamang pami ada belanjaan yang mau diubah atau batal. Maksimal sebelum jam 21.00 yah.'
  },
  'bagaimana-jika-stok-habis': {
    pertanyaan: 'Bagaimana jika stok barang yang saya pesan habis?',
    jawaban:
      'Kalau barang habis, Mamang akan mengkonfirmasi segera lewat whatsapp. '
  },
  'cek-status-pesanan': {
    pertanyaan: 'Bagaimana saya mengecek status pesanan saya?',
    jawaban:
      'Mamang akan mengkonfirmasi dulu belanjaan akang teteh sebelum mulai belanja. Akang teteh juga bisa cek pesanan di fitur Transaksi pesanan.'
  },
  'kebijakan-mesermang': {
    pertanyaan: 'Apa kebijakan  terkait pembatalan pesanan?',
    jawaban:
      'Punten, belanjaan tidak bisa dibatalkan kalau sudah Mamang belanjakan.'
  },
  'melaporkan-masalah': {
    pertanyaan: 'Saya punya pertanyaan lebih lanjut untuk mesermang !',
    jawaban:
      'Mangga silahkan kontak Mamang di mesermang.id@gmail.com atau tiasa langsung kontak whatsapp 0811-229-7774 Insya Allah Mamang siap melayani akang teteh. '
  },
  'menerima-kembalian': {
    pertanyaan: 'Kapan saya dapat menerima pengembalian uang dari mesermang?',
    jawaban:
      'Jika ada kembalian akan Mamang kembalikan setelah belanjaan sampai di rumah akang teteh.'
  }
};
class Component extends React.Component {
  state = {
    feedback: false
  };
  render() {
    const helpId = this.props.match.params.id;
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <AppBar title="Detail Bantuan" goBack={true} divider />
        <Grid item xs={12} className={classes.question}>
          <Typography className={classes.textQuestion}>
            <b>{helps[helpId].pertanyaan}</b>
          </Typography>
        </Grid>

        <Grid container spacing={0} className={classes.textContainer}>
          <Grid item xs={12}>
            <Typography className={classes.textQuestion}>
              {helps[helpId].jawaban}
            </Typography>
          </Grid>
        </Grid>
        {this.state.feedback == false ? (
          <Grid
            container
            spacing={0}
            className={classes.textContainerTwo}
            align="center"
          >
            <Grid item xs={12}>
              <Typography className={classes.textQuestion}>
                Apakah penjelasan ini membantu?
              </Typography>
            </Grid>

            <Grid container spacing={0} style={{ marginTop: '4%' }}>
              <Grid item xs={6} style={{ paddingLeft: '34%' }}>
                <img
                  onClick={() => this.setState({ feedback: true })}
                  src={smile}
                />
              </Grid>
              <Grid item xs={6} style={{ paddingRight: '34%' }}>
                <img
                  onClick={() => this.setState({ feedback: true })}
                  src={sad}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid
              container
              spacing={0}
              className={classes.textContainerTwo}
              align="center"
            >
              <Grid item xs={12} className={classes.bg}>
                <Typography className={classes.textQuestion}>
                  Terima kasih atas masukan kamu
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={0} className={classes.textContainerTwo}>
              <Grid item xs={12}>
                <Typography className={classes.textQuestion}>
                  Masih <b>butuh bantuan</b> atau <b>punya pertanyaan lain </b>
                  yang ingin ditanyakan?{' '}
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

            <div style={{ paddingTop: '3%' }}>
              <Grid style={{ padding: 5 }} container spacing={0}>
                <Grid align="center" item xs={1}>
                  <img src={info} />
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    style={{ color: '#898B8C' }}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    <b>
                      Layanan pelanggan 24 jam, Senin sampai Minggu (tidak
                      termasuk libur nasional)
                    </b>
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </>
        )}
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
