import { lazy } from "react";
import SuspenseBoundary from "../Components/ErrorBoundary";
import Layout from "app2/Layout";
const TodosApp = lazy(() => import("app1/TodosApp"));

export default function Page() {
  return (
    <Layout>
      <SuspenseBoundary>
        <TodosApp />
      </SuspenseBoundary>
    </Layout>
  );
}
