import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import Layout from "./components/Layout/Layout";
import Dishes from "./containers/Dishes/Dishes";
import Orders from "./containers/Orders/Orders";


class App extends Component {
  render() {
    return (
      <Fragment >
          <Layout>
              <Switch>
                  <Route path="/" exact/>
                  <Route path="/dishes" component={Dishes}/>
                  <Route path="/orders" component={Orders}/>
              </Switch>
          </Layout>
      </Fragment>
    );
  }
}

export default App;
