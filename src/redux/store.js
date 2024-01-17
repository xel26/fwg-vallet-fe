import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";

import reducer from "./reducers";

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export const persistor = persistStore(store)