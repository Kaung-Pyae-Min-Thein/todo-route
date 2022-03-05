import { HomeStyles } from "./homeStyles";
import { useFetch } from "../../utilities/useFetch";

export const Home = () => {
  const {
    data: todos,
    error,
    pending,
  } = useFetch("http://localhost:8000/todos");

  return (
    <HomeStyles>
      {error && <div>{error}</div>}
      {pending && <div>{pending}</div>}
      {todos && todos.map((todo, index) => <h2 key={index}>{todo.name}</h2>)}
    </HomeStyles>
  );
};
