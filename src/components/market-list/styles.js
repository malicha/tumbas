const styles = theme => ({
  card: {
    width: 150,
    margin: 10
  },
  cardSelected: {
    width: 150,
    margin: 10,
    backgroundColor: 'hsla(0, 0%, 0%, 0.2)'
  },
  media: {
    height: 100,
    width: 95,
    borderRadius: 8,
    margin: 5,
    [theme.breakpoints.down('xs')]: {
      height: 126,
      width: 91
    }
  },
  gridName: {
    display: 'flex',
    justifyContent: 'Space-Between'
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: '3% 0% 0% 12%'
    },
    paddingTop: '2%',
    paddingLeft: '2%'
  },
  container: {
    marginTop: '3%'
  },
  produk: {
    fontSize: 12,
    paddingTop: '1%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0
    }
  },
  paper: {
    minHeight: 90,
    paddingLeft: '4.5%'
  }
});
export default styles;
