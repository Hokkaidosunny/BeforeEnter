import * as React from "react";

function hoc(
  beforeEnter: (props: any) => Promise<any>,
  WaitingComponent: React.ComponentType<any>
): (Target: React.ComponentType<any>) => React.ComponentClass<any>;

function hoc(
  beforeEnter: (props: any) => Promise<any>,
  WaitingComponent: React.ComponentType<any>
) {
  return function(Target: React.ComponentType<any>) {
    class OnEnter extends React.Component<any, { ifDone: boolean }> {
      static displayName = "OnEnter";

      state = { ifDone: false };

      componentWillMount() {
        const res = beforeEnter(this.props);

        if (res && res.then) {
          res.then(() => this.setState({ ifDone: true }));
        } else {
          this.setState({ ifDone: true });
        }
      }

      render() {
        const $wait = WaitingComponent ? (
          <WaitingComponent {...this.props} />
        ) : null;

        return this.state.ifDone ? <Target {...this.props} /> : $wait;
      }
    }

    return OnEnter;
  };
}

export default hoc;
