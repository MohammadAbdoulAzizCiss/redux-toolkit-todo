import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, { payload }) => {
      state.todoList.map((todo) =>
        todo.id === payload ? (todo.completed = !todo.completed) : todo
      );
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodo = (state) => state.todos.todoList;

export default todoSlice.reducer;
