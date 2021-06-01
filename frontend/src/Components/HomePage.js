import React, {useEffect ,useState} from 'react'
import { Carousel } from 'react-bootstrap'



import Room from './Room'
import axios from 'axios'


import '../style/App.css'
import Home from './Home'
/*   */
export default function HomePage() {

    const [isLoading, setLoading] = useState(true)
    const [logements, setLogement] = useState([])

    useEffect(async () => {
        await axios.get('/api/logements/')
        .then(res => {
            setLogement(res.data)
        })
        .catch(error => console.log(error))
        
    }, []
) 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    })
    return (
            <>
            <Home />
            <Carousel fade>
                {
                    
                    logements.filter(logement => logement.disponibilite > 0 ).map(room =>
                        <Carousel.Item key={room._id}>
                        <img
                        className="d-block w-100"
                        width={900} height={700}
                        src={room.img1}
                        alt={room.name}
                        />
                        <Carousel.Caption>
                        <h3 className='text-light'>{room.name}</h3>
                        </Carousel.Caption>
                        </Carousel.Item>      
                        )
                }
                          
            </Carousel>
            {/* <Row>
                {
                    logements.filter(logement => logement.disponibilite > 0 ).map(room => <Col className="py-2" sm={6} key={room._id}>
                       <Room Room={room}/>
                    </Col>)
                }
            </Row> */}
        </>
     
       
    )
}
