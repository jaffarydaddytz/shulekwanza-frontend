import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas';  // Your root saga
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authReducer from './slices/authSlice';
import { combineReducers } from 'redux';


// Persist configuration
const persistConfig = {
  key: 'root', // Root key for storage
  storage, // Use localStorage for storage
  whitelist: ['auth', 'school'], // Only persist auth and school slices
};

// Combine all reducers that need persistence
const rootReducer = {
  auth: authReducer
};


// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks (needed for redux-persist)
    }).concat(sagaMiddleware), // Add saga middleware
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Create a persistor to persist the store
const persistor = persistStore(store);


export { store, persistor }; // Export store and persistor
