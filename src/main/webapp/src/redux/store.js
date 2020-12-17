import { createStore} from 'redux';
import rootReducer from './reducers/index';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
export default store;