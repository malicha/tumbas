import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import styles from './styles';
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
    subTotalPrice: state.cart.subTotalPrice
  };
};

const Styled = withStyles(styles)(Component);
export default connect(mapStateToProps)(Styled);
