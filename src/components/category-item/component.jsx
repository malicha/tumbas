import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Component extends React.Component {
  render() {
    const { classes, category } = this.props;
    return (
      <div align="center">
        <Card
          align="center"
          className={classes.card}
          onClick={() => {
            this.props.history.push(`/category/${category.id}`);
          }}
        >
          <img
            style={{ width: 40 }}
            src={category.image ? category.image.src : ''}
          />
        </Card>
        <Typography
          style={{ color: '#707585', fontSize: 10 }}
          variant="caption"
          gutterBottom
        >
          {category.name}
        </Typography>
      </div>
    );
  }
}

export default withRouter(Component);
