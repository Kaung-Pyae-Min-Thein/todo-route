import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import { Home, Navbar, AddTodo, Todo, Error } from "./components"


function App() {
  return <div className="App">
    <Navbar />
    <Switch>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/add'>
        <AddTodo />
      </Route>

      <Route path='/add/:id'>
        <Todo />
      </Route>

      <Route path='*'>
        <Error />
      </Route>

    </Switch>
  </div>;
}

export default App;
