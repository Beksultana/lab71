import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import Layout from "./components/Layout/Layout";


class App extends Component {
  render() {
    return (
      <Fragment className="App">
          <Layout>
              <Switch>
                  <Route path="/"/>
              </Switch>
          </Layout>
      </Fragment>
    );
  }
}

export default App;
