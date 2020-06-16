import React, { Component, lazy, Suspense } from 'react';
import firebase from 'firebase';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import BottomNavigationApp from './components/bottom-navigation';
import axios from 'axios';
import { connect } from 'react-redux';
import Loading from './components/loading';
import MyErrorBoundary from './containers/time-out';
import PrivateRoute from './components/private-route';
import { setUserIsLogin } from './store/actions/auth';

import { setAuthIsSignedIn } from './store/actions/auth';

const homeRoute = ['/', '/orders', '/profile', '/help'];

const Home = lazy(() => import('./containers/home/'));
const Profile = lazy(() => import('./containers/profile'));
const TermOfUse = lazy(() => import('./containers/term-of-use'));
const AboutUs = lazy(() => import('./containers/about-us'));
const PrivacyPolicy = lazy(() => import('./containers/privacy-policy'));
const Login = lazy(() => import('./containers/login'));
const Orders = lazy(() => import('./containers/orders'));
const Help = lazy(() => import('./containers/help'));
const ProductDetails = lazy(() => import('./containers/product-details'));
const ProductList = lazy(() => import('./containers/product-list'));
const Cart = lazy(() => import('./containers/cart'));
const CartReview = lazy(() => import('./containers/cart-review'));
const CartShipment = lazy(() => import('./containers/cart-shipment'));
const CartSuccess = lazy(() => import('./containers/cart-success'));
const ProfileEdit = lazy(() => import('./containers/profile-edit'));
const OrderHitory = lazy(() => import('./containers/order-history'));
const OrderDetails = lazy(() => import('./containers/order-details'));
const SplashScreen = lazy(() => import('./containers/splash-screen'));
const NotFound = lazy(() => import('./containers/not-found'));
const HelpDetails = lazy(() => import('./containers/help-details'));
const ProductSearch = lazy(() => import('./containers/product-search'));
const TimeOut = lazy(() => import('./containers/time-out'));
const Market = lazy(() => import('./containers/market'));
const MarketSearch = lazy(() => import('./containers/market-search'));
const TopSeller = lazy(() => import('./containers/top-seller-list'));
const OrderFull = lazy(() => import('./components/order-full'));

class App extends Component {
  state = {
    isSignedIn: false, // Local signed-in state.
    isLoading: true,
    user: null,
    userTokenId: null,
    products: [],
    pasar: localStorage.getItem('selectedPasar'),
    isOrderOpen: true
  };

  // Listen to the Firebase Auth state and set the local state.
  async componentDidMount() {
    const remoteConfig = firebase.remoteConfig();
    remoteConfig.settings = {
      minimumFetchIntervalMillis: 0
    };
    await remoteConfig.fetchAndActivate();
    const OpenOrder = remoteConfig.getBoolean('is_order_open');

    this.setState({ isOrderOpen: OpenOrder });

    const db = firebase.firestore();
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async user => {
        if (user) {
          // const userRef = db
          //   .collection('users')
          //   .doc(firebase.auth().currentUser.uid);
          // const doc = await userRef.get();
          // if (doc.exists) {
          //   const data = doc.data();
          //   await localStorage.setItem('users', JSON.stringify(data));
          // }
          await localStorage.setItem('users', JSON.stringify(user));
          this.props.setUserLogin(user);
          this.props.setAuthIsSignedIn();
        }

        this.setState({
          isSignedIn: !!user,
          user: user,
          isLoading: false
        });
      });
  }

  // Mak  e sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Suspense fallback={<Loading />}>
          <SplashScreen />
        </Suspense>
      );
    }

    if (!this.state.pasar) {
      return (
        <Suspense fallback={<Loading />}>
          <Market />
        </Suspense>
      );
    }

    if (this.state.isOrderOpen === false) {
      if (this.props.location.pathname === '/') {
        return (
          <Suspense fallback={<Loading />}>
            <OrderFull close={() => this.setState({ isOrderOpen: true })} />
          </Suspense>
        );
      }
    }

    return (
      <React.Fragment>
        <Suspense /* maxDuration={1000} */ fallback={<Loading />}>
          <Switch>
            {/* HOME */}

            <Route exact path="/" component={Home} />

            {/* CATEGORY & PRODUCT */}
            <Route path="/category/:id" component={ProductList} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/product-search" component={ProductSearch} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/cart-review" component={CartReview} />
            <Route exact path="/cart-shipment" component={CartShipment} />
            <Route exact path="/cart-success" component={CartSuccess} />
            <Route exact path="/top-seller" component={TopSeller} />
            {/* PASAR */}
            <Route exact path="/market" component={Market} />
            <Route exact path="/market-search" component={MarketSearch} />
            {/* PROFILE & AUTH */}
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/profile-edit" component={ProfileEdit} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/term-of-use" component={TermOfUse} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            {/* <Route exact path='/register' component={Register} /> */}
            {/* ORDER */}
            <PrivateRoute exact path="/orders" component={Orders} />
            <Route exact path="/order-history" component={OrderHitory} />
            <Route exact path="/order/:id" component={OrderDetails} />
            {/* HELP */}
            <Route exact path="/help" component={Help} />
            <Route exact path="/help/:id" component={HelpDetails} />
            <Route exact path="/timeout" component={TimeOut} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Suspense>
        {homeRoute.indexOf(this.props.location.pathname) !== -1 && (
          <BottomNavigationApp />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isLoading: state.auth.isLoading,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthIsSignedIn: () => dispatch(setAuthIsSignedIn()),
    setUserLogin: user => dispatch(setUserIsLogin(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

const Logout = () => {
  firebase.auth().signOut();
  return <Redirect path="/" />;
};
