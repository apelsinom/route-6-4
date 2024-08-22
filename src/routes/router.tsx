import * as React from "react";
import {createBrowserRouter, Navigate, RouteObject,} from "react-router-dom";
import App from "../App";
import {PATH, sneakersArr} from "../DateCatalog/Catalog";
import {Prices} from "../components/pages/Prices";
import {Sneakers} from "../components/pages/Sneakers";
import {Error404} from "../components/Error404/Error404";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {PrivateRoute} from "./PrivateRoute";
import {LogIn} from "../components/LogIn/LogIn";

const publicRoutes:RouteObject[] = [
    {
        path: '',
        element: <Navigate to={PATH.PAGE1} />,
    },
    {
        path: PATH.PAGE1,
        element: <Sneakers catalog={sneakersArr[PATH.PAGE1]} item={PATH.PAGE1.toUpperCase()}/>,
    },
    {
        path: PATH.PAGE2,
        element: <Sneakers catalog={sneakersArr[PATH.PAGE2]} item={PATH.PAGE2.toUpperCase()}/>,
    },
    {
        path: PATH.PAGE3,
        element: <Sneakers catalog={sneakersArr[PATH.PAGE3]} item={PATH.PAGE3.toUpperCase()}/>,
    },
    {
        path: `${PATH.PAGE1}/:id`,
        element: <Model firm={PATH.PAGE1}/>,
    },
    {
        path: `${PATH.PAGE2}/:id`,
        element: <Model firm={PATH.PAGE2}/>,
    },
    {
        path: `${PATH.PAGE3}/:id`,
        element: <Model firm={PATH.PAGE3}/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: 'error',
        element: <Error404/>,
    },
    {
        path: 'login',
        element: <LogIn/>,
    },
]
const privateRoutes:RouteObject[] = [
    {
        path: 'protected',
        element: <ProtectedPage/>
    },
]

export const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        errorElement: <Navigate to={'/error'}/>,
        children: [
            {
                element: <PrivateRoute/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    },
],
/*    {
    basename: 'route-6-4', // Указание базового адреса
}*/
);
// <Route path={`${PATH.PAGE1}/:id`} element={<Model firm={PATH.PAGE1}/>}/>*/}