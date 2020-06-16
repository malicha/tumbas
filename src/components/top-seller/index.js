import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import styles from './styles';
import { connect } from 'react-redux';
import {
  addItem,
  distractItem,
  restoreItems
} from '../../store/actions/cartActions';
const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: top => dispatch(addItem(top)),
    distractItem: top => dispatch(distractItem(top)),
    restoreItems: cartItems => dispatch(restoreItems(cartItems))
  };
};

const Styled = withStyles(styles)(Component);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styled);
