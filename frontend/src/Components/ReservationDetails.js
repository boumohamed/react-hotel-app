import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import LogementImages from './LogementImages'

// affichages des differentes informations de Logements concerné

export default function ReservationDetails() {

    // recuperer les donnes de du logement qu'on veut ses details 
    // le logement est passé a ce component par NavLink
    let location = useLocation()
    const Room = location.state.Room
    
    
    return (
        <>
            <Container >
            <LogementImages logement={Room} />
            <Row>
                <Col sm={12}>
                <Card>
                <Card.Body>
                    <Card.Title>{Room.name}</Card.Title>
                    <Card.Text>
                        {Room.litDouble? <><i className="fas fa-bed"></i> lit Double </> : <><i className="fas fa-bed"></i> {Room.nombreDeLits === 1 ? <> lit simple </> : <> 2 lits simples </>} </>} {Room.superficie} m² 
                    </Card.Text>
                    <Card.Text>
                       {Room.nombreDePersonne === 1 ? <><i className="fas fa-user-alt"></i> une personne  </> : null }
                       {Room.nombreDePersonne === 2 ? <><i className="fas fa-user-alt"></i><i class="fas fa-user-alt"></i> 2 personnes </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.jardin ? <><i className="fas fa-tree"></i> vue sur le jardin  </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.ville? <><i className="fas fa-city"></i> vue sur la ville  </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.wifi? <><i className="fas fa-wifi"></i> wifi gratuit  </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.miniBar? <><i className="fas fa-glass-cheers"></i> mini Bar  </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.television? <><i className="fas fa-tv"></i> Television  </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.balcone? <><i className="fas fa-door-open"></i> Balcone  </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.parking? <><i className="fas fa-parking"></i> Le parking gratuit et privé est disponible sur place (sans réservation préalable).  </> : null }
                    </Card.Text>
                    <Card.Text>
                       {Room.options.climatisation? <><i className="fas fa-fan"></i> Climatisation  </> : null }
                    </Card.Text>
                    <Card.Text>
                        {Room.prix} MAD / JOUR
                    </Card.Text>
                    <div className="d-flex justify-content-center align-items-center">
                        <NavLink 
                            to='/'
                            className="py-2 mx-2"
                            >
                                <Button variant="outline-danger" size="sm"><i className="fas fa-arrow-left"></i> Reteour</Button>
                            </NavLink>
                            <NavLink 
                            to={{
                                pathname:`/hotel/${Room._id}/reserve`,
                                state: {logement:Room}  
                                }}
                            >
                                <Button variant="outline-success" size="sm"><i className="fas fa-arrow-right"></i> Reserver</Button>
                        </NavLink>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            </Row>
                
            </Container>
        </>
    )
}
