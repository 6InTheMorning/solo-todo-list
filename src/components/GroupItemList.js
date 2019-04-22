import React from "react";
import GroupItem from "./GroupItem";
import TodoItemList from "./TodoItemList";

class GroupItemList extends React.Component {
  render() {
    const groups = this.props.groups;
    const onRemove = this.props.onRemove;
    const getId = this.props.getId;
    const groupList = groups.map(group => {
      return (
        <GroupItem
          groupId={group.groupId}
          groupName={group.groupName}
          onRemove={onRemove}
          getId={getId}
          key={group.groupId}
        />
      );
    });
    return <div>{groupList}</div>;
  }
}

export default GroupItemList;
