import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homepage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import FormDOKecil from './pages/form10';
import Error from './pages/error404'
import FormDOBesar from './pages/form90';
import List10 from './pages/list10'
import List90 from './pages/list90'
import Print from './pages/print10';
import Perintah from './pages/print90';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage/>,
    errorElement: <Error/>
  },
  {
    path:'/form10',
    element: <FormDOKecil/>
  },
  {
    path:'/form90',
    element: <FormDOBesar/>
  },
  {
    path:'/list90',
    element: <List90/>
  },
  {
    path:'/list10',
    element: <List10/>
  },
  {
    path:'/print10',
    element: <Print/>
  },
  {
    path:'/print90',
    element: <Perintah/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
