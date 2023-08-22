import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './AppClass';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Resources from './components/Resources';


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
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
         {/* <AppClass />*/}
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  </React.StrictMode>
);


