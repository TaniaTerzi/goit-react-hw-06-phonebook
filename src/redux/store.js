import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
// import { contactsReducer } from "./contacts/slice";
import { contactsReducer } from "./contacts/slise";
import { filterReducer } from "./filter/slice";
// import { filterReducer } from "./filter/slice";

const persistConfig = {
  key: "root",
  storage,
}

const persistedContactsRedudcer = persistReducer(
  persistConfig,
  contactsReducer,
);

export const store = configureStore({
  reducer: {
    storage: persistedContactsRedudcer,
    filter: filterReducer,
  },  
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
