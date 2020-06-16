const styles = theme => ({
  root: {
    marginTop: 50,
    padding: 10
  },
  icon: {
    paddingTop: 10
  },
  kupon: {
    marginTop: 15,
    marginRight: 10
  },
  paperbtn: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 445,
    borderRadius: 0
  },
  container: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0,

    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  button: {
    backgroundColor: '#56C25C',
    color: 'white'
  },
  pasar: {
    marginTop: 0
  },
  transfer: {
    marginTop: 70
  },
  rumah: {
    marginTop: 5
  },
  tf: {
    marginTop: 110
  },
  rumahdetail: {
    color: '#757575',
    fontSize: 10
  },
  transferdetail: {
    color: '#757575',
    fontSize: 12
  },
  divider: {
    marginTop: 10
  },
  body: {
    borderRadius: 0,
    marginTop: 20
  },
  grid: {
    padding: 10
  },

  stickToBottom: {
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    bottom: 0,
    padding: 'auto',
    backgroundColor: 'white',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  fullPaper: {
    maxWidth: 442,
    marginLeft: '-0.5%',
    position: 'absolute',
    bottom: 0,
    // maxHeight: 350,
    maxHeight: 430
  },
  btnCoppy: {
    marginLeft: 30,
    maxWidth: 50,
    minWidth: 50,
    maxHeight: 30,
    minHeight: 30,
    [theme.breakpoints.up('md')]: {
      marginLeft: 65
    }
  },
  gridText: {
    padding: '4% 4% 0% 4%',
    width: '100%',
    maxWidth: 450
  },
  text: {
    fontSize: 13
  }
});

export default styles;
