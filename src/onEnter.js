import React, {Component} from 'react';

function onEnter(beforeEnter, WaitingComponent) {
  return (Target) => {
    class OnEnter extends Component {
      static displayName = 'OnEnter';

      constructor(props) {
        super(props);
        this.state = {
          ifDone: false
        };
      }

      componentWillMount() {
        beforeEnter(this.props)
          .then(() => {
            this.setState({ ifDone: true });
          });
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
  };
}

export default onEnter;
