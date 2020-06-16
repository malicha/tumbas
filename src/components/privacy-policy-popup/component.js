import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Component extends React.Component {
  state = {
    open: false,
    buka: false
  };
  render() {
      const { classes, theme } = this.props;

    const handleClickOpen = () => {
      this.setState({
        open: !this.state.open
      });
    };
    const handleClose = () => {
      this.setState({
        open: !this.state.open
      });
    };

    const handleClickBuka = () => {
      this.setState({
        buka: !this.state.buka
      });
    };
    const handleTutup = () => {
      this.setState({
        buka: !this.state.buka
      });
    };

      return (
        
        
      <Box fontSize={5} >
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          
          style={{ color: '#9FA3A6', fontSize: 10 }}
          align="center"
        >
          Dengan masuk dan mendaftar, Anda menyetujui
          </Typography>
          <Typography
          variant="caption"
          display="block"
          gutterBottom
          
          style={{ color: '#9FA3A6', fontSize: 10, fontWeight:'bold' }}
          align="center"
        >
          <u onClick={handleClickOpen} >Syarat Penggunaan</u> &nbsp; dan &nbsp;
          <u onClick={handleClickBuka}>Kebijakan Privasi</u>
        </Typography>
       
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={handleClose}
          TransitionComponent={Transition}
          
              >
                  
                   <Container maxWidth="xs" className={classes.container}>
                      <CssBaseline />
                      <AppBar position= 'static' className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">
              Syarat Penggunaan
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper className={classes.paper}>
          <List>
                    <div className={classes.body}>
                              <Box p={1}>
                              <Typography variant="h5" gutterBottom>
              Syarat Penggunaan
            </Typography>
            <Box p={1}>
              <Typography variant="caption" gutterBottom>
                Mohon untuk membaca syarat dan ketentuan (“Syarat dan
                Ketentuan”) yang tertulis di bawah ini secara seksama sebelum
                memesan Barang atau menggunakan Layanan dari Situs ini. Untuk
                menggunakan Layanan kami, Anda harus berumur 21 tahun atau
                lebih. Apabila Anda berumur di bawah 21 tahun, maka anda
                membutuhkan izin dari orang tua atau wali anda. Dengan tetap
                mengakses Situs ini dan memesan Barang atau Layanan dari Situs
                ini melalui telepon atau aplikasi telepon genggam kami, Anda
                setuju untuk terikat dengan Syarat dan Ketentuan ini.
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>1. Pendahuluan</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                Tumbasin adalah sebuah layanan one demand service yang
                menghubungkan pasar tradasional dengan pembeli melalui sebuah
                aplikasi. OLEH KARENA ITU PARA PIHAK SEPAKAT ATAS KETENTUAN DI
                BAWAH INI:
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>2. Definisi</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  2.1 “Perjanjian” yaitu perjanjian ini (“Syarat dan
                  Ketentuan”), Kebijakan Privasi, setiap bentuk lainnya, dan
                  cara pembayaran;
                </p>
                <p>
                  2.2 “Aplikasi” yaitu aplikasi yang dapat dipasang pada telepon
                  genggam dari Tumbasin.id;
                </p>
                <p>
                  2.3 “Pengiriman” yaitu jasa pengiriman yang disediakan oleh
                  Pedagang, pedagang disini adalah pedagang Pasar Tradisional
                  yang bekerja sama atau pihak ketiga yang bekerja sama dengan
                  Tumbasin.id;
                </p>
                <p>
                  2.4 “Barang” yaitu produk konsumen yang dijual secara eceran
                  oleh Pedagang. Namun demikian, Tumbasin mempunyai wewenang
                  tersendiri untuk tidak memasukkan Barang tersebut pada
                  Platform;
                </p>
                <p>
                  2.5 “Jam Operasional” yaitu waktu dan hari pada saat Pasar
                  Tradisional terbuka untuk umum;
                </p>
                <p>
                  2.6 “Pedagang yang Bekerja Sama” atau “Pedagang” adalah pihak
                  ketiga, yang bekerja sama dengan Tumbasin untuk memasok Barang
                  sehubungan dengan Layanan;
                </p>
                <p>
                  2.7 “Platform” yaitu www.Tumbasin.id, sebuah properti berupa
                  domain internet yang terdaftar dan setiap aplikasi telepon
                  genggam atau web yang menyediakan akses yang sama;
                </p>
                <p>
                  2.8 “Kebijakan Privasi” yaitu perjanjian yang ditunjukkan pada
                  Situs ini, mengatur cara kami mengumpulkan dan menyimpan data;
                </p>
                <p>
                  2.9 Layanan” yaitu setiap layanan yang kami sediakan dan dapat
                  Anda minta melalui Situs atau Aplikasi kami;
                </p>
                <p>
                  2.10 “Situs” adalah www.Tumbasin.id atau sub-domain lainnya
                  yang kami gunakan untuk menawarkan Barang dan Layanan kami;
                </p>
                <p>
                  2.11 “Anda”, “Kalian”, “Konsumen” yaitu Anda, seseorang yang
                  mengakses Situs ini atau Aplikasi untuk memesan Barang dan
                  menggunakan Layanan dari Situs atau Aplikasi atau cara lainnya
                  untuk memesan dari Tumbasin.id.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>3. Pemesanan</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  3.1 Dengan melakukan pemesanan Barang melalui Situs atau
                  Aplikasi Tumbasin.id berarti Anda memesan produk dari Pedagang
                  yang Bekerja Sama (bukan dari Tumbasin.id); Tumbasin.id hanya
                  sebuah penyedia Platform yang menyediakan Layanan bagi
                  Konsumen untuk memesan Barang. Dalam hal terdapat keluhan dari
                  Konsumen, Tumbasin.id melalui layanan pelanggan akan
                  menyampaikan keluhan tersebut kepada Pedagang yang Bekerja
                  Sama dan mencari solusi yang terbaik bagi Konsumen.
                </p>
                <p>
                  3.2 Setiap informasi yang Anda berikan kepada Tumbasin.id
                  hanya digunakan sehubungan dengan Layanan, Tumbasin.id
                  menjamin bahwa informasi tersebut tidak akan dipindahkan,
                  diberikan, atau diinformasikan kepada pihak ketiga lainnya,
                  kecuali yang diatur secara spesifik dalam Syarat dan Ketentuan
                  ini atau Kebijakan Privasi.
                </p>
                <p>
                  3.3 Pada saat memesan melalui Situs ini Anda diminta untuk
                  memberikan alamat e-mail dan sandi. Anda harus memastikan
                  bahwa informasi mengenai hal tersebut aman dan Anda tidak
                  memberikan informasi tersebut kepada pihak ketiga.
                </p>
                <p>
                  3.4 Barang yang dikirim adalah untuk kebutuhan Anda dan tidak
                  untuk dijual. Anda menjamin bahwa Anda tidak bertindak sebagai
                  agen untuk pihak ketiga.
                </p>
                <p>
                  3.5 Anda menjamin bahwa Anda cakap secara hukum untuk
                  melakukan pemesanan atas Barang yang disediakan melalui Situs
                  atau Aplikasi. Anda setuju untuk memberikan identitas yang
                  valid sebelum membuat pesanan. Anda pun setuju untuk
                  menunjukkan identitas yang valid, apabila diminta pada saat
                  pengiriman untuk membuktikan identitas Anda.
                </p>
                <p>
                  3.6 Kami akan melakukan seluruh tindakan yang diperlukan,
                  sejauh kemampuan kami, untuk menjaga data pemesanan dan
                  pembayaran Anda, namun demikian, apabila tidak terdapat
                  kesalahan dari bagian kami, kami tidak dapat dianggap
                  bertanggung jawab untuk setiap kerugian yang mungkin Anda
                  terima apabila pihak ketiga melakukan tindakan tanpa
                  persetujuan untuk mengakses setiap data yang Anda berikan pada
                  saat mengakses atau memesan melalui Situs kecuali terbukti
                  lain.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>4. Harga dan Pembayaran</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  4.1 Seluruh harga yang terdaftar pada Situs atau Aplikasi yang
                  berdasarkan informasi dari Pedagang yang Bekerja Sama adalah
                  benar pada saat dipublikasikan. Namun demikian, harga tersebut
                  dapat berubah karena alasan bisnis. Sebagai penyedia platform,
                  Tumbasin.id akan mengubah harga yang terdaftar segera setelah
                  terjadinya perubahan oleh Pedagang.
                </p>
                <p>
                  4.2 Seluruh harga yang terdaftar untuk pengiriman oleh pihak
                  ketiga yang bekerja sama dengan Tumbasin.id yang tercantum
                  pada Situs atau Aplikasi adalah benar pada saat publikasi.
                  Namun demikian harga tersebut dapat berubah karena alasan
                  bisnis. Sebagai penyedia platform, Tumbasin.id akan mengubah
                  harga yang terdaftar setelah terjadinya perubahan oleh pihak
                  ketiga tersebut.
                </p>
                <p>
                  4.3 Total harga untuk Pengiriman, Barang atau Layanan yang
                  dipesan, termasuk biaya pengiriman dan biaya lainnya, akan
                  tercantum pada Situs pada saat Anda menempatkan pesanan Anda
                  di proses periksa. Harga yang harus dibayar oleh Konsumen
                  merupakan harga yang tercantum pada saat Konsumen berada di
                  proses periksa dari Situs atau Aplikasi. Perubahan terhadap
                  harga yang terdaftar tidak dapat terjadi pada saat Konsumen
                  berada dalam proses periksa dari Situs atau Aplikasi.
                </p>
                <p>
                  4.4 Anda sepakat untuk memberikan kuasa kepada Tumbasin.id
                  untuk membayar pada saat barang sudah sampai di tangan Anda.
                </p>
                <p>
                  4.5 Seluruh pembayaran harus dilakukan untuk seluruh Barang
                  yang dikirim dan Layanan yang disediakan. Pembayaran harus
                  dilakukan berdasarkan pilihan yang disediakan Tumbasin.id pada
                  Situs atau Aplikasi.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>5. Kebijakan Pengiriman</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  5.1 Waktu pengiriman yang disediakan pada saat pemesanan hanya
                  perkiraan dan dapat berubah. Waktu pengiriman yang dapat
                  dipilih adalah dalam rentang waktu 1-3 jam pada hari yang sama
                  dengan hari pemesanan dan pada hari berikutnya. Jumlah
                  pengiriman barang pada setiap waktu pengiriman adalah
                  terbatas, hal ini berarti kami tidak dapat menjamin bahwa Anda
                  akan menerima pengiriman sesuai dengan waktu yang Anda
                  inginkan. Keterbatasan tersebut akan diberitahukan di Situs
                  atau Aplikasi, dan Anda dapat memilih waktu pengiriman yang
                  masih tersedia.
                </p>
                <p>
                  5.2 Tumbasin.id akan melakukan pengiriman Barang tanpa
                  berkerjasama dengan pihak ketiga. Kami akan berupaya sebaik
                  mungkin untuk memastikan bahwa pengiriman dilakukan dalam
                  rentang waktu 1-3 jam setelah Anda melakukan proses periksa.
                </p>
                <p>
                  5.3 Namun demikian, Anda dapat menghubungi Tumbasin.id jika
                  Anda tidak menerima Barang dalam rentang waktu yang sudah
                  ditetapkan oleh pihak kami. Tumbasin.id akan memfasilitasi
                  permasalahan Anda untuk menemukan solusi terbaik dalam situasi
                  tersebut.
                </p>
                <p>
                  5.4 Pengiriman hanya tersedia selama Jam Operasional dari
                  Pasar Tradisional yang Bekerja Sama.
                </p>
                <p>
                  5.5 Barang akan diantar ke alamat yang Anda tentukan pada saat
                  pemesanan.
                </p>
                <p>
                  5.6 Dalam keadaan tertentu apabila terjadi keterlambatan
                  pengiriman, atas kebijakan sendiri, Tumbasin.id dapat tidak
                  mengenakan biaya pengiriman terhadap Konsumen.
                </p>
                <p>
                  5.7 Semua risiko atas Barang beralih kepada Anda pada saat
                  Pengiriman.
                </p>
                <p>
                  5.8 Jika Anda tidak dapat menerima Barang yang diantar kepada
                  Anda pada saat Pengiriman, atau kami tidak dapat mengantarnya
                  pada waktu yang sudah ditetapkan dikarenakan kesalahan Anda
                  dalam memberikan informasi yang cukup dan instruksi yang
                  tepat, maka Barang tersebut dianggap telah diantar kepada Anda
                  dan semua risiko dan tanggung jawab atas Barang tersebut
                  beralih pada Anda. Setiap penyimpanan, asuransi dan
                  biaya/pengeluaran lain yang kami tanggung sebagai bagian dari
                  ketidakmampuan melakukan pengiriman karena kesalahan Anda,
                  menjadi tanggung jawab Anda dan Anda harus memberikan
                  kompensasi yang diperlukan kepada Tumbasin.id apabila ada.
                  Namun demikian, hal tersebut tidak berlaku apabila Anda sudah
                  menghubungi Tumbasin.id melalui e-mail, telepon, atau layanan
                  pelanggan.
                </p>
                <p>
                  5.9 Anda harus memastikan bahwa pada saat Pengiriman Barang,
                  pengaturan yang diperlukan termasuk akses pengiriman sudah
                  tersedia demi keamanan pengiriman Barang tersebut. Kami tidak
                  bertanggung jawab untuk setiap kerusakan, biaya dan
                  pengeluaran yang timbul terhadap Barang tersebut atau
                  tempat-tempat pada saat hal ini terjadi sebagai hasil atas
                  kesalahan Anda dalam memberikan akses dan situasi yang memadai
                  untuk pengiriman.
                </p>
                <p>
                  5.10 Pedagang yang Bekerja Sama dan/atau Tumbasin.id tidak
                  bertanggung jawab kepada Anda atas kerugian, kewajiban, biaya,
                  kerusakan, denda, atau pengeluaran yang timbul dari
                  keterlambatan pengiriman barang, kecuali jika terbukti bahwa
                  keterlambatan tersebut diakibatkan oleh kesalahan Pedagang
                  yang Bekerja Sama dan/atau Tumbasin.id.
                </p>
                <p>
                  5.11 Mohon perhatikan bahwa pengiriman mungkin tidak dapat
                  dilakukan ke beberapa lokasi. Dalam hal ini, kami akan
                  memberikan pemberitahuan terlebih dahulu kepada Anda dan
                  membatalkan pemesanan Anda.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>6. Penolakan dan Pembatalan</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  6.1 Anda memahami bahwa pada saat pemesanan, Barang mungkin
                  tidak tersedia dikarenakan beberapa alasan dari Pedagang yang
                  Bekerja Sama. Dalam hal ini, Tumbasin.id akan memberitahu Anda
                  melalui layanan pelanggan kami (melalui e-mail atau telepon)
                  bahwa barang yang Anda pesan tidak tersedia, dan akan
                  mengembalikan setiap pembayaran yang telah Anda lakukan dalam
                  waktu barang sudah Anda terima atau setelah transaksi,
                  tergantung pada cara pembayaran Anda.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>7. Kebijakan Pengembalian</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  7.1 Tumbasin.id dan Pedagang yang Bekerja Sama akan memberikan
                  informasi dan penjelasan yang akurat untuk setiap produk,
                  namun apabila Anda menerima produk-produk yang Anda anggap
                  tidak dapat diterima, Anda berhak untuk menolak produk
                  tersebut, dengan memberikan alasan mengapa produk tersebut
                  tidak dapat diterima. Kami akan mempertimbangkan keberatan
                  Anda dan mengembalikan pembayaran atas produk tersebut dalam
                  waktu 1 (satu) hari kerja setelah transaksi, tergantung pada
                  cara pembayaran Anda.
                </p>
                <p>
                  7.2 Apabila atas pertimbangan lain, Anda tidak puas dengan
                  pelayanan yang kami berikan, Anda dapat memberikan penilaian
                  atas pelayanan kami melalui Situs atau Aplikasi. Berdasarkan
                  kebijakan kami, Anda dapat menerima pengembalian uang dari
                  sebagian biaya Layanan yang disediakan.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>8. Informasi</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  8.1 Pada saat kami meminta informasi dari Anda untuk
                  memastikan Pengiriman, Anda setuju untuk memberikan informasi
                  yang akurat dan lengkap
                </p>
                <p>
                  8.2 Anda sepakat untuk mengizinkan kami untuk menggunakan,
                  menyimpan atau memproses informasi pribadi Anda yang
                  diperlukan untuk menyediakan Pengiriman, Barang atau Layanan
                  kepada Anda dan untuk tujuan pemasaran dan pengendalian kredit
                  (“Penggunaan”). Penggunaan ini dapat berupa dibukanya
                  informasi pribadi Anda pada pihak ketiga tertentu yang kami
                  pilih, setiap kali kami meyakini bahwa layanan yang ditawarkan
                  oleh pihak ketiga tersebut penting bagi Anda atau ketika hal
                  ini diwajibkan oleh hukum, atau dalam rangka Pengiriman
                  Makanan, Barang atau Layanan untuk Anda. Informasi lebih
                  lanjut dapat dilihat pada Kebijakan Privasi kami.
                </p>
                <p>
                  8.3 Anda berhak untuk meminta salinan informasi pribadi Anda
                  yang kami miliki. Silakan hubungi kami ketika Anda ingin
                  meminta informasi ini.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>9. Keluhan</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  Tumbasin.id akan berusaha sebaik mungkin untuk memfasilitasi
                  keluhan Anda dengan menyampaikan keluhan tersebut kepada
                  Pedagang yang Bekerja Sama atau Pedagang. Kami menanggapi
                  keluhan pelanggan secara serius dan mengusahakan untuk
                  menanggapi keluhan Anda sesegera mungkin. Segala keluhan
                  ditujukan pada tumbassemarang@gmail.com atau melalui layanan
                  pelanggan kami secara langsung.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>10. Batasan Tanggung Jawab</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                  10.1 Kami berusaha sebaik mungkin untuk memastikan bahwa
                  informasi pada Situs atau Aplikasi adalah benar dan bebas dari
                  kesalahan pada setiap saat. Terlepas dari usaha maksimal kami,
                  kami tidak dapat menjamin bahwa pada Situs atau Aplikasi akan
                  selalu bebas dari kesalahan dan penggunaannya selalu sesuai
                  dengan tujuan, tepat waktu dan setiap kesalahan akan
                  dikoreksi, dan situs atau server bebas dari virus atau bug
                  atau menunjukkan keseluruhan fungsi, akurasi, kehandalan Situs
                  tersebut dan kami tidak dapat menjamin terhadap hal-hal
                  tersebut, baik secara eksplisit atau implisit, berkaitan
                  dengan kesesuaian dengan tujuan, atau akurasi.
                </p>
                <p>
                  10.2 Dengan menyetujui ketentuan penggunaan ini Anda sepakat
                  untuk melepaskan kami dari tanggung jawab apapun yang timbul
                  dari penggunaan informasi dari pihak ketiga oleh Anda, atau
                  konsumsi Barang dari Pedagang yang Bekerja Sama oleh Anda.
                </p>
                <p>
                  10.3 Kami melepaskan setiap dan seluruh tanggung jawab kepada
                  Anda terhadap pelaksanaan Pengiriman, pemasokan Barang dan
                  Layanan selama diperbolehkan oleh peraturan perundang-undangan
                  yang berlaku. Hal ini tidak mempengaruhi hak Anda berdasarkan
                  hukum sebagai pelanggan. Apabila kami menemukan bahwa kami
                  bertanggung jawab atas kehilangan atau kerugian apapun kepada
                  Anda, tanggung jawab tersebut terbatas pada nilai yang telah
                  Anda bayar untuk Barang atau Layanan yang relevan. Kami tidak
                  dapat menerima tanggung jawab untuk setiap kehilangan,
                  kerugian atau pengeluaran apapun, termasuk setiap kehilangan
                  langsung atau tidak langsung seperti kehilangan keuntungan
                  pada Anda, apapun alasannya. Pembatasan tanggung jawab ini
                  tidak berlaku terhadap kecelakaan atau kematian pribadi yang
                  timbul secara langsung atas kelalaian kami.
                </p>
                <p>
                  10.4 Kami tidak menerima tanggung jawab apapun untuk setiap
                  keterlambatan, kegagalan, kesalahan atau kelalaian atau
                  kerugian atas informasi yang dikirimkan, virus atau
                  kontaminasi lainnya atau hal-hal yang merusak yang dikirimkan
                  kepada sistem komputer milik pelanggan melalui Situs atau
                  Aplikasi kami.
                </p>
                <p>
                  10.5 Kami tidak bertanggung jawab untuk setiap kegagalan atau
                  keterlambatan dalam melakukan Layanan atau mengirimkan Barang
                  yang mana kegagalan tersebut timbul sebagai akibat dari setiap
                  tindakan atau kelalaian, yang di luar kendali kami seperti
                  segala kejadian luar biasa dan tidak dapat dihindari yang
                  disebabkan secara langsung dan khusus oleh kekuatan alam yang
                  tidak dapat diantisipasi, dikendalikan, atau dicegah, dengan
                  tindakan kehati-hatian, ketelitian, dan perhatian, termasuk
                  namun tidak terbatas pada: perang, kerusuhan, huru-hara,
                  perintah undang-undang atau pemerintah, peraturan, ketentuan
                  atau arahan dan tindakan dari pihak ketiga.
                </p>
                <p>
                  10.6 Apabila kami dikontrak untuk memberikan pesanan yang
                  identik atau mirip kepada lebih dari satu Konsumen dan tidak
                  dapat memenuhi seluruh kewajiban kami kepada Anda dengan
                  alasan Keadaan Kahar, kami dapat menentukan berdasarkan
                  wewenang kami, pesanan mana yang akan kami penuhi dan sejauh
                  mana akan kami lakukan. Namun, kami akan memberikan
                  pemberitahuan terlebih dahulu kepada pihak-pihak yang telah
                  memesan tetapi tidak dapat dipenuhi pesanannya dan Anda berhak
                  atas kebijakan pengembalian sebagaimana dijelaskan pada Bagian
                  7.
                </p>
                <p>
                  10.7 Produk yang kami jual hanya untuk penggunaan perorangan
                  lokal dan digunakan untuk konsumen. Dengan demikian, kami
                  tidak bertanggung jawab atas setiap kehilangan yang tidak
                  langsung, kehilangan karena suatu sebab, kehilangan data,
                  kehilangan pendapatan atau keuntungan, kehilangan atau
                  kerusakan pada properti dan/atau kerugian atas klaim dari
                  pihak ketiga yang timbul atas penggunaan Situs atau Aplikasi
                  atau untuk setiap produk atau layanan yang dibeli dari kami.
                </p>
                <p>
                  10.8 Kami telah mengambil langkah-langkah untuk mencegah
                  penipuan melalui Internet dan memastikan setiap data yang
                  dikumpulkan dari Anda disimpan seaman mungkin. Namun, kami
                  tidak bertanggung jawab dalam hal terjadi peristiwa yang
                  kemungkinannya sangat kecil terjadi pada server komputer atau
                  dari pihak ketiga.
                </p>
                <p>
                  10.9 Dalam hal kami memiliki keyakinan bahwa terdapat
                  penyalahgunaan voucher dan/atau kode diskon atau terdapat hal
                  yang menimbulkan penipuan, Tumbasin.id dapat melakukan
                  pemblokiran terhadap konsumen dengan segera dan berhak untuk
                  menolak memberikan layanan di masa nanti terhadap konsumen
                  tersebut. Kemudian, apabila terdapat penyalahgunaan voucher
                  atau kode diskon, kami berhak untuk mendapat kompensasi dari
                  setiap dan seluruh pelaku yang melakukan hal tersebut.
                </p>
                <p>
                  10.10 Penawaran merupakan sesuatu yang menjadi kewenangan kami
                  dan dapat ditarik kapanpun dengan pemberitahuan sebelumnya
                  kepada calon Konsumen.
                </p>
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>11. Ketentuan Umum</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>11.1 Seluruh harga adalah dalam Rupiah (IDR).</p>
                <p>
                  11.2 Kami dapat melakukan sub-kontrak terhadap beberapa bagian
                  atau bagian-bagian dari Layanan atau Barang yang kami sediakan
                  kepada Anda dari waktu ke waktu.
                </p>
                <p>
                  11.3 Kami akan mempublikasikan setiap perubahan yang materiil
                  atau subtantif dari Syarat dan Ketentuan pada Situs atau
                  Aplikasi, dan Anda harus membaca perubahan tersebut secara
                  teliti. Jika Anda melanjutkan untuk menggunakan dan mengakses
                  Situs atau Aplikasi setiap setelah Syarat dan Ketentuan yang
                  diubah dipublikasikan, maka akan dianggap sebagai persetujuan
                  Anda terhadap Syarat dan Ketentuan yang diubah.
                </p>
                <p>
                  11.4 Setiap keberatan atas Syarat dan Ketentuan yang diubah
                  harus diberikan kepada Tumbasin.id dalam waktu 7 (tujuh) hari
                  setelah perubahan tersebut dipublikasikan pada Situs atau
                  Aplikasi.
                </p>
                <p>
                  11.5 Anda tidak dapat untuk menggunakan atau meluncurkan
                  sistem otomatis atau program sehubungan dengan Situs atau
                  Aplikasi Kami atau fungsi pemesanan online-nya.
                </p>
                <p>
                  11.6 Anda tidak dapat mengumpulkan atau mengambil informasi
                  mengenai identitas pribadi dari Situs atau Aplikasi,
                  penggunaan sistem komunikasi yang disediakan oleh Situs atau
                  Aplikasi untuk dikumpulkan secara komersil, pengumpulan untuk
                  segala alasan oleh pengguna Situs atau Aplikasi sehubungan
                  dengan pendaftarannya di Situs atau Aplikasi, atau
                  mempublikasikan atau mendistribusikan setiap vouchers atau
                  kode sehubungan dengan situs atau mengumpulkan atau
                  pengambilan atau melakukan hack terhadap Situs atau Aplikasi.
                </p>
                <p>
                  11.7 Syarat dan Ketentuan bersama dengan Kebijakan Privasi,
                  setiap bentuk lainnya dan cara pembayaran merupakan satu
                  kesatuan perjanjian antara Anda dan Kami. Tidak ada ketentuan
                  baik secara eksplisit atau implisit yang akan menjadi bagian
                  dari Perjanjian ini. Dalam hal terdapat perbedaan antara
                  Syarat dan Ketentuan ini dan setiap dari ketentuan atau aturan
                  pada Situs atau Aplikasi kecuali yang berkaitan dengan masalah
                  privasi, maka Syarat dan Ketentuan akan berlaku.
                </p>
                <p>
                  11.8 Jika terdapat ketentuan atau keadaan pada Perjanjian yang
                  menjadi tidak valid, ilegal atau tidak dapat diterapkan, maka
                  para pihak dengan ini sepakat bahwa ketentuan atau kondisi
                  tersebut akan dihapus dan ketentuan lainnya dalam Perjanjian
                  akan tetap berlaku tanpa ketentuan atau keadaan tersebut.
                </p>
                <p>
                  11.9 Syarat dan Ketentuan ini dan Perjanjian kami diatur dan
                  dibuat berdasarkan hukum Indonesia. Para pihak dengan ini
                  sepakat untuk memilih jurisdiksi Pengadilan Negeri Semarang.
                </p>
                <p>
                  11.10 Tidak ada penundaan atau kegagalan untuk menerapkan hak
                  atau ganti rugi yang merupakan hak kami berdasarkan
                  Perjanjian, yang akan dianggap sebagai pengesampingan atas
                  bagian kami terhadap hak atau ganti rugi tersebut kecuali
                  pengesampingan tersebut dikonfirmasi secara tertulis.
                </p>
                <p>
                  11.11 Syarat dan Ketentuan ini dan kontrak (dan semua
                  kewajiban non kontraktual yang timbul atau sehubungan dengan
                  itu) diatur dan dibuat berdasarkan Hukum Indonesia. Kami dan
                  Anda dengan ini secara non-ekslusif memilih jurisdiksi
                  kepaniteraan Pengadilan Negeri Semarang. Seluruh kesepakatan,
                  korespondensi dan kontak antara kita harus dibuat berdasarkan
                  Bahasa Indonesia.
                </p>
              </Typography>
            </Box>
          </Box>
          </div>
      </List>
      </Paper>
    </Container>
          </Dialog>


          
          <Dialog
          fullScreen
          open={this.state.buka}
          onClose={handleTutup}
          TransitionComponent={Transition}
          
              >
                  
                   <Container maxWidth="xs" className={classes.container}>
                      <CssBaseline />
                      <AppBar position= 'static' className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleTutup}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">
              Kebijakan Privasi
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper className={classes.paper}>
          <List>
                    <div className={classes.body}>
                    <Box p={1}>
            <Typography variant="subtitle2" gutterBottom>
              <b>KEBIJAKAN PRIVASI</b>
            </Typography>
            <Typography variant="caption" gutterBottom>
              <p>
                Kebijakan Privasi ini telah dibuat oleh Tumbasin.id untuk
                melindungi dan menjaga privasi dari Pengguna Situs atau Aplikasi
                milik kami (Tumbasin.id). Kami menyediakan kebijakan ini kepada
                Anda untuk menginformasikan Anda informasi-informasi yang dapat
                kami kumpulkan selama Anda mengunjungi Situs milik Tumbasin.id
                (“Situs”) atau aplikasi dari telepon genggam (“Aplikasi”),
                mengapa kami mengumpulkan informasi pelanggan, untuk apa kami
                menggunakan informasi tersebut, dalam kondisi seperti apa kami
                dapat membuka informasi tersebut, dan bagaimana Anda dapat
                menginstruksikan kami untuk membatasi penggunaan informasi
                tersebut. Kebijakan Privasi ini merupakan bagian yang tidak
                terpisahkan dari Syarat dan Ketentuan kami. Apabila terdapat
                perbedaan antara Kebijakan Privasi dan Syarat dan Ketentuan
                sehubungan dengan hal-hal yang berkaitan dengan privasi, maka
                ketentuan dalam Kebijakan Privasi ini yang berlaku.
              </p>
            </Typography>
          </Box>
          <Divider />
          <Box p={1}>
            <Typography variant="subtitle2" gutterBottom>
              <b>1. Data Yang Dikumpulkan dalam Situs ini</b>
            </Typography>
            <Typography variant="caption" gutterBottom>
              <p>
                1.1 Alamat IP:{' '}
                <p>
                  {' '}
                  Ketika mengunjungi Situs, alamat IP dari komputer milik
                  pengguna akan terdaftar pada sistem online Tumbasin.id. Alamat
                  IP adalah deretan angka biner dari komputer yang digunakan
                  ketika mengunjungi Situs. Alamat IP didaftarkan agar
                  Tumbasin.id dapat melacak komputer yang digunakan dalam hal
                  terjadi penyalahgunaan atau perbuatan melawan hukum sehubungan
                  dengan kunjungan pada atau penggunaan Situs. Selanjutnya,
                  alamat IP digunakan untuk memperoleh perkiraan lokasi Anda
                  (tingkat kota).
                </p>
              </p>
              <p>
                1.2 Jenis perangkat yang Anda gunakan Misalnya:{' '}
                <p>
                  {' '}
                  komputer, telepon genggam, dsb, sistem operasional yang Anda
                  gunakan.
                </p>
              </p>
              <p>
                1.3 Jenis situs pencari (web browser) yang Anda gunakan
                Misalnya:{' '}
                <p>
                  Google Chrome, Mozilla Firefox, Safari, Internet Explorer,
                  dsb.
                </p>
              </p>
              <p>
                1.4 Informasi Pribadi Dalam rangka memproses pesanan Anda dengan
                menggunakan Situs atau Aplikasi, kami menghendaki Anda untuk
                memberikan beberapa informasi pribadi kepada kami yang
                mengidentifikasi Anda secara personal dan lokasi pengiriman
                Anda. Kami menerima dan menyimpan seluruh informasi yang Anda
                masukkan di bagian manapun pada Situs atau Aplikasi. Hal ini
                termasuk:
                <p>
                  1.4.1 Formulir Pendaftaran:{' '}
                  <p>
                    Informasi termasuk, namun tidak terbatas pada: Nama, Alamat,
                    Nomor Telepon, Alamat E-mail.
                  </p>
                </p>
                <p>
                  1.4.2 Formulir Pemesanan:{' '}
                  <p>
                    Informasi, termasuk namun tidak terbatas pada: Tanggal
                    Berakhir, dan Alamat Pengiriman.
                  </p>
                </p>
                <p>
                  1.4.3 Informasi Pengiriman:{' '}
                  <p>
                    Informasi termasuk, namun tidak terbatas pada: Nama, Alamat,
                    Nomor Telepon, Instruksi Khusus Pengiriman.
                  </p>
                </p>
                <p>
                  1.4.4 Informasi
                  <p>
                    Pelanggan: Informasi termasuk, namun tidak terbatas pada:
                    Produk Yang Dipesan, Jumlah Pesanan.
                  </p>
                </p>
                <p>
                  1.4.5 Informasi Pelanggan Lainnya:{' '}
                  <p>
                    Apabila Anda berkomunikasi dengan kami melalui e-mail, atau
                    mengisi formulir secara online, survey, atau melalui suatu
                    kontes, setiap informasi yang diberikan tersebut dapat
                    dianggap sebagai Informasi Pribadi.
                  </p>
                  Informasi ini secara bersama-sama disebut sebagai “Informasi
                  Pribadi”. Anda dapat memilih untuk tidak memberikan Informasi
                  Pribadi tertentu kepada kami. Dalam kondisi tersebut, Anda
                  tetap dapat mengakses dan melihat sebagian besar Situs atau
                  Aplikasi, namun, Anda tidak dapat memesan produk apapun.
                  Selain itu, Anda dapat memilih untuk tidak memberikan
                  informasi tertentu, namun Anda mungkin tidak dapat menerima
                  seluruh manfaat dari fitur-fitur pada Situs atau Aplikasi.
                </p>
              </p>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>2. Bagaimana kami menggunakan Informasi Pribadi Anda</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Kami menggunakan Informasi Pribadi Anda untuk tujuan
                  berdasarkan permintaan Anda, memproses dan mengisi pesanan
                  pelanggan, memverifikasi kualifikasi Anda terhadap produk dan
                  layanan tertentu, penagihan, memperbaiki layanan kami,
                  menyediakan pengalaman berbelanja yang lebih baik dan sesuai
                  kebutuhan pribadi Anda, berkomunikasi dengan Anda, dan
                  menginformasikan penawaran khusus kepada Anda. Dari waktu ke
                  waktu, kami dapat menggunakan Informasi Pribadi Anda untuk
                  mengirim sampel produk baru atau merek produk yang berbeda
                  dari yang biasa Anda pesan secara cuma-cuma kepada Anda.
                  Namun, apabila Anda memilih untuk “opt out” (keluar) dari
                  fitur ini, silakan merujuk pada Bagian 10 dari Kebijakan
                  Privasi ini. Dengan menyetujui Kebijakan Privasi ini, Anda
                  memahami dan sepakat bahwa Tumbasin.id dapat memberikan
                  Informasi Pribadi Anda kepada pihak ketiga selama diperlukan
                  atau dibutuhkan untuk memenuhi pesanan Anda atau menyelesaikan
                  transaksi Anda. Sebagai contoh, kami dapat menggunakan pihak
                  ketiga sebagai penyedia/pemasok barang tertentu, sebuah
                  perusahaan pengiriman lain untuk mengirim pesanan, dan dalam
                  hal pemrosesan kartu kredit oleh suatu perusahaan untuk
                  menagih pengguna atas barang dan layanan. Kami juga dapat
                  memberikan Informasi Pribadi Anda sebagaimana dijelaskan dalam
                  Bagian 5 dan 12 di bawah. Sebagai pengecualian terhadap yang
                  diatur di atas, dan pada Bagian 5 dan 12 di bawah, kami tidak
                  akan memberikan Informasi Pribadi Anda kepada pihak ketiga
                  kecuali Anda telah memberikan izin kepada kami untuk
                  melakukannya.
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>3. Penyebaran Informasi Pribadi</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Sebagai tambahan terhadap Bagian 2 di atas, kami menyebarkan
                  informasi demografi kepada rekan kami secara anonim dan
                  berdasarkan jumlah keseluruhan. Jenis data ini tidak terhubung
                  dengan setiap informasi pribadi yang dapat diindentifikasi.
                  Kami bekerja sama dengan pihak ketiga untuk memberikan layanan
                  kepada Anda. Kami menyebarkan informasi ketika perusahaan lain
                  terlibat dalam transaksi sehingga perusahaan tersebut dapat
                  melaksanakan fungsinya.
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>4. Pengendali Data</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <p>
                    4.1 Untuk informasi dimana Tumbasin.id menjadi pengendali
                    data, Tumbasin.id akan menjadi pengendali data terhadap data
                    induk yang Anda masukkan sehubungan dengan pembuatan profil
                    atau pendaftaran untuk newsletter, yaitu nama Anda, sandi
                    Anda dan alamat e-mail Anda, serta pendaftaran alamat IP
                    Anda. Selanjutnya, Tumbasin.id akan menjadi pengendali data
                    terhadap informasi yang diberikan kepada penyedia jasa
                    lainnya.{' '}
                  </p>

                  <p>
                    4.2 Untuk informasi dimana Anda menjadi pengendali data,
                    Anda akan menjadi pengendali data terhadap konten yang Anda
                    pilih untuk diberikan pada Situs dan untuk data yang
                    diberikan pada profil Anda dalam Media Sosial, yang
                    merupakan akibat atas terhubungnya profil Anda pada Situs
                    dengan profil Anda di Media Sosial.
                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>5. Pengolah Data</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Tumbasin.id dapat secara ekslusif menggunakan jasa perusahaan
                  untuk memelihara teknis operasional, keamanan, kerahasiaan
                  data pribadi yang dimuat dalam Situs. Perusahaan ini adalah
                  pengolah data sehubungan dengan data pribadi dimana
                  Tumbasin.id menjadi pengendali datanya. Dengan menyetujui
                  Kebijakan Privasi ini, Anda memberikan persetujuan kepada
                  Tumbasin.id untuk mengizinkan pengolah data yang sama untuk
                  memproses data-data dimana Anda adalah pengendali datanya.
                  Pengolah data dapat bertindak sendiri berdasarkan instruksi
                  dari Tumbasin.id. Dengan menyetujui Kebijakan Privasi ini,
                  Anda memberikan persetujuan Anda kepada Tumbasin.id untuk
                  memberikan instruksi yang diperlukan kepada pengolah data
                  untuk memproses data berdasarkan Kebijakan Privasi ini dan
                  untuk keperluan penggunaan Situs. Pengolah data telah membuat
                  tindakan teknis dan pengelolaan kemananan yang dianggap perlu
                  terhadap informasi yang secara tidak sengaja atau melawan
                  hukum dirusak, hilang atau kualitasnya memburuk dan terhadap
                  informasi yang diketahui oleh orang yang tidak berhak,
                  disalahgunakan atau dengan cara yang lain yang bertentangan
                  dengan cara-cara pengolahan data pribadi. Atas permintaan Anda
                  – dengan memperhatikan pemberian upah kepada pengolah data
                  dengan hitungan tarif per jam – pengolah data memberikan Anda
                  informasi yang cukup untuk memperlihatkan bahwa tindakan
                  teknis dan pengelolaan kemananan telah dibuat. Dalam hal
                  tersebut, Tumbasin.id akan memfasilitasi permintaan Anda
                  kepada pengolah data.
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>6. Tindakan Pengamanan</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Tumbasin.id akan berupaya semaksimal mungkin untuk menjamin
                  bahwa data yang dicatat, termasuk informasi pribadi, data
                  kartu kredit, sandi dan informasi rahasia lainnya, tidak akan
                  dibuka, dipindahkan, diberikan kepada atau digunakan secara
                  melawan hukum oleh pihak yang tidak berwenang. Berkaitan
                  dengan hal ini, Tumbasin.id secara berkala akan memeriksa
                  sistemnya untuk mencegah serangan dan kerentanan terhadap
                  hal-hal tersebut. Namun demikian, dikarenakan internet adalah
                  ruang yang tidak 100% aman, Tumbasin.id tidak dapat setiap
                  waktu memastikan atau menjamin keamanan informasi yang dikirim
                  ke Tumbasin.id. Informasi yang dikirim melalui Situs tidak
                  terenkripsi, dan oleh karena itu Tumbasin.id menyarankan Anda
                  untuk secara hati-hati menyampaikan informasi yang bersifat
                  rahasia melalui jaringan internet. Namun demikian, Tumbasin.id
                  dapat memberikan catatan audit untuk seluruh aktivitas yang
                  dilakukan pada Situs apabila hal ini diminta oleh instansi
                  yang berwenang untuk keperluan hukum sebagaimana ditentukan
                  dalam peraturan perundang-undangan yang berlaku.
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>
                    7. Situs ini menggunakan cookies dan berikut ini kami
                    menjelaskan cookies apa yang kami gunakan dan untuk tujuan
                    apa hal tersebut digunakan. Dengan menggunakan Situs kami,
                    Anda menerima bahwa kami menggunakan cookies sebagaimana
                    dijelaskan sebagai berikut.
                  </b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <p>
                    7.1 Apa itu cookies? Cookies adalah satuan kecil dari
                    informasi yang Situs tempatkan pada hard disk komputer ,
                    tablet, atau smartphone Anda. Cookies berisi informasi yang
                    Situs gunakan untuk membuat komunikasi antara Anda dan situs
                    pencari (web browser) Anda menjadi lebih efisien. Cookies
                    tidak mengidentifikasi Anda sebagai seorang pengguna
                    individu, melainkan komputer Anda. Terdapat dua jenis
                    Cookies, yaitu session cookies dan persistent cookies.
                    Session Cookies adalah bagian informasi yang bersifat
                    sementara yang dihapus ketika Anda keluar dari situs pencari
                    (web browser) Anda. Persistent Cookies adalah bagian
                    informasi yang lebih bersifat permanen yang disimpan dan
                    berada di komputer Anda sampai informasi-informasi tersebut
                    dihapus. Persistent Cookies terhapus dengan sendirinya
                    setelah periode waktu tertentu namun diperbaharui setiap
                    kali Anda mengunjungi Situs. Situs menggunakan session
                    cookies dan persistent cookies.{' '}
                  </p>

                  <p>
                    7.2 Jenis cookies apa yang kami gunakan dan untuk tujuan
                    apa? Kami menggunakan cookies untuk:
                    <p>
                      7.2.1 Statistik
                      <p>
                        Mengukur lalu lintas Situs, yaitu jumlah pengunjung pada
                        Situs, dari mana domain asal pengunjung, halaman apa
                        yang dikunjungi pengunjung pada Situs, dan di mana
                        lokasi area geografis pengunjung secara umum.
                      </p>
                    </p>
                    <p>
                      7.2.2 Peningkatan fungsi Situs
                      <p>
                        Mengoptimalisasi pengalaman Anda dengan Situs, termasuk
                        mengingat ID Pengguna Anda dan sandi ketika Anda kembali
                        ke Situs, sehingga Anda tidak harus melakukan proses
                        log-in lagi.
                      </p>
                    </p>
                    <p>
                      7.2.3 Menghubungkan dengan Media Sosial
                      <p>
                        Kami memberikan Anda kemungkinan untuk terhubung dengan
                        Media Sosial, seperti Facebook.
                      </p>
                    </p>
                  </p>
                  <p>
                    7.3 Cookies Pihak Ketiga
                    <p>
                      Situs kami menggunakan cookies dari Pihak Ketiga sebagai
                      berikut:
                    </p>
                    <p>
                      7.3.1 Google Analytic: untuk keperluan statistik. Anda
                      dapat menolak cookies dari Google Analytic dengan mengklik
                      tautan ini http://tools.google.com/dlpage/gaoptout
                    </p>
                    <p>
                      7.3.2 Facebook: Ditempatkan oleh Facebook hanya apabila
                      Anda berinteraksi dengan plug-in Facebook atau masuk ke
                      dalam Facebook dari sumber yang lain dengan maksud untuk
                      terhubung dan terintegrasi dengannya.
                    </p>
                    <p>
                      7.3.3 Twitter: Ditempatkan oleh Twitter hanya apabila Anda
                      berinteraksi dengan plug-in Twitter atau masuk ke dalam
                      Twitter dari sumber yang lain dengan maksud untuk
                      terhubung dan terintegrasi dengannya.
                    </p>
                    <p>
                      7.3.3 Google+: Ditempatkan oleh Google+ hanya apabila Anda
                      berinteraksi dengan plug-in Google+ atau masuk ke dalam
                      Google+ dari sumber yang lain dengan maksud untuk
                      terhubung dan terintegrasi dengannya
                    </p>
                  </p>
                  <p>
                    7.4 Penghapusan Cookies
                    <p>
                      Apabila Anda menginginkannya, Anda dapat menghapus cookies
                      yang telah ada pada perangkat Anda. Jika Anda menggunakan
                      PC atau browser terbaru, Anda dapat menekan CTRL + SHIFT +
                      DELETE secara bersamaan. Jika shortcuts tersebut tidak
                      berkerja pada browser Anda, silahkan kunjungi halaman
                      pendukung pada browser yang bersangkutan. Mohon perhatikan
                      bahwa Situs kami tidak akan bekerja secara maksimal
                      apabila Anda menghapus cookies tersebut.
                    </p>
                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>8. Informasi yang Hilang atau Dicuri</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Apabila nama pengguna, atau sandi Anda hilang, dicuri atau
                  digunakan tanpa ijin, Anda harus segera menghubungi kami
                  melalui Layanan Pelanggan kami di nomor +62 82 242861268
                  dan/atau mengirimkan email ke tumbassemarang@gmail.com. Dalam
                  hal ini, kami akan menganggap bahwa Anda telah membatalkan
                  nama pengguna, dan sandi yang Anda gunakan pada sistem kami
                  dan selanjutnya Kami akan memperbarui data kami.
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>9. Akses, koreksi dan penghapusan</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <p>
                    9.1 Akses{' '}
                    <p>
                      Atas permintaan tertulis kepada Tumbasin.id melalui
                      informasi kontak yang terdapat dalam Bagian 10,
                      Tumbasin.id akan memberikan informasi kepada Anda mengenai
                      tujuan pemrosesan; siapa yang menerima informasi dan dari
                      mana informasi tersebut berasal. Tumbasin.id akan
                      memberikan informasi tersebut di atas sesegera mungkin.
                    </p>
                  </p>

                  <p>
                    9.2 Koreksi dan penghapusan{' '}
                    <p>
                      Apabila Anda menemukan bahwa Tumbasin.id sebagai
                      pengendali data memproses data yang salah atau
                      menyesatkan, Tumbasin.id akan mengoreksi berdasarkan
                      permintaan Anda. Kami merekomendasikan agar Anda – apabila
                      memungkinkan – mengoreksi kesalahan tersebut sendiri. Anda
                      kapanpun dapat mengoreksi atau menghapus konten dan
                      informasi apapun pada Situs, dimana Anda berperan sebagai
                      pengendali data, lihat pada Bagian 4.2. Apabila data
                      pribadi berubah, atau apabila Anda tidak lagi menginginkan
                      data tersebut muncul pada Situs, Anda dapat memperbaharui
                      atau menghapus informasi dengan melakukan proses log in
                      pada profil pengguna Anda. Ketika profil Anda telah
                      dihapus, semua data yang berhubungan dengan profil
                      pengguna Anda akan terhapus.
                    </p>
                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>10. Bagaimana membatasi penggunaan informasi Anda</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Pengguna kami diberikan kesempatan untuk “opt out” (keluar),
                  agar informasi mereka tidak digunakan untuk kepentingan yang
                  tidak berkaitan langsung terhadap penempatan, pemrosesan,
                  pemenuhan atau pengiriman suatu pesanan produk pada saat kami
                  menanyakan informasi. Apabila Anda “opt out” (keluar) dan
                  tidak ingin kami mengirim materi yang kami pikir Anda akan
                  tertarik, seperti informasi produk, contoh produk, dan
                  pesan/e-mail promosi dari kami dan situs dan perusahaan yang
                  kami miliki, Anda dapat memberitahu kami melalui salah satu
                  dari dua cara di bawah ini:{' '}
                  <p>10.1 Mengirim email ke: tumbassemarang@gmail.com</p>
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>11. Perubahan pada Kebijakan Privasi</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <p>
                    11.1 Tumbasin.id dapat sewaktu-waktu membuat perubahan pada
                    Kebijakan Privasi-nya dengan efek di masa yang akan datang.
                    Kami akan memberitahu terlebih dahulu mengenai perubahan
                    tersebut. Tumbasin.id akan memberikan informasi kepada
                    pengguna Situs mengenai perubahan tersebut ketika pengguna
                    masuk ke Situs. Apabila Anda menginginkannya, Tumbasin.id
                    akan memberikan informasi mengenai perubahan yang
                    substansial pada Kebijakan Privasi ini melalui e-mail Anda
                    yang terdaftar di data kami.
                  </p>

                  <p>
                    11.2 Anda sepakat bahwa dengan tetap menggunakan Situs atau
                    Applikasi setelah versi Kebijakan Privasi yang telah
                    dimodifikasi, adalah bentuk persetujuan Anda terhadap
                    Kebijakan privasi yang telah dimodifikasi tersebut.
                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>12. Pengungkapan yang Disyaratkan oleh Hukum</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Kami dapat mengungkapkan Informasi Pribadi ketika disyaratkan
                  oleh hukum atau ketika tindakan tersebut dibutuhkan dalam
                  rangka mematuhi perintah undang-undang atau untuk memenuhi
                  panggilan pengadilan atau proses hukum yang ditujukan kepada
                  Tumbasin.id atau karyawan atau prinsipal. Lebih lanjut, kami
                  berhak mengungkap informasi tersebut ketika Tumbasin.id
                  meyakini bahwa pengungkapan tersebut diperlukan untuk
                  mengidentifikasi, menghubungi, atau melakukan tindakan hukum
                  terhadap pihak yang mungkin melanggar Syarat dan Ketentuan
                  Tumbasin.id atau yang mungkin mengakibatkan kerugian atau
                  gangguan terhadap hak-hak atau properti milik Tumbasin.id,
                  pelanggan terdaftar atau calon pelanggan Tumbasin.id atau
                  pihak lain yang mungkin dirugikan karena tindakan tersebut.
                </Typography>
              </Box>
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>13. Pertanyaan mengenai Situs dan Kebijakan privasi</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Apabila ada pertanyaan mengenai Kebijakan Privasi Tumbasin.id,
                  pengolahan data kami, perbaikan data atau hubungan Anda dengan
                  kami secara umum, silakan menghubungi Tumbasin.id melalui
                  email tumbassemarang@gmail.com
                </Typography>
              </Box>
            </Typography>
            </Box>
          </div>
      </List>
      </Paper>
    </Container>
</Dialog>

</Box>

    );
  }
}
export default Component;
