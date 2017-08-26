# react-router-enter
an onEnter hoc for react-router 4

## Usage
```javascript
import onEnter from 'react-router-enter';

function beforeEnter(props) {
  //you can achieve props passed by parent
  //should return promise
  return new Promise((resolve, reject) => {
    //enter App 10s later
    setTimeout(resolve, 10000);
  });
}

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/demo" component={DemoPage} />
        </Switch>
      </div>
    );
  }
}

export default onEnter(beforeEnter)(App);
```

## api
`onEnter(beforeEnter: func, WaitingComponent: Component?)`  
* `beforeEnter`: you can do things before enter, should return promise;

* `WaitingComponent`: you can also provide a waiting Component(default: null), this Component will show when doing beforeEnter things
