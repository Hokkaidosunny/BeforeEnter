import React, {Component} from 'react';

const onEnter = (
  beforeEnter,
  WaitingComponent
) => Target => {

  class OnEnter extends Component {
    static displayName = 'OnEnter';

    constructor(props) {
      super(props);
      this.state = { ifDone: false };
    }

    componentWillMount() {
      const res = beforeEnter(this.props);

      if (res.then) {
        res.then(() => this.setState({ ifDone: true }));
      } else {
        this.setState({ ifDone: true });
      }
    }

    render() {
      const $wait = WaitingComponent
        ? <WaitingComponent {...this.props} />
        : null;

      return this.state.ifDone
        ? <Target {...this.props} />
        : $wait;
    }
  }

  return OnEnter;
}

export default onEnter;
