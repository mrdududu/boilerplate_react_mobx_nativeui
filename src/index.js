import React from 'react';
import ReactDOM from 'react-dom';
import {autorun, toJS} from 'mobx';
import {Provider} from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import AppRouter from './components/AppRouter';
import registerServiceWorker from './registerServiceWorker';

import storeInstance from './stores/store';

const history = createHistory();

ReactDOM.render(
  <Provider store={storeInstance}>
    <MuiThemeProvider>
      <AppRouter history={history} />
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
