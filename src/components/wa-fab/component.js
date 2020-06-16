import React from 'react';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withRouter } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import whatsapp from '../../vector/wa.svg';

class Component extends React.Component {
  render() {
    const fabStyle = () => {
      if (window.location.pathname === '/help') {
        return {
          marginBottom: 56
        };
      }
    };
    const { classes } = this.props;
    const item = JSON.parse(localStorage.getItem('cart_items'));
    return <img src={whatsapp} className={classes.fab} style={fabStyle()} />;
  }
}

export default withRouter(Component);
