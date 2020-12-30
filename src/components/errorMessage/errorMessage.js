import React from 'react';
import './errorMessage.css';
import img from './error.webp';

const ErrorMessage = () => {
    return (
        <>
            <img className="error-image" src={img} alt="error"></img>
            <span className="error-text">Something goes wrong</span>
        </>
    )
};

export default ErrorMessage;