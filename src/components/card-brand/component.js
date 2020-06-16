import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

class Component extends React.Component {
  render() {
    const { classes, brand } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'auto'
        }}
      >
        <Card className={classes.card}>
          <CardMedia
            component="img"
            image={brand.image ? brand.image.src : ''}
          />
        </Card>
      </div>
    );
  }
}

export default Component;
