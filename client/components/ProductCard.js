import React, {Component} from 'react';
import SellerDetail from './SellerDetail';
import LazyLoad from 'react-lazyload';

export default class ProductCard extends Component {
  render() {
    const product = this.props.product;
    const hashTags = product.hashTags.map((x, i) => <a className="hash" key={i} href="#">{x}</a>);
    const commentCount = product.comments.length;
    const commentText = product.comments.length > 1 ? 'comments' : 'comment';
    const url = '/product/'+product.pid;
    const seller = product.seller;
    const sellerComponent = this.props.product.seller.map(seller => <SellerDetail key={seller.sid} seller={seller}/>)
    return (
      <div key={product.pid} className="col-sm-12 col-md-4">
        {sellerComponent}
        <div className="prd">
          <div className="prd-thumb">
            <a href={url}>
              <LazyLoad height={200}>
                <img src={product.image} className="img-responsive"/>
               </LazyLoad>
              <div className="prod-detail">
                <h2>{product.name}</h2>
                <p className="price">{product.price}</p>
              </div>
            </a>
          </div>
          <div className="prod-desc">
            <div className="product-fav">
            <i className="icon-fi-heart like"></i>
            <span className="fav-text">{product.favCount} likes</span>
            </div>
            <p>{product.desc}</p>
            {hashTags}
          </div>
          <div className="comments">
            <a className="light-grey" href="#">view {commentCount} {commentText}</a>
          </div>
        </div>
      </div>
    )
  }
}
