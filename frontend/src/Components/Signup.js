import React, {useRef, useState} from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    
    const passwordRef = useRef()
    const passwordConfirmdRef = useRef()
    const [user, setUser] = useState({})
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

   async function onSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmdRef.current.value){
            return setError('mot de passe incorrect :( Ressyez')
        }
        try{
            setError('')
            setLoading(true)
            await signup(user.email, passwordRef.current.value)
            history.push('/')
            addUser()
            
        }catch{
            setError('Impossible de se connecter :(')
        }
        setLoading(false)
        
    }

    const addUser = async () => {
        await axios.post('/api/user/insert/', user)  
      }


    return (
        <>
        
            <Container className="py-2">
               
                {error && <Alert variant="danger">{error}</Alert>}
                <h2 className="text-warning">Join us</h2>
                <Form onSubmit={onSubmit}>
                        <Form.Group id="username">
                            <Form.Label>username</Form.Label>
                            <Form.Control type="text" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} placeholder="username" required/>
                        </Form.Group>
                        <Form.Group id="nom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" value={user.nom} onChange={e => setUser({ ...user, nom: e.target.value })} placeholder="Nom" required/>
                        </Form.Group>
                        <Form.Group id="prenom">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" value={user.prenom} onChange={e => setUser({ ...user, prenom: e.target.value })} placeholder="Prenom" required/>
                        </Form.Group>
                        <Form.Group id="tel">
                            <Form.Label>Tel</Form.Label>
                            <Form.Control type="text" value={user.tel} onChange={e => setUser({ ...user, tel: e.target.value })} placeholder="Telephone" required/>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} placeholder="Email" required/>
                        </Form.Group>
                        <Form.Group id="parssword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="password" required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmdRef} placeholder="Password confirmation" required/>
                        </Form.Group>
                        <Button disabled={loading} variant="outline-warning" type="submit" size="sm">
                            Sign up 
                        </Button>
                    </Form>
            </Container>
        </>
    )
}
