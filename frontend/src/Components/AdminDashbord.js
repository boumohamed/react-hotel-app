import React, {useState, useEffect} from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import Loading from './Loading'
import { useAuth } from "../contexts/AuthContext"
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from "react-router-dom"
import axios from 'axios'

export default function AdminDashbord() {


    
    
    const [reservations, setReservations] = useState([])
    /* fonction pour recuperer tout les reservations */
    useEffect(async () => {
        await axios.get('/api/reservations/')
        .then(res => {
            setReservations(res.data)
        })
        .catch(error => console.log(error))
    }
    ) 
    
    const [isLoading, setLoading] = useState(true)

    /* afficher l'effet de loading pendant 2000ms avant d'ffachier tout les reservation */

   useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000)
    })

    return (
        <>
         {isLoading?
            <Container className="d-flex justify-content-center align-items-center py-5 h-100">
                <Loading />
            </Container>
        :
        <Container className="py-2">
            <div className="d-flex justify-content-center align-items-center h-25">
                <NavLink to='/messages'>
                    <Button variant="outline-warning"><i className="fas fa-envelope-open-text"></i> Messages</Button>
                </NavLink>
            </div>
           <h4 className="py-2 text-primary">Réservations </h4>
            <Table hover variant="light">
                <thead>
                    <tr className="text-primary">
                    <th>#</th>   
                    <th>Client</th>
                    <th>email</th>
                    <th>etat</th>
                    </tr>
                </thead>
                <tbody>
                {
                    reservations.map((reservation, index) => 
                        <LinkContainer  to={`/admin/reservation/${reservation._id}`} key={reservation._id}>
                        <tr className={reservation.AdminConfirmation? 'text-light bg-success': null}>
                            <td>{index + 1}</td> 
                            <td>{reservation.nom} {reservation.prenom}</td>
                            <td>{reservation.email}</td> 
                            <td>{reservation.userCenceling && !reservation.AdminConfirmation? <>Annuler</> : <>en cours</>}</td>                            
                        </tr>
                        </LinkContainer>
                    )
                }
                
                </tbody>
            </Table>
        </Container>
    }
        </>
    )
}
