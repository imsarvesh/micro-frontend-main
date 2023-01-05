import Layout from "app2/Layout";
import { startOfToday } from "date-fns";
import { lazy, useState } from "react";
import SuspenseBoundry from "../Components/ErrorBoundary";

const Calendar = lazy(() => import("app2/Calendar"));
const Meetings = lazy(() => import("app2/Meetings"));


export default function Page() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);

  return (
    <Layout>
      <SuspenseBoundry>
        <Calendar
          selectedDay={selectedDay}
          onSelect={(day) => setSelectedDay(day)}
        />
      </SuspenseBoundry>
      <SuspenseBoundry>
        <Meetings selectedDay={selectedDay} />
      </SuspenseBoundry>
    </Layout>
  );
}
