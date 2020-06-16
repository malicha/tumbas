const styles = theme => ({
  container: {
    marginTop: 48,
    padding: 0
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#153b50',
    color: 'white'
  },
  card: {
    borderRadius: 8,
    margin: 10
  },
  media: {
    height: 160
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    height: 55
  },
  old: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  price: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20
  },
  cardMediaTitle: {
    color: 'white',
    backgroundColor: '#FF4600',
    width: 'fit-content',
    fontWeight: 'bold',
    fontSize: 17,
    borderRadius: 3,
    opacity: 0.9,
    marginBottom: 4,
    paddingLeft: 4,
    paddingRight: 4
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '-webkit-fill-available'
  },
  cardContent: {
    padding: 4
  },
  cusappbar: {
    top: 45,
    marginBottom: 5,
    position: 'fixed',
    width: '100%',
    maxWidth: 445,
    padding: 0
  },
  grid: {
    paddingTop: 50
  },
  paper: {
    borderRadius: 0
  },
  tab: {
    '@media(min-width: 960px)': {
      minWidth: 90
    }
  }
});

export default styles;
