import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Toolbar from './components/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './index.css';
import TaskCard from './components/TaskCard';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/Register/SignUp';
import SocialMedia from './pages/Login/SocialMedia';
import CustomizeProfile from './pages/Login/CustomizeProfile';
import Groups from './pages/Login/Groups';
import Verification from './pages/Login/Register/Verification';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <TaskCard
          name='Task Name'
          community='Community Name'
          location='Location'
          description='Some text here'
          type='small'
        />
        <TaskCard
          name='Task Name'
          community='Community Name'
          location='Location'
          description='Some text here'
          type='large'
        />
      </>
    ),
  },
  {
    path: '/home',
    element: (
      <div>
        <b>Home</b>
      </div>
    ),
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <SignUp />,
  },
  {
    path: '/Socialmedia',
    element: <SocialMedia />,
  },
  {
    path: '/Customizeprofile',
    element: <CustomizeProfile />,
  },
  {
    path: '/Groups',
    element: <Groups />,
  },
  {
    path: '/Verification',
    element: <Verification />,
  }


]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toolbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
