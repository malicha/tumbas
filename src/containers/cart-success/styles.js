const styles = theme => ({
  typography: {
    color: 'black',
    paddingLeft: 40,
    paddingRight: 40
  },
  container: {
    marginTop: 50,
    marginBottom: 0,
    padding: 0
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    padding: 'auto'
  },
  paperbtn: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 444,
    borderRadius: 0
  },
  button: {
    backgroundColor: '#F15B5D',
    color: 'white',
    textTransform: 'none'
  },
  paper: {
    borderRadius: 0
  }
});
export default styles;
