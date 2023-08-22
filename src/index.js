import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Resources from './components/Resources';
import Appointments from './components/Appointments';
import Login from './components/Login';
import ManageResources from './components/ManageResources';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
      {
        path: "/manage-resources",
        element: <ManageResources />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  </React.StrictMode>
);


