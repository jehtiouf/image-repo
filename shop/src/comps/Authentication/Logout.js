import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {NavLink, useHistory} from 'react-router-dom';
import {useAuth} from './AuthContext';

const Logout = () => {
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { currentUser, logout } = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await logout()
            history.push("/login")
    } catch {
        setError("Email or password is incorrect");
    }
    setLoading(false);
    
    }
    return (
        <>
         <div class="center">
            <div>
                {error && <Alert> {error} </Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Button disabled={loading} className="w-100" type="submit">Logout</Button> 
                </Form> 
            </div>
            <NavLink to='/'>Back</NavLink>
        </div>
        </>
)}

export default Logout;
