import { fade } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    top: 0,
    maxHeight: 120,
    background: 'white',
    zIndex: 0,
    boxShadow: ' 0px 1px 5px rgba(0, 0, 0, 0.05)'
  },
  appbar2: {
    background: 'white',
    color: 'white',
    width: '100%',
    maxWidth: 445,
    position: 'fixed',
    top: 0
  },
  menuButton: {
    color: '#9FA3A6'
  },
  backButton: {
    marginRight: 0,
    color: '#36C68A'
  },
  title: {
    flexGrow: 1
  }
});

export default styles;
