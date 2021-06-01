import React from 'react'
import { Carousel } from 'react-bootstrap'


export default function LogementImages({logement}) {
    
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                <img
                className="d-block w-100"
                width={900} height={600}
                src={logement.img1}
                />
                <Carousel.Caption>
                <h3 className="text-light">{logement.name}</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                width={900} height={600}
                src={logement.img2}
                />

                <Carousel.Caption>
                <h3  className="text-light">{logement.name}</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                width={900} height={600}
                src={logement.img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3  className="text-light">{logement.name}</h3>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
