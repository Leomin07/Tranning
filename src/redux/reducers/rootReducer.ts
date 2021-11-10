import { combineReducers } from 'redux';
import { counterReducer } from './CounterReducer';
import { quoteReducer } from './QuoteReducer';
import { todoReducer } from './TodoReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
  quotes: quoteReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
