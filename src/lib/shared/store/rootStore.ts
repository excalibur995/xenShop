import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as productReducer } from './Product/reducer'
import { reducer as cartReducer } from './Cart/reducer'

const rootReducer = combineReducers({
  productReducer,
  cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;