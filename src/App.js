import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodo } from "./features/todoSlice";
const App = () => {
  const todos = useSelector(selectTodo);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todos.map(({ text, id, completed }) => (
            <TodoItem key={id} name={text} id={id} done={completed} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
