import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Room({Room}) {
    
    return (
        <>
            
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
                        {Room.prix} MAD / JOUR
                    </Card.Text>
                    <NavLink 
                    to={{
                        pathname:`/hotel/${Room._id}`,
                        state: {Room:Room}  
                        }}
                    >
                        <Button variant="outline-success" size="sm">plus de détails <i className="fas fa-arrow-right"></i></Button>
                    </NavLink>
                </Card.Body>
            </Card>
           
        </>
    )
}




{/* <Card style={{ width: '20rem'}}>
                <Card.Img variant="right" src="https://pix10.agoda.net/hotelImages/200524/-1/e7e36079645da64601ea20c5249c367d.jpg?s=1024x768" />
                <Card.Body>
                    <Card.Title>{Room.name}</Card.Title>
                    <Card.Text>
                        {Room.desc}
                    </Card.Text>
                    <Card.Text>
                        {Room.ratting} <i className="fas fa-star text-warning"></i>
                    </Card.Text>
                    <NavLink 
                    to={{
                        pathname:`/hotel/${Room.id}`,
                        state: {Room:Room}  
                        }}
                    >
                        <Button variant="warning">Reserver</Button>
                    </NavLink>
                        
                </Card.Body>
            </Card> */}