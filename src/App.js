import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import { Home, Navbar, AddTodo, TodoDetail, Error } from "./components"


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

      <Route path='/todo/:id'>
        <TodoDetail />
      </Route>

      <Route path='*'>
        <Error />
      </Route>

    </Switch>
  </div>;
}

export default App;
