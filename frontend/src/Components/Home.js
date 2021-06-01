import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'

// component pour afficher la barre de rechrche
// les donnes saisies par l' user vont passe a un autre component pour afficher les résultats

export default function Home() {

    /* Declaration des variables de filter user typeLogement & Nombre de persone */
    const [type, setType] = useState('chambre')
    const [number, setNumber] = useState()
     

    
    return (
        <>
        <div className="d-flex justify-content-center centering"> 

         <div class="row align-items-center">
            <div class="col-md-12">
                <Form className="form-inline" >
                    <Form.Group controlId="formBasicDate" className="mx-1">
                    <Form.Label className="mx-1 text-light">Nombre de personne</Form.Label>
                        <Form.Control type="number" with="30" min="0" max="6" value={number} onChange={e => setNumber( e.target.value )}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicDate" className="mx-1">
                    <Form.Label className="mx-1 text-light">Type</Form.Label>
                        <Form.Control as="select" value={type} onChange={e => setType( e.target.value )}>
                            <option value="chambre">Chambre</option>
                            <option value="suite">Suite</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mx-1">
                        <NavLink to={{
                            pathname:`/searche/`,
                            state: {filter : {type : type, number : number}}  
                            }}
                        >
                            <Button variant="outline-light" className="mx-1" size="sm"><i className="fas fa-search"></i></Button>
                        </NavLink>
                    </Form.Group>
                </Form>
            </div>
        </div>      
        </div>
        </>
    )
}


   