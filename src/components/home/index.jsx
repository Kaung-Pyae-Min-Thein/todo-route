import { HomeStyles } from "./homeStyles";
import { useFetch } from "../../utilities/useFetch";
import { TodoList } from "../todoList";

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
      {todos && <TodoList todos={todos} />}
    </HomeStyles>
  );
};
