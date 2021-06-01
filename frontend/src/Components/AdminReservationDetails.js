import React, {useState, useEffect} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Loading from './Loading'
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card, Modal} from 'react-bootstrap'
import axios from 'axios'

export default function AdminReservationDetails() {
    let params = useParams()
    const id = params.id
    const history = useHistory()
    const [reservation, setReservation] = useState({})
    const [logement, setLogement] = useState({})

    /* recuperer la reservation qui a l'id passé en url
        la fonction use effect s'execute chaque fois il ya un changement dans la page    
    */ 
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
    
    /* Modal */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const DF = new Date(reservation.dateFin)
    const Today = new Date()
    
    /* savoir l'expiration de la reservation */
    let experation = (DF < Today)
    
    /* fonction de supprimer la reservation par un administrateur */
    const Deletereservation = async () =>{
        
        await axios.get(`/api/reservation/delete/${reservation._id}`)
        if(reservation.AdminConfirmation) 
            addDisponibility()
        handleClose()
        history.push('/myaccount')
    }

    /* Valider une reservation en changeant le champs concerner */

   const reservationValidation = async () =>{
    await axios.get(`/api/reservation/valider/${reservation._id}`)
    .then(res => {
        setReservation(res.data)
    })
    minusDisponibility()
   }
   /* annuler la reservation par le uper user en changenat le champs concerné */

   const reservationRemoveValidation = async () =>{
    await axios.get(`/api/reservation/removevalidation/${reservation._id}`)
    .then(res => {
        setReservation(res.data)
    })    
    addDisponibility()
   }

   /* incrementer la disponibilite de logement si on supprime un reservation */
   const addDisponibility = async () =>{
    await axios.get(`/api/logement/adddisponibilite/${logement._id}`)
    .then(res => {
        setLogement(res.data)
    })    
   }

   /* decrimenter la disponibilite de logement si on valide un reservation */
   const minusDisponibility = async () =>{
    await axios.get(`/api/logement/minusdisponibilite/${logement._id}`)
    .then(res => {
        setLogement(res.data)
    })    
   }

   const [isLoading, setLoading] = useState(true)
    /* afficher le loading effect pendant 1000ms */
   useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 1000)
})


    return (
        <>
        {isLoading?
            <Container className="d-flex justify-content-center align-items-center py-5 h-100">
                <Loading />
            </Container>
        :
            <Container className="py-2">
                <NavLink to='/myaccount'>
                    <Button variant="outline-danger" size="sm"><i className="fas fa-arrow-left"></i> Reteour</Button>
                </NavLink>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Supprimer Reservation de <span className="text-success">{reservation.nom} {reservation.prenom}</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        vous êtes sûre ? :)
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={handleClose}>
                        Annuler 
                    </Button>
                    <Button variant="danger" size="sm" onClick={Deletereservation}>Supprimer <i className="fas fa-minus-circle"></i></Button>
                    </Modal.Footer>
                </Modal>



                <Row>
                    <Col sm={6} className="py-2">
                    <h4 className='py-3'>Info réservation </h4>
                    <Card>
                        <Card.Body >
                            <Card.Title>{reservation.nom} {reservation.prenom}</Card.Title>
                            <Card.Text>
                                <i className="fas fa-envelope"></i> {reservation.email}
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-phone"></i> {reservation.tel}
                            </Card.Text>
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
                                    <p className="text-danger"><i className="fas fa-info text-danger"></i> vous ne pouvez pas valider Cette réservation parcequ'elle est expirée </p>
                                </Card.Text>
                            : null}
                            {reservation.userCenceling?
                                <Card.Text>
                                    <p className="text-danger"><i className="fas fa-info text-danger"></i> Client a annulé la réservation </p>
                                </Card.Text>
                            : null}                                                        
                            {!reservation.AdminConfirmation? <Button variant="outline-success" size="sm" disabled={reservation.disponibilite > 0 || experation?true : false || reservation.userCenceling} onClick={reservationValidation}>Valider</Button> : <Button variant="outline-danger" size="sm" onClick={reservationRemoveValidation}>Annuler</Button> }
                            <Button variant="outline-warning" className="mx-2" size="sm" onClick={handleShow}>Supprimer</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={6} className="py-4">
                    <h4 className='py-2'>Logement concerné </h4>
                    <Card className={logement.disponibilite > 0 ? 'bg-success text-light': 'bg-danger text-light'} >
                        <Card.Body>
                            <Card.Title>{logement.name}</Card.Title>
                            <Card.Text>
                                {logement.disponibilite} encore Diponibles
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={reservation.AdminConfirmation? 'bg-success text-light my-2 py-2': 'bg-danger text-light my-2 py-2'} >
                        <Card.Body >
                            <Card.Text>
                               {reservation.AdminConfirmation? <>Réservation valider</>: <>Pas Encore valider</>} 
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
