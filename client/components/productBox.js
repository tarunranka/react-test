import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductBox extends Component {
  render() {
    const productComponents = this.props.product.map(product => <ProductCard key={product.pid} product={product}/>)
    return (
      <div className="productBox row">
        {productComponents}
      </div>
    );
  }
}
function mapStateToPropsy(state) {
  return {
    product: state.products
  };
}
export default connect(mapStateToPropsy)(ProductBox);
