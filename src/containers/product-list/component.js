import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../../components/app-bar';
import CustomAppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loading from '../../components/loading';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../../components/product-item';
import BottomSheet from '../../components/bottom-sheet';
import Paper from '@material-ui/core/Paper';
import ContentLoader from 'react-content-loader';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import { getProductbyCategories } from '../../services/products';
import Fab from '../../components/fab';
import kosong from '../../vector/kosong.svg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#56C25C'
    }
  }
});

const MyLoader = () => (
  <ContentLoader
    height={890}
    width={400}
    speed={1}
    primaryColor="#ededed"
    secondaryColor="#d1d1d1"
  >
    <rect x="13" y="44" rx="0" ry="0" width="84" height="75" />
    <rect x="106" y="44" rx="0" ry="0" width="106" height="12" />
    <rect x="108" y="71" rx="0" ry="0" width="183" height="11" />
    <rect x="108" y="95" rx="0" ry="0" width="74" height="18" />
    <rect x="305" y="72" rx="0" ry="0" width="85" height="40" />
    <rect x="14" y="137" rx="0" ry="0" width="84" height="75" />
    <rect x="109" y="137" rx="0" ry="0" width="106" height="12" />
    <rect x="111" y="165" rx="0" ry="0" width="183" height="11" />
    <rect x="112" y="191" rx="0" ry="0" width="74" height="18" />
    <rect x="307" y="164" rx="0" ry="0" width="85" height="40" />
    <rect x="14" y="226" rx="0" ry="0" width="84" height="75" />
    <rect x="111" y="224" rx="0" ry="0" width="106" height="12" />
    <rect x="111" y="256" rx="0" ry="0" width="183" height="11" />
    <rect x="113" y="280" rx="0" ry="0" width="74" height="18" />
    <rect x="306" y="256" rx="0" ry="0" width="85" height="40" />
    <rect x="15" y="315" rx="0" ry="0" width="84" height="75" />
    <rect x="109" y="316" rx="0" ry="0" width="106" height="12" />
    <rect x="111" y="344" rx="0" ry="0" width="183" height="11" />
    <rect x="110" y="367" rx="0" ry="0" width="74" height="18" />
    <rect x="306" y="338" rx="0" ry="0" width="85" height="40" />
    <rect x="16" y="404" rx="0" ry="0" width="84" height="75" />
    <rect x="113" y="403" rx="0" ry="0" width="106" height="12" />
    <rect x="112" y="428" rx="0" ry="0" width="183" height="11" />
    <rect x="113" y="458" rx="0" ry="0" width="74" height="18" />
    <rect x="304" y="433" rx="0" ry="0" width="85" height="40" />
  </ContentLoader>
);

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class ProductList extends React.Component {
  state = {
    categoryIndex: 0,
    categories: [],
    products: [],
    productsFiltered: [],
    categoryId: null,
    isLoading: true,
    productsCached: {},
    selectedPasar: JSON.parse(localStorage.getItem('selectedPasar'))
  };

  async componentDidMount() {
    const categories = await JSON.parse(localStorage.getItem('categories'));
    let categoryId = this.props.match.params.id;
    let categoryIndex = 0;

    await this.setState({
      categories: categories
    });

    categoryIndex = await this.getCategoryIndex(categoryId, categories);

    if (categoryIndex === -1) {
      this.props.history.push(`/category/${this.state.categories[0].id}`);
      categoryId = this.props.match.params.id;
      categoryIndex = this.getCategoryIndex(categoryId, categories);
      await this.setState({
        categoryId: categoryId,
        categoryIndex: categoryIndex
      });
    }

    this.setState({ categoryIndex: categoryIndex });

    const products = await this.getProducts(categoryId);

    this.setState({
      categoryId: categoryId,
      isLoading: false,
      products: products
    });
  }

  getCategoryIndex = async (categoryId, categories) => {
    console.time('getCategoryIndex');
    console.log(categories, categoryId);
    const categoryIndex = await categories.findIndex(category => {
      return category.id == categoryId;
    });
    console.timeEnd('getCategoryIndex');
    console.log(categoryIndex);
    return categoryIndex;
  };

  getProducts = async categoryId => {
    console.time('productsFromAPI');
    const productsFromAPI = await this.getProductsFromAPI(categoryId);
    console.timeEnd('productsFromAPI');
    return productsFromAPI;
  };

  getProductsFromAPI = async categoryId => {
    const vendorId = this.state.selectedPasar.vendor_id;
    const response = await getProductbyCategories(categoryId, vendorId);

    const products = response;
    return products;
  };

  handleChange = async (event, index) => {
    if (this.state.categoryIndex === index) {
      return;
    }

    await this.setState({
      categoryIndex: index,
      isLoading: true
    });

    const categoryId = this.state.categories[index].id;

    const products = await this.getProducts(categoryId);

    this.setState({
      products,
      categoryId,
      isLoading: false
    });
  };

  render() {
    const { classes, history, subTotalPrice } = this.props;
    const fabStyle = () => {
      if (this.props.items.length > 0) {
        return { marginBottom: 50 };
      }
    };

    return (
      <React.Fragment>
        <Container
          component="main"
          maxWidth="xs"
          className={classes.container}
          style={fabStyle()}
        >
          <CssBaseline />
          <AppBar title="Select Product" goBack={true} search />
          <CustomAppBar
            elevation={0}
            position="static"
            className={classes.cusappbar}
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            <ThemeProvider theme={theme}>
              <Tabs
                value={this.state.categoryIndex}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="on"
                aria-label="scrollable force tabs example"
              >
                {this.state.categories.map(category => {
                  return (
                    <Tab
                      key={category.id}
                      className={classes.tab}
                      label={category.name}
                    />
                  );
                })}
              </Tabs>
            </ThemeProvider>
          </CustomAppBar>
          <Paper elevation={0} className={classes.paper}>
            <Grid container className={classes.grid}>
              {this.state.isLoading ? (
                <div style={{ width: '100%' }}>
                  <MyLoader />
                </div>
              ) : (
                <>
                  {this.state.products.map((product, index) => {
                    return (
                      <Grid xs={12} item key={index}>
                        <ProductItem key={index} product={product} />
                        <Divider />
                      </Grid>
                    );
                  })}
                  {this.state.products.length < 1 && (
                    <Grid align="center" item xs={12}>
                      <img
                        style={{ marginBottom: 20, marginTop: 40 }}
                        src={kosong}
                      />
                      <Typography
                        display="block"
                        gutterBottom
                        variant="subtitle2"
                      >
                        <b>
                          <p>Yahh, Pencarian </p>
                          <p> Anda Tidak Ditemukan</p>
                        </b>
                      </Typography>
                      <Typography
                        style={{ padding: 10 }}
                        display="block"
                        gutterBottom
                        variant="caption"
                      >
                        Item yang anda cari mungkin habis / tidak tersedia
                        sekarang. Tunggu beberapa hari lagi.
                      </Typography>
                    </Grid>
                  )}
                </>
              )}
            </Grid>
          </Paper>
          {this.props.items.length > 0 && <Fab to="/cart?from=/" />}
        </Container>
      </React.Fragment>
    );
  }
}

export default ProductList;
