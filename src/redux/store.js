import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favouritesReducer } from './favourites/slice';
import { authReducer } from './auth/slice';
import { teachersReducer } from './teachers/slice';



const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    favourites:persistReducer(favouritesPersistConfig, favouritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);