import React, { Component } from 'react';
import Product from './../data/product';
import Menubar from './Menubar';

export default class SellerDetail extends Component {
    constructor(props) {
        super(props);

    }
    render() {
      const seller = this.props.seller;
        return (
          <div className="media">
            <div className="media-left media-middle">
              <img className="img-circle" src={seller.image} width="58" height="58"/>
            </div>
            <div className="media-body media-middle">
              <span className="mdl-color-text--indigo-400">{seller.name}</span>
            </div>
            <div className="media-right media-middle light-grey">
              <span className="dark-grey distance">{seller.distance}</span>
              away
            </div>
          </div>
        );
        }
    }
