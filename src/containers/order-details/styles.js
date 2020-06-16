const style = theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'theme.palette.background.paper',
    color: 'black'
  },
  root: { backgroundColor: 'white' },
  media: {
    height: 140
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    fontSize: 'small'
  },
  paperbtn: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 445
  },
  total: {},
  container: {
    marginTop: 48,
    marginBottom: 190,
    padding: 0,
    backgroundColor: '#f5f5f5'
  },
  icon: { paddingTop: 10 },
  Button: { backgroundColor: '#F15B5D', color: 'white' },
  paper: {
    borderRadius: 0,

    marginBottom: 10,
    backgroundColor: 'white'
  },
  paperlist: {
    borderRadius: 0,
    marginBottom: 10,
    backgroundColor: 'white'
  }
});

export default style;
