import React from "react";
import "./GroupListForm.css";

const GroupListForm = props => {
  return (
    <div className="grouplist-form">
      <input
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
      <div className="group-create-button" onClick={props.onCreate}>
        Add List
      </div>
    </div>
  );
};

export default GroupListForm;
