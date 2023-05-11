import React from 'react';
import UserPage from '../components/UserPage';

export const UserByIdPage: React.FC<{}> = () => {
    return (
        <div>
            <UserPage type="view" />
        </div>
    );
};


export const UserDeletePage: React.FC<{}> = () => {
    return (
        <div>
            <UserPage type="delete" />
        </div>
    );
};
