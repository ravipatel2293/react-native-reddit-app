import rootReducer from '../reducer/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);
export const persistor = persistStore(store);
