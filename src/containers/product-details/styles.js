const styles = theme => ({
  media: {
    height: 250,
    borderRadius: 5
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 13
  },
  old: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  price: {
    color: '#F1885B',
    fontWeight: 'bold',
    fontSize: 12
  },
  container: {
    padding: 0,
    marginTop: 48,
    marginBottom: 0
  },
  cardMediaTitle: {
    color: 'white',
    backgroundColor: '#F67778',
    width: 'fit-content',
    fontWeight: 'bold',
    fontSize: 17,
    borderRadius: 3,
    opacity: 0.9,
    marginBottom: 226,
    paddingLeft: 4,
    paddingRight: 4
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '-webkit-fill-available'
  },
  descript: {
    padding: 20
  },
  paper: {
    borderRadius: 0,
    minHeight: 600
  },
  card: {
    minHeight: 600,
    borderRadius: 0
  },
  btn: {
    justifyContent: 'space-between',
    display: 'flex',
    marginBottom: 10
  },
  box: {
    marginTop: 8,
    padding: 4
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
    margin: 'auto',
    maxWidth: 445,
    borderRadius: 0
  },
  button: { backgroundColor: '#ED6B5A', color: 'white' }
});

export default styles;
