import React, {useRef, useState} from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Signin() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function onSubmit(e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }catch{
            setError('Impossible de se connecter :(')
        }
        setLoading(false)
        
    }

    return (
        <>
        <Container className="py-2">
            <div className="d-flex justify-content-center align-items-center h-25">
                <h1 className="text-primary mb-0">the star<i className="fas fa-star text-warning App-logo"></i>hotel</h1>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="outline-warning" type="submit" size="sm">
                        Sign in
                    </Button>
                </Form>
        </Container>
        </>
    )
}






















