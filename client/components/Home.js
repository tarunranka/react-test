import React, { Component } from 'react';
import ProductBox from './productBox';
import Menubar from './Menubar';

export default class Home extends Component {
    render(){
        return (
          <div className="container">
            <Menubar/>
            <ProductBox/>
          </div>
        );
    }
}
