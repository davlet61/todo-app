import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todosReducer from '../redux/slice/todosSlice';
import { ReactNode } from 'react';

const render = (
  ui: JSX.Element,
  {
    // @ts-ignore
    preloadedState,
    store = configureStore({
      reducer: { todos: todosReducer },
      preloadedState,
      middleware: getDefaultMiddleware => getDefaultMiddleware(),
    }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
