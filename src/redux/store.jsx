import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;



// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import {
//   REHYDRATE,
//   PERSIST,
//   persistReducer,
//   FLUSH,
//   persistStore,
//   PURGE,
//   REGISTER,
//   PAUSE,
// } from "redux-persist";
// import { rootReducer } from "./rootReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

// const store = configureStore({
//   reducer: persistReducer(persistConfig, rootReducer),
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;