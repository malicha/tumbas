import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DownVector from '../../vector/downVector.svg';
import badge from '../../vector/badge.svg';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

class Component extends React.Component {
  state = {
    select: false
  };
  render() {
    const { classes, pasar, history } = this.props;

    return (
      <Paper onClick={this.props.click} elevation={0} className={classes.paper}>
        <Grid container spacing={0} className={classes.container}>
          <Grid item xs={3}>
            <CardMedia
              className={classes.media}
              image={pasar.image_url}
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={0} className={classes.gridContainer}>
              <Grid item xs={12} className={classes.gridName}>
                <Typography style={{ fontSize: 14 }}>
                  <b>{pasar.display_name}</b>
                </Typography>
                <img src={badge} style={{ paddingRight: '7%' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.produk}>
                  <b> Produk terbaik pasar ini:</b>
                </Typography>
                <Typography style={{ color: '#707585', fontSize: 10 }}>
                  {pasar.description}
                </Typography>

                <Typography style={{ fontSize: 12, paddingTop: '2%' }}>
                  <b> Alamat :</b>
                </Typography>
                <Typography style={{ color: '#707585', fontSize: 10 }}>
                  {pasar.address}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: '5%' }} />
      </Paper>
    );
  }
}
export default Component;
