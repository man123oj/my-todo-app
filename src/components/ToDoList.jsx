import React from "react";
import ToDoItem from "./ToDoItem";
git
function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;