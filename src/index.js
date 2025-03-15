import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { lazy, Suspense } from "react";
import UserContext from "./utilities/UserContext";

const root = ReactDOM.createRoot(document.getElementById('root'))

const Main = () => {
    const [userName, setUserName] = useState()
    useEffect(() => {
        const data = {
            name: 'Ajay Gogia'
        }
        setUserName(data.name)
    },[])
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div id='main'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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

