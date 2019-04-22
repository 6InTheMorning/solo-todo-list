import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    const todoText = this.props.todoText;
    const checked = this.props.checked;
    const todoId = this.props.todoId;
    const onToggle = this.props.onToggle;
    const onRemove = this.props.onRemove;

    return (
      <div className="todo-item" onClick={() => onToggle(todoId)}>
        {checked && <div className="check-mark">√</div>}
        <div className={`todo-text ${checked && "checked"}`}>{todoText}</div>
        <div
          className="todo-remove"
          onClick={e => {
            e.stopPropagation();
            onRemove(todoId);
          }}
        >
          &times;
        </div>
      </div>
    );
  }
}

export default TodoItem;
