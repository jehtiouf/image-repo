import React, {useRef, useState} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {Link , useHistory} from 'react-router-dom';
import { useAuth } from "./AuthContext"
import {db,timeStamp} from "../../firebase/config"

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
            setError("Failed to create an acconut");
        }
        setLoading(false);
        }
    }

    return (
       <div className="center">
            <div>
                <h1 className="text-center mb-4"> Create new account </h1>
                <p>Welcome. <br/> Please create a new account to able to share and view other people's photography</p>
                {error && <Alert> {error} </Alert>}
                <div className="container-wrapper">
                <Form onSubmit = {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <br/>
                        <Form.Control ref={nameRef} required/>
                    </Form.Group>
                    <Form.Group id="email">
                        <br/>
                        <Form.Label>Email</Form.Label>
                        <br/>
                        <Form.Control  type="email" ref={emailRef} required/>
                        <br/>
                    </Form.Group>

                    <Form.Group id="password">
                        <br/>
                        <Form.Label>Password</Form.Label>
                        <br/>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <br/>
                        <Form.Label>Password Confirmation</Form.Label>
                        <br/>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <br/>
                    <Button className="myButton" disabled={loading} className="w-100" type="submit">Create acconut</Button>
                </Form> 
                </div>
            </div>
            <br/>
            <div className="w-100 text-center mt-2">
            Already have an account? 
            <br/>
            <Link to = '/login' >Login</Link>
            </div>
        </div>
)}

export default SignUp;
