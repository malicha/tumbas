import React from 'react';
import Appbar from '../../components/app-bar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

class Component extends React.Component {
  render() {
    const { classes,  } = this.props;
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <Appbar title="Syarat Penggunaan" goBack={true} />
          <Paper className={classes.paper}>
          <div className={classes.typography}>
            <Typography style={{paddingLeft:7}}>
              Syarat Penggunaan
            </Typography>
            <Box p={1}>
              <Typography variant="caption" gutterBottom>
              Mohon untuk membaca syarat dan ketentuan (“Syarat dan Ketentuan”) yang tertulis di bawah ini secara seksama sebelum memesan Barang atau menggunakan Layanan dari Situs ini. Untuk menggunakan Layanan kami, Anda harus berumur 21 tahun atau lebih. Apabila Anda berumur di bawah 21 tahun, maka anda membutuhkan izin dari orang tua atau wali anda. Dengan tetap mengakses Situs ini dan memesan Barang atau Layanan dari Situs ini melalui telepon atau aplikasi telepon genggam kami, Anda setuju untuk terikat dengan Syarat dan Ketentuan ini.
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>1. Pendahuluan</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
              Mesermang! adalah sebuah layanan one demand service yang menghubungkan pasar tradasional dengan pembeli melalui sebuah aplikasi. OLEH KARENA ITU PARA PIHAK SEPAKAT ATAS KETENTUAN DI BAWAH INI:
              </Typography>
            </Box>
            <Divider />
            <Box p={1}>
              <Typography variant="subtitle2" gutterBottom>
                <b>2. Definisi</b>
              </Typography>
              <Typography variant="caption" gutterBottom>
                <p>
                2.1 “Perjanjian” yaitu perjanjian ini (“Syarat dan Ketentuan”), Kebijakan Privasi, setiap bentuk lainnya, dan cara pembayaran;
                </p>
                <p>
                2.2 “Aplikasi” yaitu aplikasi yang dapat dipasang pada telepon genggam dari Mesermang! ;
                </p>
                <p>
                2.3 “Pengiriman” yaitu jasa pengiriman yang disediakan oleh Pedagang, pedagang disini adalah pedagang Pasar Tradisional yang bekerja sama atau pihak ketiga yang bekerja sama dengan Mesermang! ;
                </p>
                <p>
                2.4 “Barang” yaitu produk konsumen yang dijual secara eceran oleh Pedagang. Namun demikian, Mesermang! mempunyai wewenang tersendiri untuk tidak memasukkan Barang tersebut pada Platform;
                </p>
                <p>
                2.5 “Jam Operasional” yaitu waktu dan hari pada saat Pasar Tradisional terbuka untuk umum;
                </p>
                <p>
                2.6 “Pedagang yang Bekerja Sama” atau “Pedagang” adalah pihak ketiga, yang bekerja sama dengan Mesermang! untuk memasok Barang sehubungan dengan Layanan;
                </p>
                <p>
                2.7 “Platform” yaitu www.Mesermang.com, sebuah properti berupa domain internet yang terdaftar dan setiap aplikasi telepon genggam atau web yang menyediakan akses yang sama;

                </p>
                <p>
                2.8 “Kebijakan Privasi” yaitu perjanjian yang ditunjukkan pada Situs ini, mengatur cara kami mengumpulkan dan menyimpan data;

                </p>
                <p>
                2.9 Layanan” yaitu setiap layanan yang kami sediakan dan dapat Anda minta melalui Situs atau Aplikasi kami;

                </p>
                <p>
                2.10 “Situs” adalah www.Mesermang.com atau sub-domain lainnya yang kami gunakan untuk menawarkan Barang dan Layanan kami;

                </p>
                <p>
                2.11 “Anda”, “Kalian”, “Konsumen” yaitu Anda, seseorang yang mengakses Situs ini atau Aplikasi untuk memesan Barang dan menggunakan Layanan dari Situs atau Aplikasi atau cara lainnya untuk memesan dari Mesermang!

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
                3.1 Dengan melakukan pemesanan Barang melalui Situs atau Aplikasi Mesermang! berarti Anda memesan produk dari Pedagang yang Bekerja Sama (bukan dari Mesermang!); Mesermang! hanya sebuah penyedia Platform yang menyediakan Layanan bagi Konsumen untuk memesan Barang. Dalam hal terdapat keluhan dari Konsumen, Mesermang! melalui layanan pelanggan akan menyampaikan keluhan tersebut kepada Pedagang yang Bekerja Sama dan mencari solusi yang terbaik bagi Konsumen.
                </p>
                <p>
                3.2 Setiap informasi yang Anda berikan kepada Mesermang! hanya digunakan sehubungan dengan Layanan, Mesermang! menjamin bahwa informasi tersebut tidak akan dipindahkan, diberikan, atau diinformasikan kepada pihak ketiga lainnya, kecuali yang diatur secara spesifik dalam Syarat dan Ketentuan ini atau Kebijakan Privasi.

                </p>
                <p>
                3.3 Pada saat memesan melalui Situs ini Anda diminta untuk memberikan alamat e-mail dan sandi. Anda harus memastikan bahwa informasi mengenai hal tersebut aman dan Anda tidak memberikan informasi tersebut kepada pihak ketiga.
                </p>
                <p>
                3.4 Barang yang dikirim adalah untuk kebutuhan Anda dan tidak untuk dijual. Anda menjamin bahwa Anda tidak bertindak sebagai agen untuk pihak ketiga.

                </p>
                <p>
                3.5 Anda menjamin bahwa Anda cakap secara hukum untuk melakukan pemesanan atas Barang yang disediakan melalui Situs atau Aplikasi. Anda setuju untuk memberikan identitas yang valid sebelum membuat pesanan. Anda pun setuju untuk menunjukkan identitas yang valid, apabila diminta pada saat pengiriman untuk membuktikan identitas Anda.

                </p>
                <p>
                3.6 Kami akan melakukan seluruh tindakan yang diperlukan, sejauh kemampuan kami, untuk menjaga data pemesanan dan pembayaran Anda, namun demikian, apabila tidak terdapat kesalahan dari bagian kami, kami tidak dapat dianggap bertanggung jawab untuk setiap kerugian yang mungkin Anda terima apabila pihak ketiga melakukan tindakan tanpa persetujuan untuk mengakses setiap data yang Anda berikan pada saat mengakses atau memesan melalui Situs kecuali terbukti lain.
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
                4.1 Seluruh harga yang terdaftar pada Situs atau Aplikasi yang berdasarkan informasi dari Pedagang yang Bekerja Sama adalah benar pada saat dipublikasikan. Namun demikian, harga tersebut dapat berubah karena alasan bisnis. Sebagai penyedia platform, Mesermang! akan mengubah harga yang terdaftar segera setelah terjadinya perubahan oleh Pedagang.
                </p>
                <p>
                4.2 Seluruh harga yang terdaftar untuk pengiriman oleh pihak ketiga yang bekerja sama dengan Mesermang! yang tercantum pada Situs atau Aplikasi adalah benar pada saat publikasi. Namun demikian harga tersebut dapat berubah karena alasan bisnis. Sebagai penyedia platform, Mesermang! akan mengubah harga yang terdaftar setelah terjadinya perubahan oleh pihak ketiga tersebut.

                </p>
                <p>
                4.3 Total harga untuk Pengiriman, Barang atau Layanan yang dipesan, termasuk biaya pengiriman dan biaya lainnya, akan tercantum pada Situs pada saat Anda menempatkan pesanan Anda di proses periksa. Harga yang harus dibayar oleh Konsumen merupakan harga yang tercantum pada saat Konsumen berada di proses periksa dari Situs atau Aplikasi. Perubahan terhadap harga yang terdaftar tidak dapat terjadi pada saat Konsumen berada dalam proses periksa dari Situs atau Aplikasi.

                </p>
                <p>
                4.4 Anda sepakat untuk memberikan kuasa kepada Mesermang! untuk membayar pada saat barang sudah sampai di tangan Anda.

                </p>
                <p>
                4.5 Seluruh pembayaran harus dilakukan untuk seluruh Barang yang dikirim dan Layanan yang disediakan. Pembayaran harus dilakukan berdasarkan pilihan yang disediakan Mesermang! pada Situs atau Aplikasi.

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
                5.1 Waktu pengiriman yang disediakan pada saat pemesanan hanya perkiraan dan dapat berubah. Waktu pengiriman yang dapat dipilih adalah dalam rentang waktu 1-3 jam pada hari yang sama dengan hari pemesanan dan pada hari berikutnya. Jumlah pengiriman barang pada setiap waktu pengiriman adalah terbatas, hal ini berarti kami tidak dapat menjamin bahwa Anda akan menerima pengiriman sesuai dengan waktu yang Anda inginkan. Keterbatasan tersebut akan diberitahukan di Situs atau Aplikasi, dan Anda dapat memilih waktu pengiriman yang masih tersedia.
                </p>
                <p>
                5.2 Mesermang! akan melakukan pengiriman Barang tanpa berkerjasama dengan pihak ketiga. Kami akan berupaya sebaik mungkin untuk memastikan bahwa pengiriman dilakukan dalam rentang waktu 1-3 jam setelah Anda melakukan proses periksa.

                </p>
                <p>
                5.3 Namun demikian, Anda dapat menghubungi Mesermang! jika Anda tidak menerima Barang dalam rentang waktu yang sudah ditetapkan oleh pihak kami. Mesermang! akan memfasilitasi permasalahan Anda untuk menemukan solusi terbaik dalam situasi tersebut.
                </p>
                <p>
                5.4 Pengiriman hanya tersedia selama Jam Operasional dari Pasar Tradisional yang Bekerja Sama.

                </p>
                <p>
                5.5 Barang akan diantar ke alamat yang Anda tentukan pada saat pemesanan.

                </p>
                <p>
                5.6 Dalam keadaan tertentu apabila terjadi keterlambatan pengiriman, atas kebijakan sendiri, Mesermang! dapat tidak mengenakan biaya pengiriman terhadap Konsumen.
                </p>
                <p>
                5.7 Semua risiko atas Barang beralih kepada Anda pada saat Pengiriman.

                </p>
                <p>
                5.8 Jika Anda tidak dapat menerima Barang yang diantar kepada Anda pada saat Pengiriman, atau kami tidak dapat mengantarnya pada waktu yang sudah ditetapkan dikarenakan kesalahan Anda dalam memberikan informasi yang cukup dan instruksi yang tepat, maka Barang tersebut dianggap telah diantar kepada Anda dan semua risiko dan tanggung jawab atas Barang tersebut beralih pada Anda. Setiap penyimpanan, asuransi dan biaya/pengeluaran lain yang kami tanggung sebagai bagian dari ketidakmampuan melakukan pengiriman karena kesalahan Anda, menjadi tanggung jawab Anda dan Anda harus memberikan kompensasi yang diperlukan kepada Mesermang! apabila ada. Namun demikian, hal tersebut tidak berlaku apabila Anda sudah menghubungi Mesermang! melalui e-mail, telepon, atau layanan pelanggan.

                </p>
                <p>
                5.9 Anda harus memastikan bahwa pada saat Pengiriman Barang, pengaturan yang diperlukan termasuk akses pengiriman sudah tersedia demi keamanan pengiriman Barang tersebut. Kami tidak bertanggung jawab untuk setiap kerusakan, biaya dan pengeluaran yang timbul terhadap Barang tersebut atau tempat-tempat pada saat hal ini terjadi sebagai hasil atas kesalahan Anda dalam memberikan akses dan situasi yang memadai untuk pengiriman.

                </p>
                <p>
                5.10 Pedagang yang Bekerja Sama dan/atau Mesermang! tidak bertanggung jawab kepada Anda atas kerugian, kewajiban, biaya, kerusakan, denda, atau pengeluaran yang timbul dari keterlambatan pengiriman barang, kecuali jika terbukti bahwa keterlambatan tersebut diakibatkan oleh kesalahan Pedagang yang Bekerja Sama dan/atau Mesermang!.

                </p>
                <p>
                5.11 Mohon perhatikan bahwa pengiriman mungkin tidak dapat dilakukan ke beberapa lokasi. Dalam hal ini, kami akan memberikan pemberitahuan terlebih dahulu kepada Anda dan membatalkan pemesanan Anda.

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
                6.1 Anda memahami bahwa pada saat pemesanan, Barang mungkin tidak tersedia dikarenakan beberapa alasan dari Pedagang yang Bekerja Sama. Dalam hal ini, Mesermang! akan memberitahu Anda melalui layanan pelanggan kami (melalui e-mail atau telepon) bahwa barang yang Anda pesan tidak tersedia, dan akan mengembalikan setiap pembayaran yang telah Anda lakukan dalam waktu barang sudah Anda terima atau setelah transaksi, tergantung pada cara pembayaran Anda.

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
                7.1 Mesermang! dan Pedagang yang Bekerja Sama akan memberikan informasi dan penjelasan yang akurat untuk setiap produk, namun apabila Anda menerima produk-produk yang Anda anggap tidak dapat diterima, Anda berhak untuk menolak produk tersebut, dengan memberikan alasan mengapa produk tersebut tidak dapat diterima. Kami akan mempertimbangkan keberatan Anda dan mengembalikan pembayaran atas produk tersebut dalam waktu 1 (satu) hari kerja setelah transaksi, tergantung pada cara pembayaran Anda.

                </p>
                <p>
                7.2 Apabila atas pertimbangan lain, Anda tidak puas dengan pelayanan yang kami berikan, Anda dapat memberikan penilaian atas pelayanan kami melalui Situs atau Aplikasi. Berdasarkan kebijakan kami, Anda dapat menerima pengembalian uang dari sebagian biaya Layanan yang disediakan.

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
                8.1 Pada saat kami meminta informasi dari Anda untuk memastikan Pengiriman, Anda setuju untuk memberikan informasi yang akurat dan lengkap

                </p>
                <p>
                8.2 Anda sepakat untuk mengizinkan kami untuk menggunakan, menyimpan atau memproses informasi pribadi Anda yang diperlukan untuk menyediakan Pengiriman, Barang atau Layanan kepada Anda dan untuk tujuan pemasaran dan pengendalian kredit (“Penggunaan”). Penggunaan ini dapat berupa dibukanya informasi pribadi Anda pada pihak ketiga tertentu yang kami pilih, setiap kali kami meyakini bahwa layanan yang ditawarkan oleh pihak ketiga tersebut penting bagi Anda atau ketika hal ini diwajibkan oleh hukum, atau dalam rangka Pengiriman Makanan, Barang atau Layanan untuk Anda. Informasi lebih lanjut dapat dilihat pada Kebijakan Privasi kami.

                </p>
                <p>
                8.3 Anda berhak untuk meminta salinan informasi pribadi Anda yang kami miliki. Silakan hubungi kami ketika Anda ingin meminta informasi ini.

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
                Mesermang! akan berusaha sebaik mungkin untuk memfasilitasi keluhan Anda dengan menyampaikan keluhan tersebut kepada Pedagang yang Bekerja Sama atau Pedagang. Kami menanggapi keluhan pelanggan secara serius dan mengusahakan untuk menanggapi keluhan Anda sesegera mungkin. Segala keluhan ditujukan pada tumbassemarang@gmail.com atau melalui layanan pelanggan kami secara langsung.

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
                10.1 Kami berusaha sebaik mungkin untuk memastikan bahwa informasi pada Situs atau Aplikasi adalah benar dan bebas dari kesalahan pada setiap saat. Terlepas dari usaha maksimal kami, kami tidak dapat menjamin bahwa pada Situs atau Aplikasi akan selalu bebas dari kesalahan dan penggunaannya selalu sesuai dengan tujuan, tepat waktu dan setiap kesalahan akan dikoreksi, dan situs atau server bebas dari virus atau bug atau menunjukkan keseluruhan fungsi, akurasi, kehandalan Situs tersebut dan kami tidak dapat menjamin terhadap hal-hal tersebut, baik secara eksplisit atau implisit, berkaitan dengan kesesuaian dengan tujuan, atau akurasi.

                </p>
                <p>
                10.2 Dengan menyetujui ketentuan penggunaan ini Anda sepakat untuk melepaskan kami dari tanggung jawab apapun yang timbul dari penggunaan informasi dari pihak ketiga oleh Anda, atau konsumsi Barang dari Pedagang yang Bekerja Sama oleh Anda.

                </p>
                <p>
                10.3 Kami melepaskan setiap dan seluruh tanggung jawab kepada Anda terhadap pelaksanaan Pengiriman, pemasokan Barang dan Layanan selama diperbolehkan oleh peraturan perundang-undangan yang berlaku. Hal ini tidak mempengaruhi hak Anda berdasarkan hukum sebagai pelanggan. Apabila kami menemukan bahwa kami bertanggung jawab atas kehilangan atau kerugian apapun kepada Anda, tanggung jawab tersebut terbatas pada nilai yang telah Anda bayar untuk Barang atau Layanan yang relevan. Kami tidak dapat menerima tanggung jawab untuk setiap kehilangan, kerugian atau pengeluaran apapun, termasuk setiap kehilangan langsung atau tidak langsung seperti kehilangan keuntungan pada Anda, apapun alasannya. Pembatasan tanggung jawab ini tidak berlaku terhadap kecelakaan atau kematian pribadi yang timbul secara langsung atas kelalaian kami.

                </p>
                <p>
                10.4 Kami tidak menerima tanggung jawab apapun untuk setiap keterlambatan, kegagalan, kesalahan atau kelalaian atau kerugian atas informasi yang dikirimkan, virus atau kontaminasi lainnya atau hal-hal yang merusak yang dikirimkan kepada sistem komputer milik pelanggan melalui Situs atau Aplikasi kami.

                </p>
                <p>
                10.5 Kami tidak bertanggung jawab untuk setiap kegagalan atau keterlambatan dalam melakukan Layanan atau mengirimkan Barang yang mana kegagalan tersebut timbul sebagai akibat dari setiap tindakan atau kelalaian, yang di luar kendali kami seperti segala kejadian luar biasa dan tidak dapat dihindari yang disebabkan secara langsung dan khusus oleh kekuatan alam yang tidak dapat diantisipasi, dikendalikan, atau dicegah, dengan tindakan kehati-hatian, ketelitian, dan perhatian, termasuk namun tidak terbatas pada: perang, kerusuhan, huru-hara, perintah undang-undang atau pemerintah, peraturan, ketentuan atau arahan dan tindakan dari pihak ketiga.

                </p>
                <p>
                10.6 Apabila kami dikontrak untuk memberikan pesanan yang identik atau mirip kepada lebih dari satu Konsumen dan tidak dapat memenuhi seluruh kewajiban kami kepada Anda dengan alasan Keadaan Kahar, kami dapat menentukan berdasarkan wewenang kami, pesanan mana yang akan kami penuhi dan sejauh mana akan kami lakukan. Namun, kami akan memberikan pemberitahuan terlebih dahulu kepada pihak-pihak yang telah memesan tetapi tidak dapat dipenuhi pesanannya dan Anda berhak atas kebijakan pengembalian sebagaimana dijelaskan pada Bagian 7.

                </p>
                <p>
                10.7 Produk yang kami jual hanya untuk penggunaan perorangan lokal dan digunakan untuk konsumen. Dengan demikian, kami tidak bertanggung jawab atas setiap kehilangan yang tidak langsung, kehilangan karena suatu sebab, kehilangan data, kehilangan pendapatan atau keuntungan, kehilangan atau kerusakan pada properti dan/atau kerugian atas klaim dari pihak ketiga yang timbul atas penggunaan Situs atau Aplikasi atau untuk setiap produk atau layanan yang dibeli dari kami.

                </p>
                <p>
                10.8 Kami telah mengambil langkah-langkah untuk mencegah penipuan melalui Internet dan memastikan setiap data yang dikumpulkan dari Anda disimpan seaman mungkin. Namun, kami tidak bertanggung jawab dalam hal terjadi peristiwa yang kemungkinannya sangat kecil terjadi pada server komputer atau dari pihak ketiga.

                </p>
                <p>
                10.9 Dalam hal kami memiliki keyakinan bahwa terdapat penyalahgunaan voucher dan/atau kode diskon atau terdapat hal yang menimbulkan penipuan, Mesermang! dapat melakukan pemblokiran terhadap konsumen dengan segera dan berhak untuk menolak memberikan layanan di masa nanti terhadap konsumen tersebut. Kemudian, apabila terdapat penyalahgunaan voucher atau kode diskon, kami berhak untuk mendapat kompensasi dari setiap dan seluruh pelaku yang melakukan hal tersebut.

                </p>
                <p>
                10.10 Penawaran merupakan sesuatu yang menjadi kewenangan kami dan dapat ditarik kapanpun dengan pemberitahuan sebelumnya kepada calon Konsumen.

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
                11.2 Kami dapat melakukan sub-kontrak terhadap beberapa bagian atau bagian-bagian dari Layanan atau Barang yang kami sediakan kepada Anda dari waktu ke waktu.

                </p>
                <p>
                11.3 Kami akan mempublikasikan setiap perubahan yang materiil atau subtantif dari Syarat dan Ketentuan pada Situs atau Aplikasi, dan Anda harus membaca perubahan tersebut secara teliti. Jika Anda melanjutkan untuk menggunakan dan mengakses Situs atau Aplikasi setiap setelah Syarat dan Ketentuan yang diubah dipublikasikan, maka akan dianggap sebagai persetujuan Anda terhadap Syarat dan Ketentuan yang diubah.

                </p>
                <p>
                11.4 Setiap keberatan atas Syarat dan Ketentuan yang diubah harus diberikan kepada Mesermang! dalam waktu 7 (tujuh) hari setelah perubahan tersebut dipublikasikan pada Situs atau Aplikasi.

                </p>
                <p>
                11.5 Anda tidak dapat untuk menggunakan atau meluncurkan sistem otomatis atau program sehubungan dengan Situs atau Aplikasi Kami atau fungsi pemesanan online-nya.

                </p>
                <p>
                11.6 Anda tidak dapat mengumpulkan atau mengambil informasi mengenai identitas pribadi dari Situs atau Aplikasi, penggunaan sistem komunikasi yang disediakan oleh Situs atau Aplikasi untuk dikumpulkan secara komersil, pengumpulan untuk segala alasan oleh pengguna Situs atau Aplikasi sehubungan dengan pendaftarannya di Situs atau Aplikasi, atau mempublikasikan atau mendistribusikan setiap vouchers atau kode sehubungan dengan situs atau mengumpulkan atau pengambilan atau melakukan hack terhadap Situs atau Aplikasi.

                </p>
                <p>
                11.7 Syarat dan Ketentuan bersama dengan Kebijakan Privasi, setiap bentuk lainnya dan cara pembayaran merupakan satu kesatuan perjanjian antara Anda dan Kami. Tidak ada ketentuan baik secara eksplisit atau implisit yang akan menjadi bagian dari Perjanjian ini. Dalam hal terdapat perbedaan antara Syarat dan Ketentuan ini dan setiap dari ketentuan atau aturan pada Situs atau Aplikasi kecuali yang berkaitan dengan masalah privasi, maka Syarat dan Ketentuan akan berlaku.

                </p>
                <p>
                11.8 Jika terdapat ketentuan atau keadaan pada Perjanjian yang menjadi tidak valid, ilegal atau tidak dapat diterapkan, maka para pihak dengan ini sepakat bahwa ketentuan atau kondisi tersebut akan dihapus dan ketentuan lainnya dalam Perjanjian akan tetap berlaku tanpa ketentuan atau keadaan tersebut.
                </p>
                <p>
                11.9 Syarat dan Ketentuan ini dan Perjanjian kami diatur dan dibuat berdasarkan hukum Indonesia. Para pihak dengan ini sepakat untuk memilih jurisdiksi Pengadilan Negeri Semarang.

                </p>
                <p>
                11.10 Tidak ada penundaan atau kegagalan untuk menerapkan hak atau ganti rugi yang merupakan hak kami berdasarkan Perjanjian, yang akan dianggap sebagai pengesampingan atas bagian kami terhadap hak atau ganti rugi tersebut kecuali pengesampingan tersebut dikonfirmasi secara tertulis.

                </p>
                <p>
                11.11 Syarat dan Ketentuan ini dan kontrak (dan semua kewajiban non kontraktual yang timbul atau sehubungan dengan itu) diatur dan dibuat berdasarkan Hukum Indonesia. Kami dan Anda dengan ini secara non-ekslusif memilih jurisdiksi kepaniteraan Pengadilan Negeri Semarang. Seluruh kesepakatan, korespondensi dan kontak antara kita harus dibuat berdasarkan Bahasa Indonesia.

                </p>
              </Typography>
            </Box>
          </div>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}
export default Component;
