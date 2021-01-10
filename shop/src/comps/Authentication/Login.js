import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {auth} from '../../firebase/config';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from './AuthContext';
import './Authentication.css'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { login } = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value,passwordRef.current.value);
            history.push("/");
    } catch {
        setError("Email or password is incorrect");
    }
    setLoading(false);
    
    }
    return (
        <>
        <div className="center">
            <div>
                <h1 className="text-center mb-4"> Login </h1>
                {error && <Alert> {error} </Alert>}
                <div className="container-wrapper">
                <Form onSubmit = {handleSubmit}>
                    <div id="email">
                        <Form.Label>Email</Form.Label>
                        <br/>
                        <Form.Control type="email" ref={emailRef} required/>
                    </div>

                    <Form.Group id="password">
                        <br/>
                        <Form.Label>Password</Form.Label>
                        <br/>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <br/>
                    <Button disabled={loading} className="w-100" type="submit">Login</Button>
                    <br/>
                    <Link to='/forgotPassword'>Forgot password?</Link>
                </Form> 
                </div>
            </div>
            <div className="w-100 text-center mt-2">
            Dont have an account? 
            <Link to="/signup" >Create an account</Link>
        </div>
        </div>
        </>
)}

export default Login;
