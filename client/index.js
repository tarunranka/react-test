import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import Home from './components/Home'
import Search from './components/Search'
import ProductDetail from './components/ProductDetail'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/search" component={Search} />
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
        ,document.getElementById('app')
 )
