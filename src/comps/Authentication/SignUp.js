import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link , useHistory} from 'react-router-dom';
import { useAuth } from "./AuthContext"
import {db,timeStamp} from "../../firebase/config"
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { currentUser, signup } = useAuth();
    const createdAt = timeStamp();
    const signUpIcon = require('../../Assets/signup.png')
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        if(passwordRef.current.value !== passwordConfirmRef.current.value)
        {
            setError('Passwords do not match');
        }
        else{
        try{
         setError('');  
         setLoading(true);
         db.collection("listOfUsers").doc(emailRef.current.value).set({name,createdAt});   
         await signup(emailRef.current.value,passwordRef.current.value);
         history.push("/login")
         alert("Account succesfully created!");
        } catch {
            setError("Failed to create an account.");
        }
        setLoading(false);
        }
    }

    return (
       <div className="center">
            <div>
                <Helmet>
                    <title>Image Repo | SignUp</title>
                </Helmet>
            </div>
            <div>
                <div className="container-wrapper">
                    <img className="icon-auth" src={signUpIcon}/>
                    <p>Sign up to share and view photos from your friends <span>{'\u{1F4F8}'}</span></p>
                    <Form onSubmit = {handleSubmit}>
                        <div className="card-container">
                            <Form.Control className="input-auth" placeholder="Full Name" ref={nameRef} required/>
                        </div>

                        <div className="card-container" id="email">
                            <Form.Control className="input-auth" placeholder="Email" type="email" ref={emailRef} required/>
                        </div>

                        <div className="card-container" id="password">                      
                            <Form.Control className="input-auth" placeholder="Password" type="password" ref={passwordRef} required/>
                        </div>

                        <div className="card-container" id="password-confirm">
                            <Form.Control className="input-auth" placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required/>
                        </div>

                        <div className="card-container">
                            <Button className="btn-auth" disabled={loading} type="submit">Sign Up</Button>
                        </div>
                        {error && <Alert className="error"> {error} </Alert>}
                    </Form> 
                </div>
            </div>
            <div className="container-wrapper">
                <div className="card-container">
                    Already have an account? <Link to = '/login' >Log In</Link>
                </div>
            </div>
        </div>
)}

export default SignUp;
