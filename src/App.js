import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import { Home, Navbar } from "./components"

function App() {
  return <div className="App">
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  </div>;
}

export default App;
