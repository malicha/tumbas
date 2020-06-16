const styles = theme => ({
  div: { marginRight: 70 },
  container: {
    marginTop: 48,
    marginBottom: 0,
    padding: 0
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: 56,
    backgroundColor: '#153b50',
    color: 'white'
  },
  root: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: 'white',
    color: 'white',
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    top: 0
  },
  menuButton: {
    color: '#42B549'
  },
  title: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    borderRadius: 15,
    backgroundColor: '#F2F2F2',
    marginLeft: 0,
    width: '100%'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#707585'
  },
  clearIcon: {
    right: 7,
    top: 6,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#707585',
    margin: 2
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  paper: {
    borderRadius: 0,
    minHeight: 600
  }
});

export default styles;
