import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import axios from 'axios'


export default function About() {

    const [error, setError] = useState('')

    const history = useHistory()

    const d = new Date()
    const date =  d.getUTCDay() + '/' + d.getMonth() + '/' + d.getFullYear()

    /* handeling the Modal */
    const [valid, setValid] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        history.push("/myaccount")
    }
    const handleShow = () => setShow(true);

    /* Declarer le Message */
    const [message, setMessage] = useState({user : "", email: "", msg:""})

    /* Fonction permet d'ajouter le message a la base de donnees si on submit */

    const onSubmit = (e) => {
        
        e.preventDefault()
        try{
            addMessage()
            handleShow()
            setValid(true)
            setError('')
        }catch{
            setError(':(')
            console.log(error)
        }
    }
    const addMessage = async () => {
        await axios.post('/api/message/insert/', {...message, date: date})
    }
    return (
        <>
       
       {valid && 
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Message envoyé avec <span className="text-success">success</span></Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="success" size="sm" onClick={handleClose}>OK <i className="fas fa-thumbs-up"></i></Button>
                </Modal.Footer>
            </Modal>
        }
            <Container className="py-2">
            <div className="d-flex justify-content-center align-items-center h-25">
                <h1 className="text-primary mb-0">HOTEL<i className="fas fa-star text-warning App-logo"></i>LA STAR</h1>
            </div>
            <Row className="my-5">
                <Col sm={6} >
                <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicNom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" value={message.user} onChange={e => setMessage({ ...message, user: e.target.value })} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Email" value={message.email} onChange={e => setMessage({ ...message, email: e.target.value })} required/>
                        </Form.Group>
                        <Form.Group controlId="message" >
                            <Form.Label>Email </Form.Label>
                            <Form.Control as="textarea" rows={3} className="textarea" value={message.msg} onChange={e => setMessage({ ...message, msg: e.target.value })} required/>
                        </Form.Group>
                        
                        <Button variant="outline-success" type="submit" size="sm">
                            envoyer  <i className="fas fa-paper-plane"></i>
                        </Button>
                    </Form>
                </Col>
                <Col sm={6}>
                <Card className="py-3" >
                        <Card.Body >
                            <Card.Title><h5><i className="fas fa-at"></i> Contactez Nous</h5> </Card.Title>
                            <Card.Text>
                            <i className="fas fa-phone-alt"></i> +212 6 55 87 58 91
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-phone-alt"></i> +212 6 04 02 43 25
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-envelope"></i> mb.bouzri@gmail.com
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-envelope"></i> ay.fadouache@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>           
        </Container> 
                 
        </>
    )
}

/*

https://www.hotels.com/ho255339/?destination-id=255339&q-check-in=2021-04-29&q-check-out=2021-04-30&q-rooms=1&q-room-0-adults=2&q-room-0-children=0

*/