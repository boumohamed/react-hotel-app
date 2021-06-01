import React, { useState, useEffect } from 'react'
import { Container, Card, Button, Modal } from 'react-bootstrap'
import { useParams, NavLink, useHistory } from "react-router-dom"
import Loading from './Loading'

import axios from 'axios'

export default function MessageDetails() {

    let params = useParams()
    const id = params.id
    const history = useHistory()
    const [message, setMessage] = useState({})


    useEffect(async () => {   
        await axios.get(`/api/message/${id}`)
        .then(res => {
            setMessage(res.data)           
        })
        .catch(error => console.log(error))
    }, []) 

    const deleteMessage = async () => {
        await axios.get(`/api/message/delete/${message._id}`)
        handleClose()
        history.push('/messages')
    }

    const [isLoading, setLoading] = useState(true)
    /* afficher le loading effect pendant 1000ms */
   useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 1000)
})

/* Modal */
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    return (
        <>

                
        

        {isLoading?
            <Container className="d-flex justify-content-center align-items-center py-5 h-100">
                <Loading />
            </Container>
        :
            <>

            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Supprimer le message de <span className="text-success">{message.username}</span></Modal.Title>
            </Modal.Header>
            <Modal.Footer>
            <Button variant="success" size="sm" onClick={handleClose}>
                Non 
            </Button>
            <Button variant="danger" size="sm" onClick={deleteMessage}>Oui</Button>
            </Modal.Footer>
        </Modal>

            <Container className='py-2'>
            <NavLink to='/messages'>
                    <Button variant="outline-danger" size="sm"><i className="fas fa-arrow-left"></i> Reteour</Button>
                </NavLink>
            <Card className="py-3 my-3">
                <Card.Body >
                    <Card.Title> {message.username} </Card.Title>
                    <Card.Text>
                        " {message.message} "
                    </Card.Text>
                    <Card.Text>
                        {message.date}
                    </Card.Text>
                    <Card.Text>
                        <i className="fas fa-envelope"></i> {message.email}
                    </Card.Text>
                    
                                                                        
                    <Button variant="outline-danger" className="mx-2" size="sm" onClick={handleShow} >Supprimer</Button>
                </Card.Body>
            </Card>
            </Container>
        </>
        }
        </>
    )
}
