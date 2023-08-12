import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./pages/root";
import Event from "./pages/event";
import EventResponse from "./pages/event-response";
import EventResponseYes from "./pages/event-response-yes";
import EventResponseNo from "./pages/event-response-no";
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:eventId",
    element: <Event />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <EventResponse />,
      },
      {
        path: "yes",
        element: <EventResponseYes />,
      },
      {
        path: "no",
        element: <EventResponseNo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="p-2 d-flex align-items-center justify-content-center text-center min-vh-100">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
