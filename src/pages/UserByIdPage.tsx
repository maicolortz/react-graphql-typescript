import React from 'react';
import UserById from '../components/UserById';

export const UserByIdPage: React.FC<{}> = () => {
    return (
        <div>
            <UserById type="view" />
        </div>
    );
};


export const UserDeleteByIdPage: React.FC<{}> = () => {
    return (
        <div >
            <UserById type="delete" />
        </div>
    );
};
