import ReactDOM from "react-dom/client";
import { NotFoundRoute, RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import GlobalProvider from "./Providers/global-provider";
import './main.css'
import { Route as rootRoute } from './routes/__root'

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => '404 Not Found',
})

// Set up a Router instance
const router = createRouter({
  routeTree,
  notFoundRoute,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}
