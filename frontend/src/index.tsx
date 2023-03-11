import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Toolbar from './components/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import TaskCard from './components/TaskCard';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/Register/SignUp';
import CustomizeProfile from './pages/Login/CustomizeProfile';
import Groups from './pages/Login/Groups';
import Verification from './pages/Login/Register/Verification';
import EmailSendAgain from './pages/Login/Register/EmailSendAgain';
import ImproveYourPrivacy from './pages/Login/Register/ImproveYourPrivacy';
import ConnectToSocialMedia from './pages/Login/Register/ConnectToSocialMedia';
import InputDigitCode from './pages/Login/Register/InputDigitCode';
import LetGetYouStarted from './pages/Login/Register/LetGetYouStarted';
import VerifyUserLogin from './pages/Login/VerifyUserLogin';
import WhyAreYouHere from './pages/Login/Register/WhyAreYouHere';
import Interests from './pages/Login/Register/Interests';
import Community from './pages/Login/Register/Community';
import UserProfile from './pages/Login/UserProfile';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    gql,
} from '@apollo/client';
import APIReferenceComponent from './components/dataBase/APIReferenceComponent';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// use express and node when working with server side
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
        path: '/ConnectToSocial',
        element: <ConnectToSocialMedia />,
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
    },
    {
        path: '/EmailSendAgain',
        element: <EmailSendAgain />,
    },
    {
        path: '/ImproveYourPrivacy',
        element: <ImproveYourPrivacy />,
    },
    {
        path: '/InputDigitCode',
        element: <InputDigitCode />,
    },
    {
        path: '/LetGetYouStarted',
        element: <LetGetYouStarted />,
    },
    {
        path: '/VerifyUserLogin',
        element: <VerifyUserLogin />,
    },
    {
        path: '/WhyAreYouHere',
        element: <WhyAreYouHere />,
    },
    {
        path: '/Interests',
        element: <Interests />,
    },
    {
        path: '/Community',
        element: <Community />,
    },
    {
        path: '/UserProfile',
        element: <UserProfile />,
    },
    {
        path: '/client',
        element: <APIReferenceComponent />,
    },
]);
const Client = new ApolloClient({
    uri: `${process.env.REACT_APP_API_ENDPOINT}?key=${process.env.REACT_APP_API_KEY}`,
    cache: new InMemoryCache(),
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={Client}>
            <ThemeProvider theme={theme}>
                <Toolbar />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);
