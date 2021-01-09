import React from 'react';
import {Button} from '../app';
import {Link} from 'react-router-dom';
import './notFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <span className="not-found-err">404 error</span>
            <span className="not-found-text">page not found</span>
            <Link to="/">
                <Button className="go-home rounded">Home Page</Button>
            </Link>
        </div>
    )
};

export default NotFoundPage;