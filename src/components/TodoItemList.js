import React from "react";
import TodoItem from "./TodoItem";
class TodoItemList extends React.Component {
  render() {
    const todos = this.props.todos;
    const onToggle = this.props.onToggle;
    const onRemove = this.props.onRemove;
    return (
      <div>
        <TodoItem todoText="저녁은" />
        <TodoItem todoText="뭐먹을까요??" />
        <TodoItem todoText="참고로 족발은 안돼요!" />
      </div>
    );
  }
}

export default TodoItemList;
