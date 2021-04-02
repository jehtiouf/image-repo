import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  var resetImage = require('../../Assets/forgot-password.jpg')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Email sent to "+ emailRef.current.value)  
    } catch {
      setError("Looks like we don't have that email in our database.")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
            <Helmet>
                <title>Image Repo | Forgot Password</title>
            </Helmet>
      </div>
      <div className="card-layout">
        <div>
          <div className="container-wrapper">
            <img className="icon-auth" src={resetImage}/>
            <h3>Trouble Logging In?</h3>
            <p> Enter your email and we'll send you a link to get you back into your account. <span>{'\u{1F511}'}</span> </p>
          <Form onSubmit={handleSubmit}>
            <div class="card-container" id="email">
              <Form.Control className="input-auth" placeholder="Email" type="email" ref={emailRef} required />
            </div>
            <div className="card-container">
              <Button disabled={loading} className="btn-auth" type="submit">
                Send Login Link
              </Button>
            </div>
            {error && <Alert className="error">{error}</Alert>}
            {message && <Alert className="success">{message}</Alert>} 
          </Form>
        </div>
        <div className="container-wrapper">
            <div className="card-container">
              Already have an account? <Link to="/login">Login</Link>
            </div>
              OR 
            <div className="card-container">
              <Link to="/signup">Create New Account </Link>
            </div>
          </div>
        </div>     
      </div>

    </>
  )
}