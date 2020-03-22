import { createStore, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasks from "./reducers/tasks";

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, tasks);
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers()
);

const persistor = persistStore(store);

export { persistor };

export default store;
