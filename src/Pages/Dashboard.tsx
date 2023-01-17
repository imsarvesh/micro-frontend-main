import React, { useState, lazy } from "react";
import SuspenseBoundary from "../Components/ErrorBoundary";
import { startOfToday } from "date-fns";
import Layout from "app2/Layout";
import { useDispatch } from "src/useStore";

import { useStore } from "src/useStore";

const Calendar = lazy(() => import("app2/Calendar"));
const Meetings = lazy(() => import("app2/Meetings"));
const TodosApp = lazy(() => import("app1/TodosApp"));

export default function Dashboard() {
  const dispatch = useDispatch();
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);

  const { todos } = useStore();

  console.log({ todos });

  return (
    <Layout>
      <SuspenseBoundary>
        <Calendar
          selectedDay={selectedDay}
          onSelect={(day) => setSelectedDay(day)}
        />
      </SuspenseBoundary>
      <SuspenseBoundary>
        <Meetings selectedDay={selectedDay} />
      </SuspenseBoundary>

      <SuspenseBoundary>
        <TodosApp
          onStateChange={(state) => {
            dispatch({
              type: "updateTodo",
              todos: state,
            });
          }}
        />
      </SuspenseBoundary>
    </Layout>
  );
}
