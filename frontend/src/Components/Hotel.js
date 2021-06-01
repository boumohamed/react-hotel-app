import React, {useEffect ,useState} from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Room from './Room'
import Rooms from '../data'
//import logements from '../logement'
import axios from 'axios'








export default function Hotel() {
    const [logements, setLogement] = useState([])
    useEffect(() => {
        axios.get('/api/logements/')
        .then(res => {
            setLogement(res.data)
        })
        .catch(error => console.log(error))
    }
    
)
    return (
        <>
            <Container className="py-4">            
            <Row>
                {
                    logements.map(room => <Col className="py-2" sm={12} key={room._id}>
                       <Room Room={room}/>
                    </Col>)
                }
            </Row>        
            </Container>
        </>
       
    )
}



/* <Card>
                <Card.Body>
                    <Card.Title>{Rooms2[0].name}</Card.Title>
                    <Card.Text>
                         
                        {Rooms2[0].options.wifi? <i className="fas fa-wifi"> wifi</i> : null}&nbsp;
                        {Rooms2[0].options.miniBar? <i className="fas fa-glass-cheers"> minibar</i> : null}&nbsp;
                        {Rooms2[0].options.wifi? <i className="fas fa-wifi"> wifi</i> : null}
                    </Card.Text>
                    <Card.Text>
                        {Rooms2[0].ratting} <i className="fas fa-star text-warning"></i>
                    </Card.Text>
                    <Card.Text>
                        {Rooms2[0].prix} MAD
                    </Card.Text>
                    
                </Card.Body>
            </Card> */
