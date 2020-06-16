import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import styles from './styles';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    items: state.cart.items,
    subTotalPrice: state.cart.subTotalPrice,
    totalPrice: state.cart.totalPrice
  };
};

const Styled = withStyles(styles)(Component);

export default connect(mapStateToProps)(Styled);
