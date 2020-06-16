const styles = theme => ({
  root: {},
  empty: { paddingTop: 50 },
  card: {
    marginTop: 20
  },
  images: {
    maxWidth: 70
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    padding: 'auto',
    backgroundColor: 'white'
  },
  paper: {
    borderRadius: 8,
    margin: 10
  },
  bgpaper: {
    height: 500
  },
  image: {
    width: 50,
    height: 50
  },
  img: {
    width: 70,
    height: 60,
    borderRadius: 8
  },
  Button: {
    minHeight: 50
  },
  pesan: { backgroundColor: '#ED6B5A', color: 'white' },
  button: { backgroundColor: '#FF4600', color: 'white' },
  paperbtn: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  container: {
    marginTop: 48,
    marginBottom: 150,
    padding: 0,
    backgroundColor: '#FFFFFF',
    minHeight: '75vh',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  body: {
    borderRadius: 0
  },
  caption: {
    color: '#616161'
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 8,
    color: '#153b50'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflow: 'auto'
  },
  stickToBottom: {
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    bottom: 0,
    padding: 'auto',
    backgroundColor: 'white'
  },
  paperbtn: {
    padding: theme.spacing(2),
    borderRadius: 0
  }
});
export default styles;
