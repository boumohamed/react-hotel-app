import React, {useState, useEffect} from 'react'
import {Col, Row, Card, Button, Modal, Container, Table} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import axios from 'axios'
import Loading from './Loading'
export default function SimpleUser() {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const history = useHistory()
    const { currentUser } = useAuth()
    const [user , setUser ] = useState(currentUser && currentUser.email) /* recuperer user connecté depuis le context de firebase (firebaseAuth)*/ 
    const [reservations, setReservations] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [id, setID] = useState('')
    const [error, setError] = useState('')
    
    const handleShow = () => {
        setShow(true)
    }
   


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    })



    useEffect(async () => {
        
        await axios.get(`/api/reservation/user/${user}`)
        .then(res => {
            setReservations(res.data)           
        })
        .catch(error => console.log(error))
    }, []) 

   

    return (

       
        <>
         {isLoading?
            <Container className="d-flex justify-content-center align-items-center py-5 h-100">
                <Loading />
            </Container>
        :
       <>
        <Container className="py-2">
           
           <Table hover variant="light">
               <thead>
                   <tr className="text-primary">
                   <th>#</th>
                   <th>Date de debut</th>
                   <th>Date de Fin</th>
                   </tr>
               </thead>
               <tbody>
               {
                   reservations.filter(reservation => reservation.userCenceling === false).map((reservation, index) => 
                       <LinkContainer  to={`/user/reservation/${reservation._id}`} key={reservation._id}>
                      <tr>
                           <td>{index + 1}</td>
                           <td>{reservation.dateDebut}</td>
                           <td>{reservation.dateFin}</td>                            
                       </tr>
                       </LinkContainer>
                   )
               }
               
               </tbody>
           </Table>
       </Container>
             </>
         }
        </>
    )
}
