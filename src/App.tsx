import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { TableTest } from "./pages/table";
import { Layout } from "./components/layout";
import { Checkbox } from "./pages/checkbox";
import { Basic } from "./pages/basic";
import "./index.css";
// import "highlight.js/styles/default.css"

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "basic",
        element: <Basic />,
      },
      {
        path: "table",
        element: <TableTest />,
      },
      {
        path: "checkbox",
        element: <Checkbox />,
      },
    ],
  },
]);

export default App;
