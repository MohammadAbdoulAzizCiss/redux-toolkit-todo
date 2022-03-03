import React from "react";
import { Checkbox } from "@material-ui/core";
import "./TodoItem.css";
import { setCheck } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, name, done }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done ? "todoItem--done" : undefined}>{name}</p>
    </div>
  );
};

export default TodoItem;
