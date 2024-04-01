import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Builder from './@/components/pages/Builder.tsx'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from './@/components/Header.tsx'

import {ThemeProvider} from './@/components/theme-provider'
import Footer from './@/components/Footer.tsx'
import SignUp from './@/components/pages/Sign-up.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume-builder",
    element: <Builder />,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  
<Header/>
  <RouterProvider router={router} />
  <Footer/>
  </ThemeProvider>
  </React.StrictMode>,
)
