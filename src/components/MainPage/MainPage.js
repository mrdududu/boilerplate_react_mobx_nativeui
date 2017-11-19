import React, {Component} from 'react';
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class MainPage extends Component {
  render() {
    return (
      <div>MainPage</div>
    );
  }
}