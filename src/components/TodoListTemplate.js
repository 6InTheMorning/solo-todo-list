import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = props => {
  return (
    <main className="todo-list-template">
      <div className="group-list">
        <div className="group-title">서치자리</div>
        {/*섹션 태그 - 그룹, 묶음 */}
        <section className="goruplist-form-wrapper">
          #그룹폼{props.groupListForm}
        </section>
        {/*섹션 태그 - 그룹, 묶음 */}
        <section className="group-wrapper">
          #그룹리스트{props.groupItemList}
        </section>
      </div>
      <div className="todo-list">
        <div className="todo-title">그룹 타이틀</div>
        {/*섹션 태그 - 그룹, 묶음 */}
        <section className="todolist-form-wrapper">
          #투두리스트 폼{props.todoListForm}
        </section>
        {/*섹션 태그 - 그룹, 묶음 */}
        <section className="todo-wrapper">
          #투두리스트
          {props.todoItemList}
        </section>
      </div>
    </main>
  );
};

export default TodoListTemplate;
