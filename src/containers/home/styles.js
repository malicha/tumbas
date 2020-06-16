const styles = theme => ({
  appbar: {
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    top: 0,
    maxHeight: 120,
    zIndex: 999
  },
  appbar2: {
    background: 'white',
    color: 'white',
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    top: 0,

    zIndex: 99
  },
  search: {
    position: 'relative',
    borderRadius: 50,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white'
    },
    marginLeft: 0,
    width: '100%'
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto'
    // }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  container: {
    marginTop: 48,
    marginBottom: 56,
    padding: 0
  },
  box: {
    marginTop: 8,
    padding: 4
  },
  paper: {
    borderRadius: 0,
    minHeight: 550,
    paddingTop: 120
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: 56,
    backgroundColor: '#153b50',
    color: 'white'
  },
  badge: {
    margin: 16
  },
  listTitle: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 17,
    color: '#14181B'
  },
  listTitle2: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 12,
    color: '#14181B'
  },
  listTitle3: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 4,
    marginRight: 20,
    color: '#F15B5D'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflow: 'auto'
  }
});

export default styles;
