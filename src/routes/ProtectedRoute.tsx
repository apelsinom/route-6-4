// @flow
import * as React from 'react';
import {Navigate} from 'react-router-dom';

type Props = {
    children: React.ReactNode;
};
export const ProtectedRoute = ({children}: Props) => {
    const isAuthenticated = false
    return isAuthenticated ? <>{children}</> : <Navigate to={'/error'}/>
};