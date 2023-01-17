import Header from "app2/Header";
import { createBrowserHistory } from "history";
import { Link, Route, Router, Switch } from "react-router-dom";
import Calendar from "./Pages/Calendar";
import Dashboard from "./Pages/Dashboard";
import TodoApp from "./Pages/TodoApp";

import reducer from "./reducer";
import { StoreProvider } from "./useStore";


const initialState = {
  todos: [],
  meetings: [],
};

const history = createBrowserHistory();

function App() {
  return (
    <StoreProvider reducer={reducer} initialState={{ ...initialState }}>
      <Router history={history}>
        <Header>
          <Link to="/" className="logo">
            Micro Frontend
          </Link>
          <div className="header-right">
            <Link to="/">Dashboard</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/todos">Todos</Link>
          </div>
        </Header>
        <Switch>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/todos">
            <TodoApp />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
