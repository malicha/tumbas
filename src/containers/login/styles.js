const styles = theme => ({
  container: {
    backgroundColor: 'red',
    padding: 0
  },
  image: {
    margin: theme.spacing(1),
    width: 128
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  term: {
    color: 'white',
    fontSize: 9,
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4)
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
    marginTop: 20
  }
});

export default styles;
