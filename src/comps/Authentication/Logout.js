import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from './AuthContext';
import { Helmet } from 'react-helmet';

const Logout = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {logout } = useAuth()

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
        <div>
            <Helmet>
                <title>Image Repo | Logout</title>
            </Helmet>
        </div>
            <div className="container-wrapper">
                <p> Are you sure you want to Log Out?</p>
                <Form onSubmit = {handleSubmit}>
                    <div className="card-container">
                    <Button className="btn-auth" disabled={loading} type="submit">Log Out</Button>
                    </div> 
                    {error && <Alert> {error} </Alert>}
                </Form> 
                <Link to='/'>Back To Home </Link>
            </div>
        </>
)}

export default Logout;
