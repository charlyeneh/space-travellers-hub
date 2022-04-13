import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
<<<<<<< Updated upstream
  rocketsReducer,
  dragonsReducer,  
=======
>>>>>>> Stashed changes
  missionsReducer,
});

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);
export default store;
