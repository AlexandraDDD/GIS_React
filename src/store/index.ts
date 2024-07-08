import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { editorReducer } from "./editor.slice";
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
import storage from 'redux-persist/lib/storage';
import { overlaysApi } from "./overlays.api";
import { geoObjects } from "../data/geoObjectsData";
import selectedGeoObjectSlice from "./geoObject.slice";

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [
		overlaysApi.reducerPath,
	]
};

const rootReducer = combineReducers({
	editor: editorReducer,
	selectedGeoObject: selectedGeoObjectSlice.reducer,
	[overlaysApi.reducerPath]: overlaysApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(...Object.values(overlaysApi.middleware))
	,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;