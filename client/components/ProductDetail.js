import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import SellerDetail from './SellerDetail';
import Menubar from './Menubar';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import * as actions from  '../actions';
import Slider from 'react-slick';
import _ from 'lodash';

var settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1
 };

class ProductDetail extends Component {
    componentDidMount(){
      this.props.product.comments.map(comment  => this.props.saveComment(comment));
    }
    render(){
      const { id } = this.props.match.params;
      const product =this.props.product;

      const hashTags = product.hashTags.map((x, i) => <a className="hash" key={i} href="#">{x}</a>);
      const seller = product.seller;
      const sellerComponent = product.seller.map(seller => <SellerDetail key={seller.sid} seller={seller}/>)
      const images = product.gallery.map((x, i) => <img src={x} key={i} className="img-responsive"/>);
      return (
        <div className="container">

          <div className="productBox row">
            <div key={product.pid} className="col-sm-12 col-md-4">
              {sellerComponent}
              <div className="prd">
                <div className="prd-thumb">
                    <Slider {...settings}>
                      {images}
                    </Slider>
                    <div className="prod-detail">
                      <h2>{product.name}</h2>
                      <p className="price">{product.price}</p>
                    </div>

                </div>
                <div className="prod-desc">
                  <div className="product-fav">
                  <i className="icon-fi-heart like"></i>
                  <span className="fav-text">{product.favCount} likes</span>
                  </div>
                  <p>{product.desc}</p>
                  {hashTags}
                </div>

              </div>
              <CommentList />
              <CommentBox />
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
  const newProd = _.find(state.products, ({ pid }) => pid == ownProps.match.params.id);
  return {
    product:newProd,
  }
}
export default connect(mapStateToProps,actions)(ProductDetail);
