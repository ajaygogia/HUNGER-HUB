import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { lazy, Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'))

const Main = () => {
    return (
        <div id='main'>
            <Header />
            <Outlet />
        </div>
    )
}

const About = lazy(() => import("./components/About"))

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
                element: (<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>)
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/menu/:resId',
                element: <Menu />
            }
        ],
        errorElement: <Error />
    },
])

root.render(<RouterProvider router={appRoute} />)

