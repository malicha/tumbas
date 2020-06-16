import React from 'react';
import Appbar from '../../components/app-bar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Logo from '../../vector/logomesermang.png';

class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <Appbar title="Tentang Kami" goBack={true} />
          <Paper className={classes.paper}>
            <div align="center" style={{ paddingTop: '3%' }}>
              <img alt="Tumbasin" className={classes.img} src={Logo} />
              <Divider />
              <Box p={1}>
                <Typography variant="subtitle2" gutterBottom>
                  <b>MESERMANG!</b>
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <p>
                    Sebuah platform teknologi yang bertujuan untuk menghubungkan
                    akang teteh pembeli dengan pedagang Pasar Tradisional,
                    Petani Lokal dan Pedagang Kecil lainnya.
                  </p>
                  <p>
                    MeserMang! membantu akang teteh ibu bapa yang nyaah sayang
                    keluarga dengan menyediakan kebutuhan bahan makanan,
                    buah-buahan, jajanan, cemilan, rempah, vitamin, obat bebas
                    dan kebutuhan sehari-hari lainnya dengan harga yang murah
                    dan langsung diantarkan ke rumah
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
