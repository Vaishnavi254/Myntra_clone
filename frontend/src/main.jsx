import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import FilteredItems from "./components/FilteredItems.jsx"; // Import the FilteredItems component
import myntraStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main wrapper component for header, footer, and dynamic content
    children: [
      { path: "/", element: <Home /> }, // Home page, renders the default content
      {
        path: "/bag",
        element: <Bag />, 
      },
      {
        path: "/filtered-items", // Route to the filtered items page
        element: <FilteredItems />, // Component for filtered items (e.g., "Men" products)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
