import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store/store'
import UserDataCon from './container/httpDataCon'
import { Provider } from 'react-redux'
import {
  browserHistory, Router, Route, IndexRoute, IndexRedirect, Link, IndexLink
} from 'react-router';
export class Routing extends React.Component {
  render() {
    return (
      <div>
    
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={UserDataCon}></Route>
              <Route path="/httpDataCon" component={UserDataCon}></Route>


  </Router>
          </Provider>
</div>
  )}}
ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);
