import { AddStyles } from "./addStyles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddTodo = () => {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [date, setDate] = useState("");

  const [pending, setPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setPending(true);

    const todo = { name, description, date };

    console.log(JSON.stringify(todo));

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      history.push("/");
      setPending(false);
    });
  };

  return (
    <AddStyles onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {pending && <button>Loading</button>}
      {!pending && (
        <button disabled={name === "" || description === "" || date === ""}>
          Add Todo
        </button>
      )}
    </AddStyles>
  );
};
