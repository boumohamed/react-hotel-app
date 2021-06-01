import React, { useEffect, useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import Loading from './Loading'
import axios from 'axios'

export default function Messages() {

    const [messages, setMessages] = useState([])

    useEffect(async () => {
        
        await axios.get('/api/messages/')
        .then(res => {
            setMessages(res.data)           
        })
        .catch(error => console.log(error))
    }, []) 


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
            <Container className='py-2'>
            <NavLink to='/myaccount'>
                    <Button variant="outline-danger" size="sm"><i className="fas fa-arrow-left"></i> Reteour</Button>
                </NavLink>
            <Table hover variant="light">
                <thead>
                    <tr className="text-primary">
                    <th>#</th>   
                    <th>user</th>
                    <th>email</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    messages.map((messages, index) => 
                        <LinkContainer  to={`/admin/message/${messages._id}`} key={messages._id}>
                        <tr>
                            <td>{index + 1}</td> 
                            <td>{messages.username}</td>
                            <td>{messages.email}</td> 
                            <td>{messages.date}</td>                            
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
