import { createSlice } from '@reduxjs/toolkit';
import { mockTasks } from '../mock/tasks';
import type { Task } from '../types/task';

interface TasksState {
  items: Task[];
}

const initialState: TasksState = {
  items: mockTasks,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, { payload }: { payload: Task }) {
      state.items.push(payload);
    },
    deleteTask(state, { payload }: { payload: string }) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    updateTask(state, { payload }: { payload: Task }) {
      state.items = state.items.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item,
      );
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
