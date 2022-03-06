import { TodoStyles } from "./todoStyles";

import { useParams, useHistory } from "react-router-dom";

import { useFetch } from "../../utilities/useFetch";
import React from "react";

export const TodoDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    pending,
  } = useFetch("http://localhost:8000/todos/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/todos/" + blog.id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  return (
    <React.Fragment>
      {blog && (
        <TodoStyles>
          <h1>{blog.name}</h1>
          <p>{blog.date}</p>
          <p>{blog.description}</p>

          <button onClick={handleDelete}>Delete</button>
        </TodoStyles>
      )}
    </React.Fragment>
  );
};
