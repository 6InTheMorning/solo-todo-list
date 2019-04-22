import React from "react";
import "./TodoListForm.css";

const TodoListForm = props => {
  return (
    <div className="todolist-form">
      <input
        type="text"
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
      <div className="todo-create-button" onClick={props.onCreate}>
        Add
      </div>
    </div>
  );
};

export default TodoListForm;
