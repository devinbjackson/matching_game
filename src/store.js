import { createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

export default store;