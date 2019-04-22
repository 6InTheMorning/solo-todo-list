import React from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import GroupListForm from "./components/GroupListForm";
import TodoListForm from "./components/TodoListForm";
import GroupItemList from "./components/GroupItemList";
import TodoItemList from "./components/TodoItemList";
class App extends React.Component {
  groupId = 1;
  state = {
    groupInput: "",
    todoInput: "",
    groups: [
      {
        groupId: 0,
        groupName: "리스트1",
        todos: [{ text: "리액트", checked: false }]
      },
      {
        groupId: 1,
        groupName: "리스트2",
        todos: [{ text: "리액트2", checked: false }]
      }
    ]
  };
  groupHandleChange = e => {
    this.setState({
      groupInput: e.currentTarget.value
    });
  };

  groupHandleCreate = () => {
    this.setState({
      groupInput: "",
      todoInput: "",
      groups: this.state.groups.concat({
        groupId: this.groupId++,
        groupName: this.state.groupInput,
        todos: []
      })
    });
  };
  groupHandleKeyPress = e => {
    if (e.key === "Enter") this.groupHandleCreate();
  };

  groupHandleRemove = id => {
    const groups = this.state.groups;

    this.setState({
      groups: groups.filter(group => group.id !== id)
    });
  };

  todoHandleCreate = id => {
    const groups = this.state.groups;
    let index;

    groups.forEach(group => {
      if (group.groupId === id) {
        index = group.groupId;
      }
    });

    const selecteGroup = groups[index];
    const copyGroup = groups.slice();

    copyGroup[index] = {
      groupId: selecteGroup.groupId,
      groupName: selecteGroup.groupName,
      todos: selecteGroup.todos.concat({
        text: this.state.todoInput,
        checked: false
      })
    };
    this.setState({
      groups: copyGroup
    });
  };
  todoHandleChange = e => {
    this.setState({
      todoInput: e.currentTarget.value
    });
  };
  todoHandleKeyPress = e => {
    if (e.key === "Enter") this.todoHandleCreate();
  };
  render() {
    return (
      <TodoListTemplate
        groupListForm={
          <GroupListForm
            value={this.state.groupInput}
            onChange={this.groupHandleChange}
            onKeyPress={this.groupHandleKeyPress}
            onCreate={this.grouphandleCreate}
          />
        }
        groupItemList={
          <GroupItemList
            groups={this.state.groups}
            onRemove={this.groupHandleRemove}
            getId={this.todoHandleCreate}
          />
        }
        todoListForm={<TodoListForm onChange={this.todoHandleChange} />}
        todoItemList={<TodoItemList />}
      />
    );
  }
}

export default App;
