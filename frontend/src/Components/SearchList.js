import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useLocation, NavLink } from 'react-router-dom'
import Loading from './Loading'
import Room from './Room'
import axios from 'axios'

export default function SearchList() {

    // recuperer les donnes de filter (nombre de personne et type de logement) passé par NavLink
    let location = useLocation()
    const filter = location.state.filter

   

    const [logements, setLogements] = useState([])
    const [logementVoulu, setLogementVoulu] = useState([])
    const [isLoading, setLoading] = useState(true)

    //recuperer tout les logements
    useEffect(async () => {
       
        await axios.get('/api/logements/')
        .then(res => {
            setLogements(res.data)
        })
        .catch(error => console.log(error))
       
        // filtrer les logements par par les donnes saisies par l'utilisateur
        setLogementVoulu(logements.filter(logement => logement.disponibilite > 0 && logement.type === filter.type && logement.nombreDePersonne === parseInt(filter.number)))
        
    }
)


useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2500)
})
    return (
        <>
        {isLoading? 
        <Container className="d-flex justify-content-center align-items-center py-5">
                <Loading />
        </Container>
    :
   

       
            <>
            
            <Container className="py-2">
            <NavLink to='/'>
                    <Button variant="outline-danger" size="sm"><i className="fas fa-arrow-left"></i> Reteour</Button>
            </NavLink>
             <Row>
                {
                    logementVoulu.map(room => <Col className="py-2" sm={6} key={room._id}>
                       <Room Room={room}/>
                    </Col>)
                }
            </Row>
            </Container>
           
        </>

     }
            
        </>
    )
}
