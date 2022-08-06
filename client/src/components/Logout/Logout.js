import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const {user, userLogout} = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
        .then(() => {
            userLogout();
            navigate('/');
        })
        .catch(() => {
            navigate('/');
        })
    } ,[navigate, user.accessToken, userLogout]);
    
    return null;
}

export default Logout;