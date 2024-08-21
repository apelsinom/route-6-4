import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import {PATH, sneakersArr} from "../DateCatalog/Catalog";
import {Prices} from "../components/pages/Prices";
import {Sneakers} from "../components/pages/Sneakers";
import Error404 from "../components/Error404/Error404";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
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
                path: PATH.PRICES,
                element: <Prices/>,
            },
        ]
    },
]);