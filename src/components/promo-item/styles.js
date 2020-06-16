const styles = theme => ({
  card: {
    borderRadius: 8,
    margin: 10,
    width: 205
  },
  media: {
    height: 160
  },
  title: {
    color: '#000000',
    fontSize: 17
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '-webkit-fill-available'
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
  }
});

export default styles;
