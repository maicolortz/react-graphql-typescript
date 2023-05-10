import React from 'react';

interface AlertProps {
    message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
    return <div className="alert">{message}</div>;
};

export default Alert;
