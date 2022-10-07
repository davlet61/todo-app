import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types';

const initialState: Task[] = [];

export const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: Task[], action: PayloadAction<Task>) => {
      return [...state, action.payload];
    },
    deleteTodo: (state: Task[], action: PayloadAction<string>) => {
      return state.filter((todo: Task) => todo.id !== action.payload);
    },
    markComplete: (state: Task[], action: PayloadAction<string>) => {
      return state.map((todo: Task) => {
        if (action.payload === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const { addTodo, deleteTodo, markComplete, clearState } =
  todosSlice.actions;

export default todosSlice.reducer;
