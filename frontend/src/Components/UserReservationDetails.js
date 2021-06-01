import React, { useEffect, useState } from 'react'
import { useParams, NavLink, useHistory } from "react-router-dom"
import Loading from './Loading'
import { Container, Row, Col, Button, Card, Modal} from 'react-bootstrap'
import axios from 'axios'
export default function UserReservationDetails() {

    const params = useParams()
    const id = params.id
    const history = useHistory()
    
    /* Modal */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [reservation, setReservation] = useState({})
    const [logement, setLogement] = useState({})

    useEffect(async () => {
        
        await axios.get(`/api/reservation/${id}`)
        .then(res => {
            setReservation(res.data)
            return res.data.logementId
        }).then( id => {
            return  axios.get(`/api/logement/${id}`)
        })
        .then(res => {
            setLogement(res.data)
        })
        
    }, []) 

    /* catte fonction permet d'annuler un reservation par un utilisateur */
    const SetCancel = async () =>{
        await axios.get(`/api/reservation/setcancel/${reservation._id}`)
        .then(res => {
            setReservation(res.data)
        }).catch(error => console.log(error)) 
        history.push('/myaccount')
        
       }
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        })
    
    const DF = new Date(reservation.dateFin)
    const Today = new Date()
    
    let experation = (DF < Today)
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Supprimer Reservation de <span className="text-success">{logement.name}</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        vous êtes sûre ? :)
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" size="sm" onClick={handleClose}>
                        Non 
                    </Button>
                    <Button variant="danger" size="sm" onClick={SetCancel}>Oui</Button>
                    </Modal.Footer>
                </Modal>
            {isLoading?
                <Container className="d-flex justify-content-center align-items-center py-5 h-100">
                    <Loading />
                </Container>
            :
            <Container className="py-2">
            <NavLink to='/myaccount'>
                <Button variant="outline-danger" size="sm"><i className="fas fa-arrow-left"></i> Reteour</Button>
            </NavLink>
            <Row>
                    <Col sm={6} className="py-2">
                    <h4 className='py-3'>Réservation </h4>
                    <Card>
                        <Card.Body >
                            <Card.Text>
                                <i className="fas fa-calendar"></i> De {reservation.dateDebut} à {reservation.dateFin}
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-calendar-day"></i>  Nombre de jours : {reservation.nombreOfDays} pour {logement.prix} MAD/jour
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-dollar-sign"></i> Total(HT) : {reservation.nombreOfDays * logement.prix} MAD
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-dollar-sign"></i> Taxe : {logement.type === 'chambre'? <>20</>:  <>35</>} MAD
                            </Card.Text>
                            {
                                logement.type === 'chambre'?
                                <Card.Text>
                                    <i className="fas fa-dollar-sign"></i>  Total (TTC) : {reservation.nombreOfDays * logement.prix + 20} MAD
                                </Card.Text>
                                : 
                                <Card.Text>
                                    <i className="fas fa-dollar-sign"></i>  Total (TTC) : {reservation.nombreOfDays * logement.prix + 35} MAD
                                </Card.Text>
                            }
                            {experation?
                                <Card.Text>
                                    <p className="text-danger"><i className="fas fa-info text-danger"></i> réservation expirée </p>
                                </Card.Text>
                            : null}                                                        
                            
                            <Button variant="outline-warning" className="mx-2" size="sm" onClick={handleShow} disabled={experation}>Annuler</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                        <Col sm={6} className="py-2">
                            <h4 className='py-3'>Logement </h4>
                            <Card>
                                <Card.Body>
                                <Card.Title>{logement.name}</Card.Title>
                                <Card.Text>
                                    {logement.litDouble? <><i className="fas fa-bed"></i> lit Double </> : <><i className="fas fa-bed"></i> {logement.nombreDeLits === 1 ? <> lit simple </> : <> 2 lits simples </>} </>} {logement.superficie} m² 
                                </Card.Text>
                                <Card.Text>
                                {logement.nombreDePersonne === 1 ? <><i className="fas fa-user-alt"></i> une personne  </> : null }
                                {logement.nombreDePersonne === 2 ? <><i className="fas fa-user-alt"></i><i class="fas fa-user-alt"></i> 2 personnes </> : null }
                                </Card.Text>
                                <Card.Text>
                                    {logement.prix} MAD / JOUR
                                </Card.Text>
                                </Card.Body>
                            </Card>        
                        </Col>
                    </Row>
                    
            </Container>
        }
            
        </>
    )
}
