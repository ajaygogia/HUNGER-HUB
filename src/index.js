import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById('root'))

const Main = () => {
    return (
        <div id='main'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
        errorElement: <Error />
    },
])

root.render(<RouterProvider router={appRoute} />)

