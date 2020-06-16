const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing(2),
    borderRadius: 0,
    width: '100%',
    maxWidth: 445,
    marginBottom: 5,
    [theme.breakpoints.down('xs')]: {
      paddingTop: '12%'
    },
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.05)'
  },
  roots: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing(2),
    borderRadius: 0,
    width: '100%',
    maxWidth: 445,
    paddingBottom: '5%',
    paddingTop: '5%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '5%'
    },
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.05)'
  },
  container: {
    paddingTop: '5%',
    padding: 0,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2)',
    paddingBottom: '4%'
  },
  appbar: {
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    top: 0,
    backgroundColor: '#FFFFFF',
    maxHeight: 120,
    boxShadow: ' 0px 1px 5px rgba(0, 0, 0, 0.05)',
    zIndex: 999
  },
  textProfil: {
    color: '#14181B'
  },
  profilApp: {
    display: 'flex',
    justifyContent: 'Space-Between',
    alignItems: 'center'
  },
  nama: {
    color: '#14181B'
  },
  bigAvatar: {
    marginTop: 20,
    marginRight: 10,
    width: 60,
    height: 60
  },
  versi: {
    padding: '4% 4% 4% 4%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  textVersi: {
    fontSize: 12
  }
});

export default styles;
