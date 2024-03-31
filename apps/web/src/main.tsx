import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Builder from './@/components/pages/Builder.tsx'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from './@/components/Header.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume-builder",
    element: <Builder />,
  },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
