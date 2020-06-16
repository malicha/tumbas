const styles = theme => ({
  container: {
    padding: 0
  },
  appbar: {
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    top: 0,
    maxHeight: 120,
    background: 'white',
    zIndex: 0,
    boxShadow: ' 0px 1px 5px rgba(0, 0, 0, 0.05)'
  },
  backButton: {
    marginRight: 0,
    color: '#36C68A'
  },
  input: {
    marginBottom: 10,
    background: '#F2F2F2',
    borderRadius: 100,
    padding: '2%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '3%'
  },
  baseInput: {
    color: '#707585',
    fontSize: 12,
    paddingLeft: '2%',
    width: '90%'
  },
  textLok: {
    marginTop: 10,
    paddingRight: 0,
    color: 'black'
  },
  textLokasi: {
    paddingRight: 0,
    color: 'black'
  },
  gridPasar: {
    paddingTop: '24%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '30%'
    }
  },
  Kosong: {
    paddingTop: '35%'
  },
  dialog: {
    fontSize: 14
  },
  ganti: {
    fontSize: 12
  },
  gantiText: {
    fontSize: 12,
    paddingTop: '5%'
  }
});
export default styles;
