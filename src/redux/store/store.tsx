import { configureStore } from '@reduxjs/toolkit';
import { getLocalState, saveToLocal } from '../localStorage/localStorage';
import todos from '../slice/todosSlice';
import visibility from '../slice/visibilitySlice';

export const store = configureStore({
  reducer: {
    todos,
    visibility,
  },
  preloadedState: getLocalState(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(saveToLocal),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
