import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//page
import App from './App';
import NotFound from './pages/NotFound';
import Health from './pages/Health';
import FindHospital from './pages/FindHospital';

const basename = process.env.PUBLIC_URL;

const routes = [
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/health',
        element: <Health />
      },
      {
        path: '/find-hospital',
        element: <FindHospital />
      }
    ]
  }
]

const router = createBrowserRouter(routes, { basename: basename });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
