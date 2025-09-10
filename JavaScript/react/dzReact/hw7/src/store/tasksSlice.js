import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return new Promise((resolve) => setTimeout(() => resolve({ data: tasks }), 1000));
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    entities: [],
    isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.entities = action.payload.data;
      state.isloading = false;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
  },
});

export default tasksSlice.reducer;

export const tasksReducer = tasksSlice.reducer;
