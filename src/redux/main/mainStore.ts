import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainReducer';

const mainStore = configureStore({
  reducer: {
    mainReducer: mainReducer,
  },
});

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;

export default mainStore;
