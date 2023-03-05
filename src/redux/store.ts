import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { MoviesAPI } from '../services/MoviesAPI';

const rootReducer = combineReducers({
    [MoviesAPI.reducerPath]: MoviesAPI.reducer,
  });
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(MoviesAPI.middleware)
  });
  
  export type RootState = ReturnType<typeof store.getState>;