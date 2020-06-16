const styles = theme => ({
  container: {
    padding: 0,
    paddingTop: 48 + 56
  },
  card: {
    borderRadius: 8,
    margin: 10
  },
  media: {
    height: 80,
    borderRadius: 8,
    marginTop: 10
  },
  title: {
    color: '#000000',
    fontSize: 12
  },
  old: {
    textDecoration: 'line-through',
    color: '#C7C7C9'
  },
  price: {
    color: '#F1885B',
    fontWeight: 'bold',
    fontSize: 12
  },
  cardMediaTitle: {
    color: 'white',
    backgroundColor: '#FF4600',
    width: '50%',
    fontWeight: 'bold',
    fontSize: 10,
    borderRadius: 3,
    opacity: 0.9,
    marginBottom: 4,
    paddingLeft: 4,
    paddingRight: 4
  },
  cardMediaDisc: {
    color: 'white',
    backgroundColor: '#F67778',
    width: '70%',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 10,
    borderRadius: 5,
    opacity: 0.9,
    marginBottom: 46,
    paddingLeft: 4,
    paddingRight: 4
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '-webkit-fill-available'
  },
  cardContent: {
    padding: 8
  },
  btn: {
    justifyContent: 'center',
    display: 'flex',
    margin: 0
  }
});

export default styles;
