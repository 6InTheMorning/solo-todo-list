import React from "react";
import "./GroupItem.css";

class GroupItem extends React.Component {
  render() {
    const groupName = this.props.groupName;
    const onRemove = this.props.onRemove;
    const getId = this.props.getId;
    const groupId = this.props.groupId;
    console.log(this.props.groupId);
    return (
      <div className="group-item">
        <div
          className="group-name"
          onClick={e => {
            e.stopPropagation();
            getId(groupId);
          }}
        >
          <div>{groupName}</div>
        </div>
        <div
          className="group-remove"
          onClick={e => {
            e.stopPropagation();
            onRemove(groupId);
          }}
        >
          &times;
        </div>
      </div>
    );
  }
}

export default GroupItem;
