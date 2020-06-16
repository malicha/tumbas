import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import { getListPasar } from '../../services/vendor';
import ContentLoader from 'react-content-loader';
import BackButton from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import silang from '../../vector/silang.svg';
import MarketLIst from '../../components/market-list';
import Pasar from '../../vector/pasar.svg';
import { withRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

const MyLoader = () => (
  <ContentLoader
    height={568}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#dcdada"
  >
    <rect x="8" y="22" rx="0" ry="0" width="77" height="65" />
    <rect x="102" y="24" rx="0" ry="0" width="108" height="21" />
    <rect x="8" y="102" rx="0" ry="0" width="77" height="65" />
    <rect x="101" y="53" rx="0" ry="0" width="276" height="28" />
    <rect x="10" y="183" rx="0" ry="0" width="77" height="65" />
    <rect x="10" y="264" rx="0" ry="0" width="77" height="65" />
    <rect x="10" y="341" rx="0" ry="0" width="77" height="65" />
    <rect x="10" y="419" rx="0" ry="0" width="77" height="65" />
    <rect x="11" y="494" rx="0" ry="0" width="77" height="65" />
    <rect x="104" y="101" rx="0" ry="0" width="108" height="21" />
    <rect x="104" y="179" rx="0" ry="0" width="108" height="21" />
    <rect x="104" y="267" rx="0" ry="0" width="108" height="21" />
    <rect x="104" y="343" rx="0" ry="0" width="108" height="21" />
    <rect x="104" y="420" rx="0" ry="0" width="108" height="21" />
    <rect x="104" y="493" rx="0" ry="0" width="108" height="21" />
    <rect x="104" y="131" rx="0" ry="0" width="196" height="28" />
    <rect x="104" y="211" rx="0" ry="0" width="196" height="28" />
    <rect x="104" y="295" rx="0" ry="0" width="240" height="28" />
    <rect x="104" y="370" rx="0" ry="0" width="240" height="28" />
    <rect x="104" y="449" rx="0" ry="0" width="155" height="28" />
    <rect x="104" y="524" rx="0" ry="0" width="246" height="28" />
  </ContentLoader>
);

class Component extends React.Component {
  state = {
    listPasar: [],
    keyword: '',
    list: [],
    pasar: localStorage.getItem('selectedPasar'),
    isLoading: true,
    marked: false,
    open: false,
    kosong: false,
    confirm: false,
    isOpen: false,
    temporaryPasar: {}
  };

  async componentDidMount() {
    const listPasar = await getListPasar('');
    this.setState({
      listPasar,
      keyword: '',
      isLoading: false
    });
  }

  handleSearchChange = async event => {
    const keyword = event.target.value;
    this.setState({
      isLoading: true
    });
    // if (keyword === '') {
    //   this.setState({
    //     keyword,
    //     listPasar: [],
    //     kosong: true
    //   });
    //   return;
    // }

    await this.setState({
      keyword
    });

    setTimeout(() => {
      if (this.state.keyword === keyword) {
        this.updateMarketList(keyword);
      }
    }, 500);
  };

  updateMarketList = async keyword => {
    this.setState({
      isLoading: true
    });

    const listPasar = await getListPasar(keyword);

    this.setState({
      keyword,
      listPasar,
      isLoading: false
    });

    console.log(this.state.listPasar);

    // if (this.state.listPasar.length === 0) {
    //   this.setState({ kosong: true });
    // } else {
    //   this.setState({ kosong: false });
    // }
  };

  cancel = () => {
    this.setState({ keyword: '' });
  };

  cancelOrderConfirm = () => {
    this.setState({ confirm: true });
  };

  closeConfirm = () => {
    this.setState({ confirm: false });
  };

  confirmPasar = () => {
    localStorage.setItem(
      'selectedPasar',
      JSON.stringify(this.state.temporaryPasar)
    );
    this.props.cartStateSetDefault();

    localStorage.removeItem('cart_items');
    this.setState({ marked: true });
    this.props.history.push('/');
  };

  render() {
    const { classes, history } = this.props;
    const { keyword } = this.state;

    return (
      <React.Fragment>
        <Container maxWidth="xs" className={classes.container}>
          <CssBaseline />
          {window.location.pathname == '/market' ? (
            <>
              <AppBar
                elevation={0}
                position="static"
                className={classes.appbar}
              >
                <Toolbar variant="dense">
                  <Grid
                    container
                    spacing={0}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <Grid item xs={1}>
                      <IconButton
                        edge="start"
                        className={classes.backButton}
                        onClick={() => {
                          this.props.history.push('/');
                        }}
                      >
                        <BackButton />
                      </IconButton>
                    </Grid>

                    <Grid item xs={11}>
                      <Typography className={classes.textLokasi}>
                        <b>Pilih Lokasi Pasar</b>
                      </Typography>
                    </Grid>

                    <Grid container spacing={0}>
                      <Grid className={classes.input} item xs={12}>
                        <SearchIcon style={{ color: '#707585' }} />
                        <InputBase
                          className={classes.baseInput}
                          autoFocus
                          placeholder="Pasar apa yang kamu cari ?"
                          onChange={this.handleSearchChange}
                          value={keyword}
                        />
                        {this.state.keyword !== '' && (
                          <img src={silang} onClick={this.cancel} />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </>
          ) : (
            <AppBar elevation={0} position="static" className={classes.appbar}>
              <Toolbar variant="dense">
                <Grid
                  container
                  spacing={0}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Grid item xs={12}>
                    <Typography className={classes.textLok}>
                      <b>Pilih Lokasi Pasar</b>
                    </Typography>
                  </Grid>

                  <Grid container spacing={0}>
                    <Grid className={classes.input} item xs={12}>
                      <SearchIcon style={{ color: '#707585' }} />
                      <InputBase
                        className={classes.baseInput}
                        autoFocus
                        placeholder="Pasar apa yang kamu cari ?"
                        onChange={this.handleSearchChange}
                        value={keyword}
                      />
                      {this.state.keyword !== '' && (
                        <img src={silang} onClick={this.cancel} />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          )}

          {this.state.isLoading == true ? (
            <div style={{ width: '100%' }}>
              <MyLoader />
            </div>
          ) : (
            <>
              {this.state.listPasar.length > 0 ? (
                <Grid container spacing={0} className={classes.gridPasar}>
                  {this.state.listPasar.map(pasar => (
                    <Grid item xs={12} key={pasar.display_name}>
                      <MarketLIst
                        click={() => {
                          const isSelectedPasar = JSON.parse(
                            localStorage.getItem('selectedPasar')
                          );

                          if (isSelectedPasar) {
                            this.setState({
                              confirm: true,
                              temporaryPasar: pasar
                            });
                          } else {
                            localStorage.setItem(
                              'selectedPasar',
                              JSON.stringify(pasar)
                            );
                            this.props.cartStateSetDefault();

                            localStorage.removeItem('cart_items');
                            this.setState({ marked: true });
                            {
                              !this.state.pasar
                                ? window.location.reload()
                                : history.push('/');
                            }
                          }
                        }}
                        pasar={pasar}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <div>
                  <Grid item xs={12} align="center" className={classes.Kosong}>
                    <img src={Pasar} />
                    <Typography style={{ paddingTop: '5%', fontSize: 16 }}>
                      <b>Uups..</b>
                    </Typography>
                    <Typography style={{ paddingTop: '5%', fontSize: 13 }}>
                      Uups.. Pasar yang anda cari tidak ditemukan atau tidak
                      tersedia.
                    </Typography>
                  </Grid>
                </div>
              )}
            </>
          )}
        </Container>

        <Dialog open={this.state.confirm} onClose={this.closeConfirm}>
          <DialogTitle id="alert-dialog-title">
            <Typography className={classes.dialog}>
              <b>Peringatan</b>
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography className={classes.ganti}>
                Apakah anda yakin akan mengganti pasar?
              </Typography>

              <Typography className={classes.gantiText}>
                Keranjang belanja akan dikosongkan jika Anda mengganti pasar.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions align="left">
            <Button
              onClick={this.closeConfirm}
              color="primary"
              style={{
                backgroundColor: 'none',
                color: '#9FA3A6',
                fontWeight: 'bold'
              }}
            >
              Kembali
            </Button>
            <Button
              onClick={this.confirmPasar}
              autoFocus
              style={{ fontWeight: 'bold', color: '#F15B5D' }}
            >
              Ya, Ganti Pasar
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default withRouter(Component);
