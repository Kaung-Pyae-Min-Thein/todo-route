import React from "react";
import { TodoListStyle } from "./todoListStyles";
import { Link } from "react-router-dom";

export const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      {todos.map((todo) => (
        <TodoListStyle key={todo.id}>
          <Link to={`/todo/${todo.id}`}>
            <h2>{todo.name}</h2>
          </Link>
        </TodoListStyle>
      ))}
    </React.Fragment>
  );
};
