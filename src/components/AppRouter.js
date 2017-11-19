import React, {Component} from 'react';
import { observer, inject } from "mobx-react"
import { toJS } from "mobx";
import {
  Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';

import Header from './Header/Header';
import MainPage from './MainPage/MainPage';

@inject("store")
@observer
export default class AppRouter extends Component {
  render() {
    let {store} = this.props;

    return (
      <Router history={this.props.history}>
          <div>
            {/*<DevTools />*/}
            <Header/>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
          </div>
      </Router>
    );
  }
}