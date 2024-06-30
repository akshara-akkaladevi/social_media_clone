import React from 'react';
import { isAuthenticated, signout } from '../../Backend';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate(); 
    const authenticatedUser = isAuthenticated(); 

    const onSignout = () => {
        signout(); 
        console.log("Signed out");
        navigate('/signin'); 
    };

    return (
        !authenticatedUser ? <h1>Please sign in</h1> :
            <div className='dashboard'>
                <button onClick={onSignout}>Sign Out</button>
                <h1>Hello, {authenticatedUser.user.name}</h1>
            </div>
    );
};

export default Dashboard;