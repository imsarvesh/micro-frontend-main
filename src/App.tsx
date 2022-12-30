import SuspenseBoundary from "Components/ErrorBoundary";
import { lazy } from "react";

const TodosApp = lazy(() => import("app1/TodosApp"));

function App() {
  return (
    <div>
      <SuspenseBoundary>
        <TodosApp
          cb={(data) => {
            console.log("changed", data );
          }}
        />
      </SuspenseBoundary>
      <h1>Hello App</h1>
    </div>
  );
}

export default App;
