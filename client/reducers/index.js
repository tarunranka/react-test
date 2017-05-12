import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  products: ProductsReducer,
  comments: commentsReducer,
});

export default rootReducer;
