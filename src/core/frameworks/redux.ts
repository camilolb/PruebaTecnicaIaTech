import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { moviePersistConfig } from './configs/redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { HelperGlobal } from '../../shared/helper/HelperGlobal';
import { DefaultSagaAction } from '../../shared/helper/interfaces/sagas.interface';
import movieReducer from '../../movies/infraestructure/redux/movieReducer';

/**
 * Combine all reducers
 */
const appReducer = combineReducers({
  movie: persistReducer(moviePersistConfig, movieReducer)
});

/**
 * Type of Root reducers
 */
export type RootState = ReturnType<typeof appReducer>;

export const configureStore = () => {
  const rootReducer: any = (state: RootState, action: DefaultSagaAction<any>): any => {
    // const { payload } = action;
    // if (HelperGlobal.isObject(payload)) {
    //   return appReducer(undefined, action);
    // }
    return appReducer(state, action);
  };

  const store = createStore(rootReducer);
  const persistItem = persistStore(store);
  return { store, persistItem };
};

export const { store, persistItem } = configureStore();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
