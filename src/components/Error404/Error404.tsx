import React from 'react';
import e from './Error404.module.css';

const Error404 = () => {
    return (
        <div className={e.container}>
            <h1 className={e.title}>404</h1>
            <p className={e.message}>Page Not Found</p>
            <a href="/" className={e.link}>Go Back Home</a>
        </div>
    );
};

export default Error404;