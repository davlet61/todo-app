import type { Middleware } from 'redux';

const TODO_LIST_ITEMS = 'todo.list.items';

export const getLocalState = () => {
  const inititalState = localStorage.getItem(TODO_LIST_ITEMS);
  if (inititalState) {
    return JSON.parse(inititalState);
  }
  return undefined;
};

export const saveToLocal: Middleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem(TODO_LIST_ITEMS, JSON.stringify(getState()));
    return result;
  };
};
