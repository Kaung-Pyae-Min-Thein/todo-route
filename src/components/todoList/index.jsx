import React, { useState } from "react";
import { TodoListStyle } from "./todoListStyles";
import { Link } from "react-router-dom";

export const TodoList = ({ todos }) => {
  const filterDate = [];
  const filterDateCount = filterDate.length + 1;
  const dateCount = todos.length;

  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (e) => {
    setFilteredList(todos.filter((item) => item.date === e.target.value));
  };

  // filter the date dropDown
  for (let i = 0; i < dateCount; i++) {
    for (let x = 0; x < filterDateCount; x++) {
      if (filterDate[x] !== todos[i].date) {
        filterDate.push(todos[i].date);
      }
    }
  }

  return (
    <React.Fragment>
      <select onChange={handleChange}>
        <option value={null}>All</option>

        {filterDate.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {/* rendering filtered lists
      {} */}

      {filteredList.length === 0
        ? todos.map((todo) => (
            <TodoListStyle key={todo.id}>
              <Link to={`/todo/${todo.id}`}>
                <h2>{todo.name}</h2>
              </Link>
            </TodoListStyle>
          ))
        : filteredList.map((item) => (
            <TodoListStyle key={item.id}>
              <Link to={`todo/${item.id}`}>
                <h2>{item.name}</h2>
              </Link>
            </TodoListStyle>
          ))}
    </React.Fragment>
  );
};
