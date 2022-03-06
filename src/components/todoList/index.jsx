import React, { useState } from "react";
import { TodoListStyle } from "./todoListStyles";
import { Link } from "react-router-dom";

export const TodoList = ({ todos }) => {
  const [date, setDate] = useState(null);
  

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const filteredList = todos.filter((item) => item.date === date);

  console.log(date);
  console.log(filteredList);
  return (
    <React.Fragment>
      <select onChange={handleDate}>
        <option value={null}>All</option>

        {todos.map((item) => (
          <option key={item.id} value={item.date}>
            {item.date}
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
            <TodoListStyle key={item.id}></TodoListStyle>
          ))}
    </React.Fragment>
  );
};

// {todos.map((todo) => (
//   <TodoListStyle key={todo.id}>
//     <Link to={`/todo/${todo.id}`}>
//       <h2>{todo.name}</h2>
//       {todo.date}
//     </Link>
//   </TodoListStyle>
// ))}

// const [filteredlist, setFilteredList] = useState(
//   todos.filter((item) => item.date !== date)
// );
