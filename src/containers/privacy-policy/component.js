import React from 'react';
import Appbar from '../../components/app-bar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


class Component extends React.Component {
  render() {
    const { classes,  } = this.props;
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <Appbar title="Kebijakan Privasi" goBack={true} />
          <Paper className={classes.paper}>
          <Box style={{paddingTop:"3%"}} >
            <Typography>
              <b>Kebijakan Privasi</b>
            </Typography>
            <Typography variant="caption" >
              <p>
              Kebijakan Privasi ini telah dibuat oleh Mesermang! untuk melindungi dan menjaga privasi dari Pengguna Situs atau Aplikasi milik kami (Mesermang!). Kami menyediakan kebijakan ini kepada Anda untuk menginformasikan Anda informasi-informasi yang dapat kami kumpulkan selama Anda mengunjungi Situs milik Mesermang! (“Situs”) atau aplikasi dari telepon genggam (“Aplikasi”), mengapa kami mengumpulkan informasi pelanggan, untuk apa kami menggunakan informasi tersebut, dalam kondisi seperti apa kami dapat membuka informasi tersebut, dan bagaimana Anda dapat menginstruksikan kami untuk membatasi penggunaan informasi tersebut. Kebijakan Privasi ini merupakan bagian yang tidak terpisahkan dari Syarat dan Ketentuan kami. Apabila terdapat perbedaan antara Kebijakan Privasi dan Syarat dan Ketentuan sehubungan dengan hal-hal yang berkaitan dengan privasi, maka ketentuan dalam Kebijakan Privasi ini yang berlaku.
              </p>
            </Typography>
          </Box>
          <Divider />
          <Box style={{paddingTop:"3%"}}>
            <Typography>
              <b>1. Data Yang Dikumpulkan dalam Situs ini</b>
            </Typography>
            <Typography variant="caption" >
              <p>
                1.1 Alamat IP:
                <p>
                Ketika mengunjungi Situs, alamat IP dari komputer milik pengguna akan terdaftar pada sistem online Mesermang!. Alamat IP adalah deretan angka biner dari komputer yang digunakan ketika mengunjungi Situs. Alamat IP didaftarkan agar Mesermang! dapat melacak komputer yang digunakan dalam hal terjadi penyalahgunaan atau perbuatan melawan hukum sehubungan dengan kunjungan pada atau penggunaan Situs. Selanjutnya, alamat IP digunakan untuk memperoleh perkiraan lokasi Anda (tingkat kota).

                </p>
              </p>
              <p>
                1.2 Jenis perangkat yang Anda gunakan Misalnya:
                <p>
                komputer, telepon genggam, dsb, sistem operasional yang Anda gunakan.
                </p>
              </p>
              <p>
              1.3 Jenis situs pencari (web browser) yang Anda gunakan Misalnya:
                <p>
                Google Chrome, Mozilla Firefox, Safari, Internet Explorer, dsb.

                </p>
              </p>
              <p>
              1.4 Informasi Pribadi Dalam rangka memproses pesanan Anda dengan menggunakan Situs atau Aplikasi, kami menghendaki Anda untuk memberikan beberapa informasi pribadi kepada kami yang mengidentifikasi Anda secara personal dan lokasi pengiriman Anda. Kami menerima dan menyimpan seluruh informasi yang Anda masukkan di bagian manapun pada Situs atau Aplikasi. Hal ini termasuk:

                <p>
                1.4.1 Formulir Pendaftaran:
                  <p>
                  Informasi termasuk, namun tidak terbatas pada: Nama, Alamat, Nomor Telepon, Alamat E-mail.
                  </p>
                </p>
                <p>
                  1.4.2 Formulir Pemesanan:
                  <p>
                  Informasi, termasuk namun tidak terbatas pada: Tanggal Berakhir, dan Alamat Pengiriman.

                  </p>
                </p>
                <p>
                  1.4.3 Informasi Pengiriman:
                  <p>
                  Informasi termasuk, namun tidak terbatas pada: Nama, Alamat, Nomor Telepon, Instruksi Khusus Pengiriman.
                  </p>
                </p>
                <p>
                  1.4.4 Informasi
                  <p>
                    Pelanggan: Informasi termasuk, namun tidak terbatas pada: Produk Yang Dipesan, Jumlah Pesanan.
                  </p>
                </p>
                <p>
                  1.4.5 Informasi Pelanggan Lainnya:
                  <p>
                  Apabila Anda berkomunikasi dengan kami melalui e-mail, atau mengisi formulir secara online, survey, atau melalui suatu kontes, setiap informasi yang diberikan tersebut dapat dianggap sebagai Informasi Pribadi.
                  </p>
                  Informasi ini secara bersama-sama disebut sebagai “Informasi Pribadi”. Anda dapat memilih untuk tidak memberikan Informasi Pribadi tertentu kepada kami. Dalam kondisi tersebut, Anda tetap dapat mengakses dan melihat sebagian besar Situs atau Aplikasi, namun, Anda tidak dapat memesan produk apapun. Selain itu, Anda dapat memilih untuk tidak memberikan informasi tertentu, namun Anda mungkin tidak dapat menerima seluruh manfaat dari fitur-fitur pada Situs atau Aplikasi.

                </p>
              </p>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>2. Bagaimana kami menggunakan Informasi Pribadi Anda</b>
                </Typography>
                <Typography variant="caption" >
                Kami menggunakan Informasi Pribadi Anda untuk tujuan berdasarkan permintaan Anda, memproses dan mengisi pesanan pelanggan, memverifikasi kualifikasi Anda terhadap produk dan layanan tertentu, penagihan, memperbaiki layanan kami, menyediakan pengalaman berbelanja yang lebih baik dan sesuai kebutuhan pribadi Anda, berkomunikasi dengan Anda, dan menginformasikan penawaran khusus kepada Anda. Dari waktu ke waktu, kami dapat menggunakan Informasi Pribadi Anda untuk mengirim sampel produk baru atau merek produk yang berbeda dari yang biasa Anda pesan secara cuma-cuma kepada Anda. Namun, apabila Anda memilih untuk “opt out” (keluar) dari fitur ini, silakan merujuk pada Bagian 10 dari Kebijakan Privasi ini. Dengan menyetujui Kebijakan Privasi ini, Anda memahami dan sepakat bahwa Mesermang! dapat memberikan Informasi Pribadi Anda kepada pihak ketiga selama diperlukan atau dibutuhkan untuk memenuhi pesanan Anda atau menyelesaikan transaksi Anda. Sebagai contoh, kami dapat menggunakan pihak ketiga sebagai penyedia/pemasok barang tertentu, sebuah perusahaan pengiriman lain untuk mengirim pesanan, dan dalam hal pemrosesan kartu kredit oleh suatu perusahaan untuk menagih pengguna atas barang dan layanan. Kami juga dapat memberikan Informasi Pribadi Anda sebagaimana dijelaskan dalam Bagian 5 dan 12 di bawah. Sebagai pengecualian terhadap yang diatur di atas, dan pada Bagian 5 dan 12 di bawah, kami tidak akan memberikan Informasi Pribadi Anda kepada pihak ketiga kecuali Anda telah memberikan izin kepada kami untuk melakukannya.

                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>3. Penyebaran Informasi Pribadi</b>
                </Typography>
                <Typography variant="caption" >
                Sebagai tambahan terhadap Bagian 2 di atas, kami menyebarkan informasi demografi kepada rekan kami secara anonim dan berdasarkan jumlah keseluruhan. Jenis data ini tidak terhubung dengan setiap informasi pribadi yang dapat diindentifikasi. Kami bekerja sama dengan pihak ketiga untuk memberikan layanan kepada Anda. Kami menyebarkan informasi ketika perusahaan lain terlibat dalam transaksi sehingga perusahaan tersebut dapat melaksanakan fungsinya.

                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>4. Pengendali Data</b>
                </Typography>
                <Typography variant="caption" >
                  <p>
                  4.1 Untuk informasi dimana Mesermang! menjadi pengendali data, Mesermang! akan menjadi pengendali data terhadap data induk yang Anda masukkan sehubungan dengan pembuatan profil atau pendaftaran untuk newsletter, yaitu nama Anda, sandi Anda dan alamat e-mail Anda, serta pendaftaran alamat IP Anda. Selanjutnya, Mesermang! akan menjadi pengendali data terhadap informasi yang diberikan kepada penyedia jasa lainnya.

                  </p>

                  <p>
                  4.2 Untuk informasi dimana Anda menjadi pengendali data, Anda akan menjadi pengendali data terhadap konten yang Anda pilih untuk diberikan pada Situs dan untuk data yang diberikan pada profil Anda dalam Media Sosial, yang merupakan akibat atas terhubungnya profil Anda pada Situs dengan profil Anda di Media Sosial.

                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}} >
                <Typography>
                  <b>5. Pengolah Data</b>
                </Typography>
                <Typography variant="caption" >
                Mesermang! dapat secara ekslusif menggunakan jasa perusahaan untuk memelihara teknis operasional, keamanan, kerahasiaan data pribadi yang dimuat dalam Situs. Perusahaan ini adalah pengolah data sehubungan dengan data pribadi dimana Mesermang! menjadi pengendali datanya. Dengan menyetujui Kebijakan Privasi ini, Anda memberikan persetujuan kepada Mesermang! untuk mengizinkan pengolah data yang sama untuk memproses data-data dimana Anda adalah pengendali datanya. Pengolah data dapat bertindak sendiri berdasarkan instruksi dari Mesermang!. Dengan menyetujui Kebijakan Privasi ini, Anda memberikan persetujuan Anda kepada Mesermang! untuk memberikan instruksi yang diperlukan kepada pengolah data untuk memproses data berdasarkan Kebijakan Privasi ini dan untuk keperluan penggunaan Situs. Pengolah data telah membuat tindakan teknis dan pengelolaan kemananan yang dianggap perlu terhadap informasi yang secara tidak sengaja atau melawan hukum dirusak, hilang atau kualitasnya memburuk dan terhadap informasi yang diketahui oleh orang yang tidak berhak, disalahgunakan atau dengan cara yang lain yang bertentangan dengan cara-cara pengolahan data pribadi. Atas permintaan Anda – dengan memperhatikan pemberian upah kepada pengolah data dengan hitungan tarif per jam – pengolah data memberikan Anda informasi yang cukup untuk memperlihatkan bahwa tindakan teknis dan pengelolaan kemananan telah dibuat. Dalam hal tersebut, Mesermang! akan memfasilitasi permintaan Anda kepada pengolah data.

                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>6. Tindakan Pengamanan</b>
                </Typography>
                <Typography variant="caption" >
                Mesermang! akan berupaya semaksimal mungkin untuk menjamin bahwa data yang dicatat, termasuk informasi pribadi, data kartu kredit, sandi dan informasi rahasia lainnya, tidak akan dibuka, dipindahkan, diberikan kepada atau digunakan secara melawan hukum oleh pihak yang tidak berwenang. Berkaitan dengan hal ini, Mesermang! secara berkala akan memeriksa sistemnya untuk mencegah serangan dan kerentanan terhadap hal-hal tersebut. Namun demikian, dikarenakan internet adalah ruang yang tidak 100% aman, Mesermang! tidak dapat setiap waktu memastikan atau menjamin keamanan informasi yang dikirim ke Mesermang!. Informasi yang dikirim melalui Situs tidak terenkripsi, dan oleh karena itu Mesermang! menyarankan Anda untuk secara hati-hati menyampaikan informasi yang bersifat rahasia melalui jaringan internet. Namun demikian, Mesermang! dapat memberikan catatan audit untuk seluruh aktivitas yang dilakukan pada Situs apabila hal ini diminta oleh instansi yang berwenang untuk keperluan hukum sebagaimana ditentukan dalam peraturan perundang-undangan yang berlaku.

                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>
                  7. Situs ini menggunakan cookies dan berikut ini kami menjelaskan cookies apa yang kami gunakan dan untuk tujuan apa hal tersebut digunakan. Dengan menggunakan Situs kami, Anda menerima bahwa kami menggunakan cookies sebagaimana dijelaskan sebagai berikut.

                  </b>
                </Typography>
                <Typography variant="caption" >
                  <p>
                  7.1 Apa itu cookies? Cookies adalah satuan kecil dari informasi yang Situs tempatkan pada hard disk komputer , tablet, atau smartphone Anda. Cookies berisi informasi yang Situs gunakan untuk membuat komunikasi antara Anda dan situs pencari (web browser) Anda menjadi lebih efisien. Cookies tidak mengidentifikasi Anda sebagai seorang pengguna individu, melainkan komputer Anda. Terdapat dua jenis Cookies, yaitu session cookies dan persistent cookies. Session Cookies adalah bagian informasi yang bersifat sementara yang dihapus ketika Anda keluar dari situs pencari (web browser) Anda. Persistent Cookies adalah bagian informasi yang lebih bersifat permanen yang disimpan dan berada di komputer Anda sampai informasi-informasi tersebut dihapus. Persistent Cookies terhapus dengan sendirinya setelah periode waktu tertentu namun diperbaharui setiap kali Anda mengunjungi Situs. Situs menggunakan session cookies dan persistent cookies.
                  </p>

                  <p>
                  7.2 Jenis cookies apa yang kami gunakan dan untuk tujuan apa? Kami menggunakan cookies untuk:

                    <p>
                      7.2.1 Statistik
                      <p>
                      Mengukur lalu lintas Situs, yaitu jumlah pengunjung pada Situs, dari mana domain asal pengunjung, halaman apa yang dikunjungi pengunjung pada Situs, dan di mana lokasi area geografis pengunjung secara umum.
                      </p>
                    </p>
                    <p>
                      7.2.2 Peningkatan fungsi Situs
                      <p>
                      Mengoptimalisasi pengalaman Anda dengan Situs, termasuk mengingat ID Pengguna Anda dan sandi ketika Anda kembali ke Situs, sehingga Anda tidak harus melakukan proses log-in lagi.
                      </p>
                    </p>
                    <p>
                      7.2.3 Menghubungkan dengan Media Sosial
                      <p>
                      Kami memberikan Anda kemungkinan untuk terhubung dengan Media Sosial, seperti Facebook.
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
                    7.3.1 Google Analytic: untuk keperluan statistik. Anda dapat menolak cookies dari Google Analytic dengan mengklik tautan ini http://tools.google.com/dlpage/gaoptout

                    </p>
                    <p>
                    7.3.2 Facebook: Ditempatkan oleh Facebook hanya apabila Anda berinteraksi dengan plug-in Facebook atau masuk ke dalam Facebook dari sumber yang lain dengan maksud untuk terhubung dan terintegrasi dengannya.
                    </p>
                    <p>
                    7.3.3 Twitter: Ditempatkan oleh Twitter hanya apabila Anda berinteraksi dengan plug-in Twitter atau masuk ke dalam Twitter dari sumber yang lain dengan maksud untuk terhubung dan terintegrasi dengannya.

                    </p>
                    <p>
                    7.3.3 Google+: Ditempatkan oleh Google+ hanya apabila Anda berinteraksi dengan plug-in Google+ atau masuk ke dalam Google+ dari sumber yang lain dengan maksud untuk terhubung dan terintegrasi dengannya

                    </p>
                  </p>
                  <p>
                    7.4 Penghapusan Cookies
                    <p>
                    Apabila Anda menginginkannya, Anda dapat menghapus cookies yang telah ada pada perangkat Anda. Jika Anda menggunakan PC atau browser terbaru, Anda dapat menekan CTRL + SHIFT + DELETE secara bersamaan. Jika shortcuts tersebut tidak berkerja pada browser Anda, silahkan kunjungi halaman pendukung pada browser yang bersangkutan. Mohon perhatikan bahwa Situs kami tidak akan bekerja secara maksimal apabila Anda menghapus cookies tersebut.

                    </p>
                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>8. Informasi yang Hilang atau Dicuri</b>
                </Typography>
                <Typography variant="caption" >
                Apabila nama pengguna, atau sandi Anda hilang, dicuri atau digunakan tanpa ijin, Anda harus segera menghubungi kami melalui Layanan Pelanggan kami di nomor +62 811 229 7774 dan/atau mengirimkan email ke mesermang.id@gmail.com. Dalam hal ini, kami akan menganggap bahwa Anda telah membatalkan nama pengguna, dan sandi yang Anda gunakan pada sistem kami dan selanjutnya Kami akan memperbarui data kami.

                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}} >
                <Typography>
                  <b>9. Akses, koreksi dan penghapusan</b>
                </Typography>
                <Typography variant="caption" >
                  <p>
                    9.1 Akses
                    <p>
                    Atas permintaan tertulis kepada Mesermang! melalui informasi kontak yang terdapat dalam Bagian 10, Mesermang! akan memberikan informasi kepada Anda mengenai tujuan pemrosesan; siapa yang menerima informasi dan dari mana informasi tersebut berasal. Mesermang! akan memberikan informasi tersebut di atas sesegera mungkin.

                    </p>
                  </p>

                  <p>
                    9.2 Koreksi dan penghapusan
                    <p>
                    Apabila Anda menemukan bahwa Mesermang! sebagai pengendali data memproses data yang salah atau menyesatkan, Mesermang! akan mengoreksi berdasarkan permintaan Anda. Kami merekomendasikan agar Anda – apabila memungkinkan – mengoreksi kesalahan tersebut sendiri. Anda kapanpun dapat mengoreksi atau menghapus konten dan informasi apapun pada Situs, dimana Anda berperan sebagai pengendali data, lihat pada Bagian 4.2. Apabila data pribadi berubah, atau apabila Anda tidak lagi menginginkan data tersebut muncul pada Situs, Anda dapat memperbaharui atau menghapus informasi dengan melakukan proses log in pada profil pengguna Anda. Ketika profil Anda telah dihapus, semua data yang berhubungan dengan profil pengguna Anda akan terhapus.
                    </p>
                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>10. Bagaimana membatasi penggunaan informasi Anda</b>
                </Typography>
                <Typography variant="caption" >
                Pengguna kami diberikan kesempatan untuk “opt out” (keluar), agar informasi mereka tidak digunakan untuk kepentingan yang tidak berkaitan langsung terhadap penempatan, pemrosesan, pemenuhan atau pengiriman suatu pesanan produk pada saat kami menanyakan informasi. Apabila Anda “opt out” (keluar) dan tidak ingin kami mengirim materi yang kami pikir Anda akan tertarik, seperti informasi produk, contoh produk, dan pesan/e-mail promosi dari kami dan situs dan perusahaan yang kami miliki, Anda dapat memberitahu kami melalui salah satu dari dua cara di bawah ini:

                  <p>10.1 Mengirim email ke: tumbassemarang@gmail.com</p>
                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>11. Perubahan pada Kebijakan Privasi</b>
                </Typography>
                <Typography variant="caption" >
                  <p>
                  11.1 Mesermang! dapat sewaktu-waktu membuat perubahan pada Kebijakan Privasi-nya dengan efek di masa yang akan datang. Kami akan memberitahu terlebih dahulu mengenai perubahan tersebut. Mesermang! akan memberikan informasi kepada pengguna Situs mengenai perubahan tersebut ketika pengguna masuk ke Situs. Apabila Anda menginginkannya, Mesermang! akan memberikan informasi mengenai perubahan yang substansial pada Kebijakan Privasi ini melalui e-mail Anda yang terdaftar di data kami.

                  </p>

                  <p>
                  11.2 Anda sepakat bahwa dengan tetap menggunakan Situs atau Applikasi setelah versi Kebijakan Privasi yang telah dimodifikasi, adalah bentuk persetujuan Anda terhadap Kebijakan privasi yang telah dimodifikasi tersebut.

                  </p>
                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>12. Pengungkapan yang Disyaratkan oleh Hukum</b>
                </Typography>
                <Typography variant="caption" >
                Kami dapat mengungkapkan Informasi Pribadi ketika disyaratkan oleh hukum atau ketika tindakan tersebut dibutuhkan dalam rangka mematuhi perintah undang-undang atau untuk memenuhi panggilan pengadilan atau proses hukum yang ditujukan kepada Mesermang! atau karyawan atau prinsipal. Lebih lanjut, kami berhak mengungkap informasi tersebut ketika Mesermang! meyakini bahwa pengungkapan tersebut diperlukan untuk mengidentifikasi, menghubungi, atau melakukan tindakan hukum terhadap pihak yang mungkin melanggar Syarat dan Ketentuan Mesermang! atau yang mungkin mengakibatkan kerugian atau gangguan terhadap hak-hak atau properti milik Mesermang!, pelanggan terdaftar atau calon pelanggan Mesermang! atau pihak lain yang mungkin dirugikan karena tindakan tersebut.

                </Typography>
              </Box>
              <Divider />
              <Box style={{paddingTop:"3%"}}>
                <Typography>
                  <b>13. Pertanyaan mengenai Situs dan Kebijakan privasi</b>
                </Typography>
                <Typography variant="caption" >
                Apabila ada pertanyaan mengenai Kebijakan Privasi Mesermang!, pengolahan data kami, perbaikan data atau hubungan Anda dengan kami secara umum, silakan menghubungi Mesermang! melalui email mesermang.id@gmail.com

                </Typography>
              </Box>
            </Typography>
            </Box>
            </Paper>
        </Container>
      </React.Fragment>
    );
  }
}
export default Component;
