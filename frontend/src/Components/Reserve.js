import React, {useState, useEffect} from 'react'
import { Container, Button, Form, Alert, Modal } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"


export default function Reserve() {

    const history = useHistory()
    const [error, setError] = useState('')
    const [valid, setValid] = useState(false)
    const [reservation, setReservation] = useState({})
    const [email, setEmail] = useState()
    const [dateD, setDateD] = useState()
    const [dateF, setDateF] = useState()
    let d1 = new Date(reservation.dateD)
    let f1 = new Date(reservation.dateF)
    let d2 = new Date(dateD)
    let f2 = new Date(dateF)
    let today = new Date()
    
    
    let location = useLocation()
    const logement = location.state.logement
    const logementId = logement._id


    const { currentUser } = useAuth()
    const [user, setUser]   = useState({})
    
  
    useEffect(async () => {
        if(currentUser && currentUser.email){
            setEmail(currentUser.email)
            await axios.get(`/api/user/${email}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(error => console.log(error))

            
         }  
        }
)

    function onSubmit(e){
        e.preventDefault()
        if(d1 >= f1 || d1 < today || f1 <= today || d2 > f2 || d2 < today || f2 <= today)
            return setError('verifiez les dates svp :)')
        try{
        
            
            addReservation()
            handleShow()
            setValid(true)
            setReservation({})
            setError('')
        }catch {
            return setError(':(')
        }
    }
    const addReservation = async () => {
        if(currentUser && currentUser.email){
            const date1 = new Date(dateD)
            const date2 = new Date(dateF)
            const diffDays = date2.getDate() - date1.getDate()
            await axios.post('/api/reservation/insert', {...reservation, nom: user.nom, prenom: user.prenom, tel: user.tel, email: user.email, AdminConfirmation: false, userCenceling: false, logementId: logementId, dateDebut: dateD, dateFin: dateF, nombreOfDays: diffDays})  
        }
        else {
            const date1 = new Date(dateD)
            const date2 = new Date(dateF)
            const diffDays = date2.getDate() - date1.getDate()
            await axios.post('/api/reservation/insert', {...reservation, AdminConfirmation: false, userCenceling: false, logementId: logementId, dateDebut: dateD, dateFin: dateF, nombreOfDays: diffDays})  
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        history.push("/myaccount")
    }
    const handleShow = () => setShow(true);
    
    
    if(!currentUser)
    return (
        <>
        <Container className="py-2">
            <NavLink to={`/`} >
                <Button variant="outline-danger" size="sm"><i class="fas fa-arrow-left"></i> Reteour</Button>
            </NavLink>
            
            {error && <Alert variant="danger" className="py-3 my-3">{error}</Alert>}
            {valid && 
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Reservation passés avec <span className="text-success">success</span></Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="success" size="sm" onClick={handleClose}>OK <i className="fas fa-thumbs-up"></i></Button>
                </Modal.Footer>
            </Modal>
            }
            <Form className="py-2" onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" value={reservation.nom} onChange={e => setReservation({ ...reservation, nom: e.target.value })} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Prénom" value={reservation.prenom} onChange={e => setReservation({ ...reservation, prenom: e.target.value })} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tel</Form.Label>
                            <Form.Control type="text" placeholder="Tel" value={reservation.tel} onChange={e => setReservation({ ...reservation, tel: e.target.value })} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Email" value={reservation.email} onChange={e => setReservation({ ...reservation, email: e.target.value })} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>De </Form.Label>
                            <Form.Control type="date" placeholder="de" value={dateD} onChange={e => setDateD( e.target.value )} required/>
                            <Form.Label>À</Form.Label>
                            <Form.Control type="date" placeholder="à" value={dateF} onChange={e => setDateF( e.target.value )} required/>
                        </Form.Group>
                        <Button variant="outline-success" type="submit" size="sm" block>
                            reserver  <i className="fas fa-calendar-check"></i>
                        </Button>
                    </Form>    
        </Container>
        </>
    )
    else
    return (
        <>
        <Container className="py-2">
            <NavLink to={`/`} >
                <Button variant="outline-danger" size="sm"><i class="fas fa-arrow-left"></i> Reteour</Button>
            </NavLink>
            {error && <Alert variant="danger" className="py-3 my-3">{error}</Alert>}
            {valid && 
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Reservation passés avec <span className="text-success">success</span></Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="success" size="sm" onClick={handleClose}>OK <i className="fas fa-thumbs-up"></i></Button>
                </Modal.Footer>
            </Modal>
            }
            <Form className="py-2" onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>De </Form.Label>
                            <Form.Control type="date" placeholder="de" value={dateD} onChange={e => setDateD( e.target.value )} required/>
                            <Form.Label>À</Form.Label>
                            <Form.Control type="date" placeholder="à" value={dateF} onChange={e => setDateF( e.target.value )} required/>
                        </Form.Group>
                        <Button variant="outline-success" type="submit" size="sm" block>
                            reserver  <i className="fas fa-calendar-check"></i>
                        </Button>
                    </Form>
                    
        </Container>
            
        </>
    )
}






  /* setReservation(
            {
                nom : nomRef.current.value,
                prenom : prenomRef.current.value,
                tel : telRef.current.value,
                email : emailRef.current.value,
                dateDebut : deDateRef.current.value,
                dateFin : aDateRef.current.value
            }) */
        /* axios.post('/api/articles', article)
        .then(response => setState({ articleId: response.data.id })); */