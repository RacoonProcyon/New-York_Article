import { createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './redux/reducer';

 const reducer = combineReducers({
    searchReducer: searchReducer
 })

export const store = createStore(reducer,applyMiddleware(thunk));
