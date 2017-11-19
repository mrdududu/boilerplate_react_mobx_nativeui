import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import AppBar from 'material-ui/AppBar';

@inject("store")
@observer
export default class Header extends Component {

  hTabLogout(e){
    e.preventDefault();
  }

  render() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.hTabLogout.bind(this)}
      />
    );
  }
}