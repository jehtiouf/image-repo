import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {auth} from '../../firebase/config';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from './AuthContext';
import { Helmet } from 'react-helmet';
import './Authentication.css'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { login } = useAuth();
    const loginImage = require('../../Assets/login.png');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value,passwordRef.current.value);
            history.push("/");
    } catch {
        setError("Oh-oh, Looks like your Email and Password dont match.");
    }
    setLoading(false);
    
    }
    return (
        <>
        <div>
            <Helmet>
                <title>Image Repo | Login</title>
            </Helmet>
        </div>
        <div>
            <div>
                <div className="container-wrapper">
                    <img className="icon-auth" src={loginImage}/>
                    <Form onSubmit = {handleSubmit}>
                        <div class="card-container" id="email">
                            <Form.Control className="input-auth" placeholder="Email" type="email" ref={emailRef} required/>
                        </div>

                        <div class="card-container" id="password">
                             <Form.Control className="input-auth" placeholder="Password" type="password" ref={passwordRef} required/>
                        </div>

                        <div class="card-container">
                            <Button disabled={loading} className="btn-auth" type="submit">Log in</Button>
                        </div>
                        {error && <Alert className="error"> {error} </Alert>}
                        <div class="card-container">        
                            <Link to='/forgotPassword'>Forgot password? <span>{'\u{1F914}'}</span> </Link>
                        </div>
                    </Form> 
                    </div>
                </div>
                <div class="container-wrapper">             
                    <div className="card-container">
                        Don't have an account? 
                        <Link  to="/signup" > Sign Up!</Link>
                    </div>
                </div>
        </div>
        </>
)}

export default Login;
