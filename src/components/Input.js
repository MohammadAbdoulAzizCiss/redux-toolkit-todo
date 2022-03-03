import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`creating new note :${input} `);
    dispatch(
      saveTodo({
        id: Date.now(),
        text: input,
        completed: false,
      })
    );
    setInput("");
  };
  return (
    <div className="input">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit" onClick={addTodo}>
        Add !
      </button>
    </div>
  );
};

export default Input;
