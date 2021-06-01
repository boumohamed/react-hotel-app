import React, { useState, useEffect } from 'react'
import {Container} from 'react-bootstrap'
import SimpleUser from './Simpleuser'
import AdminDashbord from './AdminDashbord'
import { useAuth } from "../contexts/AuthContext"
export default function Myaccount() {


    const { currentUser } = useAuth() 
    const [user , setUser ] = useState(currentUser && currentUser.email)

    if(user === 'mb.bouzri@gmail.com')
        return (
            <>
            <Container>       
                    <AdminDashbord />
            </Container>
                
            </>
        )
    else
        return (
            <>
            <Container>
                    <SimpleUser />
            </Container>
                
            </>
        )

}






/* const [show, setShow] = useState(false)
const handleClose = () => setShow(false)
const handleShow = () => setShow(true)
const [reservations, setReservation] = useState([])
const  currentUser = useAuth()


useEffect(async () => {
    
    await axios.get(`/api/reservation/user/${currentUser.email}`)
    .then(res => {
        setReservation(res.data)
        console.log(reservations)
    })        

}, []) 

return (
    <>
    <Container>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Supprimer Reservation de </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    vous êtes sûre ? :)
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={handleClose}>
                    Annuler 
                </Button>
                <Button variant="danger" size="sm">Supprimer <i className="fas fa-minus-circle"></i></Button>
                </Modal.Footer>
        </Modal>

        <Row>
            <Col sm={12} className="py-2">
                    <h4 className='py-3'>Info réservation </h4>
                    <Card>
                        <Card.Body >
                            <Card.Title>Helo </Card.Title>
                            <Card.Text>
                                hei
                            </Card.Text>
                           
                                                        
                            <Button variant="outline-danger" size="sm" onClick={handleShow}>Supprimer</Button> 
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    </Container>
        
    </>
)
 */