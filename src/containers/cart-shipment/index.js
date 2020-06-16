import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import styles from './styles';
import { connect } from 'react-redux';
import {
  addItem,
  distractItem,
  restoreItems,
  updateTotalPrice,
  cartStateSetDefault
} from '../../store/actions/cartActions';
const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
    subTotalPrice: state.cart.subTotalPrice,
    totalPrice: state.cart.totalPrice,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: product => dispatch(addItem(product)),
    distractItem: product => dispatch(distractItem(product)),
    restoreItems: cartItems => dispatch(restoreItems(cartItems)),
    updateTotalPrice: newTotalPrice =>
      dispatch(updateTotalPrice(newTotalPrice)),
    cartStateSetDefault: () => dispatch(cartStateSetDefault())
  };
};

const Styled = withStyles(styles)(Component);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styled);
