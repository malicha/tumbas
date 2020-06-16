import React from 'react';
import TimeOut from '../time-out';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorOccurred: false };
  }

  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true });
  }

  render() {
    return this.state.errorOccurred ? <TimeOut /> : this.props.children;
  }
}

export default Component;
